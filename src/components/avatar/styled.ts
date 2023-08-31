import styled from "styled-components";
import { DefaultAvatar as DefaultAvatarIcon } from "../../assets/images/default-avatar";

export const AvatarContainer = styled.div`
	position: relative;
`;

export const StyledAvatar = styled.img`
	border-radius: 50%;
	height: 32px;
	object-fit: cover;
	width: 32px;
`;

export const DefaultAvatar = styled(DefaultAvatarIcon)`
	border-radius: 50%;
	height: 32px;
	width: 32px;
`;

export const OnlineIndicator = styled.div`
	background-color: #12b76a;
	border: 2px solid #fff;
	border-radius: 50%;
	bottom: 0;
	height: 10px;
	position: absolute;
	right: 0;
	width: 10px;
`;
