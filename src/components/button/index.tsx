import React from "react";
import { StyledButton, StyledButtonIcon } from "./styled";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
	icon: Icon,
	danger,
	appearance = "default",
	children,
	...props
}) => {
	return (
		<StyledButton {...props} appearance={appearance} danger={danger}>
			{Icon && (
				<StyledButtonIcon $hasMargin={!!children}>
					<Icon />
				</StyledButtonIcon>
			)}
			{children}
		</StyledButton>
	);
};

export { Button };
