import styled from "styled-components";
import { Button } from "../button";

export const Container = styled.div`
	background-color: #fff;
	border-radius: 8px;
`;

export const Header = styled.div`
	align-items: center;
	border-bottom: 1px solid #eaecf0;
	display: flex;
	gap: 16px;
	padding: 16px 20px 16px 16px;
`;

export const InformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const NameContainer = styled.div`
	display: flex;
	gap: 4px;
`;

export const Name = styled.h3`
	font-size: 1.15rem;
	font-weight: 500;
`;

export const Username = styled.div`
	color: #667085;
	font-size: 1.15rem;
	font-weight: 400;
`;

export const Title = styled.h3`
	color: #667085;
	font-size: 1.15rem;
	font-weight: 400;
`;

export const Section = styled.div`
	padding: 16px;
`;

export const ErrorMessage = styled.div`
	color: #b42318;
	font-weight: 500;
	margin-top: 8px;
`;

export const SendButton = styled(Button)`
	margin-top: 16px;
`;
