import React from "react";
import { Comment } from "../../assets/data/types";

type WriteCommentProps = {
	addComment: (newComment: Comment, parentId?: string) => void;
	parentId?: string;
	setIsReplying?: React.Dispatch<React.SetStateAction<boolean>>;
};

export { WriteCommentProps };
