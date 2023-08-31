import React, { useState } from "react";
import {
	AvatarContainer,
	DefaultAvatar,
	OnlineIndicator,
	StyledAvatar,
} from "./styled";
import { AvatarProps } from "./types";

const Avatar: React.FC<AvatarProps> = ({ src, isOnline }) => {
	const [imageError, setImageError] = useState(false);

	if (imageError || !src) {
		return (
			<AvatarContainer>
				<DefaultAvatar />
				{isOnline && <OnlineIndicator data-testid="online-indicator" />}
			</AvatarContainer>
		);
	}

	return (
		<AvatarContainer>
			<StyledAvatar
				alt="User avatar"
				onError={() => setImageError(true)}
				src={src}
			/>
			{isOnline && <OnlineIndicator data-testid="online-indicator" />}
		</AvatarContainer>
	);
};

export { Avatar };
