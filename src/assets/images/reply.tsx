import React from "react";
import { IconProps } from "./types";

const Reply: React.FC<IconProps> = ({ className }) => {
	return (
		<svg
			className={className ? className : ""}
			fill="none"
			height="20"
			viewBox="0 0 20 20"
			width="20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.49998 11.6666L3.33331 7.49998M3.33331 7.49998L7.49998 3.33331M3.33331 7.49998H13.3333C14.2174 7.49998 15.0652 7.85117 15.6903 8.47629C16.3155 9.10141 16.6666 9.94926 16.6666 10.8333V16.6666"
				stroke="#6941C6"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.67"
			/>
		</svg>
	);
};

export { Reply };
