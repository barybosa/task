import formatDistanceToNow from "date-fns/formatDistanceToNow";
import React from "react";
import { Arrow } from "../../assets/images/arrow";
import { Edit } from "../../assets/images/edit";
import { Reply } from "../../assets/images/reply";
import { Trash } from "../../assets/images/trash";
import { currentUser } from "../../common/constants";
import { TextArea } from "../../common/styled";
import { useComment } from "../../hooks/useComment";
import { getUserVote } from "../../hooks/useComments/utils";
import { Avatar } from "../avatar";
import { Button } from "../button";
import { WriteComment } from "../write-comment";
import {
	Container,
	ActionsContainer,
	Header,
	InformationContainer,
	Name,
	RelativeDate,
	Replies,
	You,
	DownArrow,
	SectionContainer,
	StyledComment,
	VoteButton,
	VoteContainer,
	VoteCount,
	EditArea,
} from "./styled";
import { CommentProps } from "./types";

const Comment: React.FC<CommentProps> = ({
	addComment,
	comment,
	editComment,
	removeComment,
	replyIndex = 0,
	voteComment,
}) => {
	const {
		edit,
		editClick,
		isCollapsed,
		isEditing,
		isReplying,
		remove,
		reply,
		setIsCollapsed,
		setIsReplying,
		setTextToEdit,
	} = useComment(comment, removeComment, editComment);

	return (
		<>
			<Container $replyIndex={replyIndex}>
				<Header onClick={() => setIsCollapsed(!isCollapsed)}>
					<InformationContainer>
						<Avatar isOnline={comment.isOnline} src={comment.profilePicture} />
						<Name>
							{comment.name} {comment.surname}
						</Name>
						{comment.userId === currentUser.id && <You>You</You>}
						{comment.children.length > 0 && isCollapsed && (
							<Replies>
								+{comment.children.length}
								{comment.children.length === 1 ? " Reply" : " Replies"}
							</Replies>
						)}
						<RelativeDate>
							{formatDistanceToNow(new Date(comment.date), { addSuffix: true })}
						</RelativeDate>
					</InformationContainer>

					<ActionsContainer>
						{comment.userId === currentUser.id && (
							<>
								<Button appearance="ghost" danger icon={Trash} onClick={remove}>
									Delete
								</Button>
								<Button appearance="ghost" icon={Edit} onClick={editClick}>
									Edit
								</Button>
							</>
						)}
						<Button appearance="ghost" icon={Reply} onClick={reply}>
							Reply
						</Button>
					</ActionsContainer>
				</Header>

				{!isCollapsed && (
					<SectionContainer>
						<VoteContainer>
							<VoteButton
								appearance="ghost"
								icon={Arrow}
								onClick={() => voteComment(comment.id, "upvote")}
							/>
							<VoteCount $voteType={getUserVote(comment.id)}>
								{comment.vote}
							</VoteCount>
							<VoteButton
								appearance="ghost"
								icon={DownArrow}
								onClick={() => voteComment(comment.id, "downvote")}
							/>
						</VoteContainer>

						{isEditing ? (
							<EditArea>
								<TextArea
									defaultValue={comment.text}
									onChange={(event) => setTextToEdit(event.target.value)}
								/>
								<Button onClick={edit}>Edit</Button>
							</EditArea>
						) : (
							<StyledComment>{comment.text}</StyledComment>
						)}
					</SectionContainer>
				)}

				{isReplying && (
					<WriteComment
						addComment={addComment}
						parentId={comment.id}
						setIsReplying={setIsReplying}
					/>
				)}
			</Container>

			{!isCollapsed &&
				comment.children.map((childComment) => (
					<Comment
						addComment={addComment}
						comment={childComment}
						editComment={editComment}
						key={childComment.id}
						removeComment={removeComment}
						replyIndex={replyIndex + 1}
						voteComment={voteComment}
					/>
				))}
		</>
	);
};

export { Comment };
