import { Comment } from "../../assets/data/types";
import { VoteType } from "../../hooks/useComments/types";

type CommentProps = {
	addComment: (newComment: Comment, parentId?: string) => void;
	comment: Comment;
	editComment: (commentId: string, updatedText: string) => void;
	removeComment: (commentId: string) => void;
	replyIndex?: number;
	voteComment: (commentId: string, voteType: VoteType) => void;
};

export { CommentProps };
