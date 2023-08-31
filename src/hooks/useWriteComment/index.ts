import { useCallback, useRef, useState } from "react";
import { currentUser } from "../../common/constants";
import { isEmpty } from "../../utils/validators";
import { AddComment } from "./types";

const useWriteComment = (
	addComment: AddComment,
	parentId?: string,
	setIsReplying?: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const form = useRef<HTMLFormElement>(null);
	const [emptyError, setEmptyError] = useState(false);

	const submit = useCallback(
		(event: React.FormEvent) => {
			event.preventDefault();
			const formData = new FormData(event.target! as HTMLFormElement);
			const formProps = Object.fromEntries(formData as any);

			if (isEmpty(formProps.comment)) {
				return setEmptyError(true);
			} else {
				setEmptyError(false);
			}

			addComment(
				{
					id: Math.random().toString(36),
					userId: currentUser.id,
					name: currentUser.name,
					surname: currentUser.surname,
					text: formProps.comment,
					vote: 0,
					date: new Date().toISOString(),
					profilePicture: currentUser.profilePicture,
					isOnline: true,
					children: [],
				},
				parentId
			);

			form.current?.reset();
			setIsReplying?.(false);
			return false;
		},
		[addComment, parentId, setIsReplying]
	);

	return {
		form,
		emptyError,
		submit,
	};
};

export { useWriteComment };
