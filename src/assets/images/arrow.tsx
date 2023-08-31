import React from "react";
import { IconProps } from "./types";

const Arrow: React.FC<IconProps> = ({ className }) => {
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
				d="M10 15.8334L10 4.16669M10 4.16669L4.16671 10M10 4.16669L15.8334 10"
				stroke="#667085"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.67"
			/>
		</svg>
	);
};

export { Arrow };
