import React from "react";
import { useComments } from "../../hooks/useComments";
import { Comment } from "../comment";
import { WriteComment } from "../write-comment";
import { CommentsContainer, Container } from "./styled";

const Comments: React.FC = () => {
	const { addComment, comments, removeComment, editComment, voteComment } =
		useComments();

	return (
		<Container>
			<CommentsContainer>
				{comments.map((comment) => (
					<Comment
						addComment={addComment}
						comment={comment}
						editComment={editComment}
						key={comment.id}
						removeComment={removeComment}
						voteComment={voteComment}
					/>
				))}

				<WriteComment addComment={addComment} />
			</CommentsContainer>
		</Container>
	);
};

export { Comments };
