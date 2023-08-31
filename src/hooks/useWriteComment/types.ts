import { Comment } from "../../assets/data/types";

type AddComment = (newComment: Comment, parentId?: string) => void;

export { AddComment };
