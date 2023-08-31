import styled from "styled-components";
import { Arrow } from "../../assets/images/arrow";
import { VoteType } from "../../hooks/useComments/types";
import { Button } from "../button";

export const Container = styled.div<{ $replyIndex: number }>`
	background-color: #fff;
	border-radius: 8px;
	margin-bottom: 16px;
	margin-left: ${({ $replyIndex }) => `${$replyIndex * 32}px`};
`;

export const Header = styled.div`
	border-bottom: 1px solid #eaecf0;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	padding: 16px 20px 16px 16px;
`;

export const InformationContainer = styled.div`
	align-items: center;
	display: flex;
	gap: 16px;

	@media (max-width: 480px) {
		gap: 4px;
	}
`;

export const Name = styled.h3`
	font-size: 1.15rem;
	font-weight: 500;
`;

export const You = styled.div`
	background-color: #f2f4f7;
	border-radius: 16px;
	color: #344054;
	font-size: 0.85rem;
	font-weight: 500;
	padding: 2px 8px;
`;

export const Replies = styled.div`
	background-color: #ecfdf3;
	border-radius: 16px;
	color: #027a48;
	font-size: 0.85rem;
	font-weight: 500;
	padding: 2px 8px;
`;

export const RelativeDate = styled.div`
	color: #667085;
	font-size: 1.15rem;
	font-weight: 400;
`;

export const ActionsContainer = styled.div`
	align-items: center;
	display: flex;
	gap: 16px;
`;

export const SectionContainer = styled.div`
	display: flex;
	gap: 16px;
	padding: 16px;
`;

export const VoteContainer = styled.div`
	align-items: center;
	border-radius: 8px;
	border: 1px solid #d0d5dd;
	display: flex;
	height: fit-content;
	flex-direction: column;
`;

export const VoteButton = styled(Button)`
	padding: 12px 10px;
	width: 100%;
`;

export const VoteCount = styled.span<{ $voteType: VoteType }>`
	${({ $voteType }) =>
		$voteType
			? `color: ${$voteType === "upvote" ? "#12B76A" : "#B42318"};`
			: ""}
	border-bottom: 1px solid #d0d5dd;
	border-top: 1px solid #d0d5dd;
	cursor: pointer;
	font-weight: 600;
	padding: 16px 10px;
	text-align: center;
	user-select: none;
	width: 100%;
`;

export const DownArrow = styled(Arrow)`
	transform: rotate(180deg);
`;

export const EditArea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
`;

export const StyledComment = styled.div`
	color: #667085;
	font-weight: 400;
`;
