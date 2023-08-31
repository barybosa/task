import { useCallback, useState } from "react";
import { Comment } from "../../assets/data/types";

const useComment = (
	comment: Comment,
	removeComment: (commentId: string) => void,
	editComment: (commentId: string, updatedText: string) => void
) => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [isReplying, setIsReplying] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [textToEdit, setTextToEdit] = useState(comment.text);

	const remove = useCallback(
		(event: React.MouseEvent<HTMLElement>) => {
			event.stopPropagation();
			removeComment(comment.id);
		},
		[comment.id, removeComment]
	);

	const reply = useCallback((event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		setIsReplying(true);
	}, []);

	const editClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		setIsEditing(true);
	}, []);

	const edit = useCallback(() => {
		editComment(comment.id, textToEdit);
		setIsEditing(false);
	}, [comment.id, editComment, textToEdit]);

	return {
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
	};
};

export { useComment };
