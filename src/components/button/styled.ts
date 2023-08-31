import styled from "styled-components";

export const StyledButton = styled.button<{
	danger?: boolean;
	appearance: "ghost" | "default";
}>`
	align-items: center;
	border-radius: 8px;
	border: none;
	color: ${({ danger }) => (danger ? "#B42318" : "#6941C6")};
	cursor: pointer;
	display: flex;
	font-size: 1rem;
	font-weight: 600;
	padding: 8px 14px;
	text-align: center;
	transition: all 0.2s ease-in-out;
	width: fit-content;

	${({ appearance, danger }) =>
		appearance === "ghost"
			? `
      background-color: transparent;
      &:hover {
        background-color: #eee;
      }
    `
			: `
      background-color: ${danger ? "#B42318" : "#6941C6"};
      color: #fff;
    `}
`;

export const StyledButtonIcon = styled.span<{ $hasMargin: boolean }>`
	margin-right: ${({ $hasMargin }) => ($hasMargin ? "8px" : "0")};
`;
