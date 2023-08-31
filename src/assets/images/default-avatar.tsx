import React from "react";
import { IconProps } from "./types";

const DefaultAvatar: React.FC<IconProps> = ({ className }) => {
	return (
		<svg
			className={className ? className : ""}
			fill="none"
			height="32"
			viewBox="0 0 32 32"
			width="32"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect fill="#F9F5FF" height="32" rx="16" width="32" />
			<path
				d="M22.6667 23.5V21.8333C22.6667 20.9493 22.3155 20.1014 21.6904 19.4763C21.0653 18.8512 20.2174 18.5 19.3334 18.5H12.6667C11.7827 18.5 10.9348 18.8512 10.3097 19.4763C9.68456 20.1014 9.33337 20.9493 9.33337 21.8333V23.5M19.3334 11.8333C19.3334 13.6743 17.841 15.1667 16 15.1667C14.1591 15.1667 12.6667 13.6743 12.6667 11.8333C12.6667 9.99238 14.1591 8.5 16 8.5C17.841 8.5 19.3334 9.99238 19.3334 11.8333Z"
				stroke="#7F56D9"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.66667"
			/>
		</svg>
	);
};

export { DefaultAvatar };
