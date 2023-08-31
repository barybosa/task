import { useCallback, useEffect, useState } from "react";
import { comments as initialComments } from "../../assets/data";
import {
	Comment as CommentType,
	Comments as CommentsType,
} from "../../assets/data/types";
import { VoteType } from "./types";
import { getUserVote, registerVote } from "./utils";

const useComments = () => {
	const [comments, setComments] = useState<CommentsType>(() => {
		const localData = localStorage.getItem("comments");
		return localData ? JSON.parse(localData) : initialComments;
	});

	useEffect(() => {
		localStorage.setItem("comments", JSON.stringify(comments));
	}, [comments]);

	const addComment = useCallback(
		(newComment: CommentType, parentId?: string) => {
			if (!parentId) {
				setComments((prevComments) => [...prevComments, newComment]);
				return;
			}

			const addReplyToComment = (comments: CommentsType): CommentsType => {
				return comments.map((comment) => {
					if (comment.id === parentId) {
						return {
							...comment,
							children: [...comment.children, newComment],
						};
					}
					if (comment.children.length) {
						return {
							...comment,
							children: addReplyToComment(comment.children),
						};
					}
					return comment;
				});
			};

			setComments((prevComments) => addReplyToComment(prevComments));
		},
		[]
	);

	const removeComment = useCallback((commentId: string) => {
		const removeCommentById = (comments: CommentsType): CommentsType => {
			return comments.reduce<CommentsType>((accumulator, comment) => {
				if (comment.id === commentId) {
					// skip this comment to remove it
					return accumulator;
				}
				if (comment.children.length) {
					return [
						...accumulator,
						{
							...comment,
							children: removeCommentById(comment.children),
						},
					];
				}
				return [...accumulator, comment];
			}, []);
		};

		setComments((prevComments) => removeCommentById(prevComments));
	}, []);

	const editComment = useCallback((commentId: string, updatedText: string) => {
		const updateCommentTextById = (comments: CommentsType): CommentsType => {
			return comments.map((comment) => {
				if (comment.id === commentId) {
					return {
						...comment,
						text: updatedText,
					};
				}
				if (comment.children.length) {
					return {
						...comment,
						children: updateCommentTextById(comment.children),
					};
				}
				return comment;
			});
		};

		setComments((prevComments) => updateCommentTextById(prevComments));
	}, []);

	const voteComment = useCallback((commentId: string, voteType: VoteType) => {
		const previousVote = getUserVote(commentId);

		const updateVoteById = (comments: CommentsType): CommentsType => {
			return comments.map((comment) => {
				if (comment.id === commentId) {
					let updatedVote = comment.vote;

					if (previousVote === voteType) {
						// user clicked the same vote, so revert the vote
						updatedVote =
							voteType === "upvote" ? comment.vote - 1 : comment.vote + 1;
						registerVote(commentId, null);
					} else {
						if (!previousVote) {
							// user voted for the first time
							updatedVote =
								voteType === "upvote" ? comment.vote + 1 : comment.vote - 1;
						} else {
							// user voted the opposite of their previous vote
							updatedVote =
								voteType === "upvote" ? comment.vote + 2 : comment.vote - 2;
						}
						registerVote(commentId, voteType);
					}

					return { ...comment, vote: updatedVote };
				}
				if (comment.children.length) {
					return {
						...comment,
						children: updateVoteById(comment.children),
					};
				}
				return comment;
			});
		};

		setComments((prevComments) => updateVoteById(prevComments));
	}, []);

	return { comments, addComment, removeComment, editComment, voteComment };
};

export { useComments };
