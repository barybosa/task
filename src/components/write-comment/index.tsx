import React from "react";
import { currentUser } from "../../common/constants";
import { TextArea } from "../../common/styled";
import { useWriteComment } from "../../hooks/useWriteComment";
import { Avatar } from "../avatar";
import {
	Container,
	ErrorMessage,
	Header,
	InformationContainer,
	Name,
	NameContainer,
	Section,
	SendButton,
	Title,
	Username,
} from "./styled";
import { WriteCommentProps } from "./types";

const WriteComment: React.FC<WriteCommentProps> = ({
	addComment,
	parentId,
	setIsReplying,
}) => {
	const { emptyError, form, submit } = useWriteComment(
		addComment,
		parentId,
		setIsReplying
	);

	return (
		<Container>
			<Header>
				<Avatar isOnline src={currentUser.profilePicture} />
				<InformationContainer>
					<NameContainer>
						<Name>
							{currentUser.name} {currentUser.surname}
						</Name>
						<Username>{currentUser.username}</Username>
					</NameContainer>
					<Title>{currentUser.title}</Title>
				</InformationContainer>
			</Header>

			<Section>
				<form action="" onSubmit={submit} ref={form}>
					<TextArea name="comment" placeholder="Add a comment..." />
					{emptyError && <ErrorMessage>Comment cannot be empty</ErrorMessage>}
					<SendButton type="submit">Send</SendButton>
				</form>
			</Section>
		</Container>
	);
};

export { WriteComment };
