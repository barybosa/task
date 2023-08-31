import React from "react";
import { IconProps } from "./types";

const Edit: React.FC<IconProps> = ({ className }) => {
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
				d="M10 16.6667H17.5M13.75 2.91666C14.0815 2.58514 14.5312 2.3989 15 2.3989C15.2321 2.3989 15.462 2.44462 15.6765 2.53346C15.891 2.6223 16.0858 2.75251 16.25 2.91666C16.4142 3.08081 16.5444 3.27569 16.6332 3.49017C16.722 3.70464 16.7678 3.93452 16.7678 4.16666C16.7678 4.39881 16.722 4.62868 16.6332 4.84316C16.5444 5.05763 16.4142 5.25251 16.25 5.41666L5.83333 15.8333L2.5 16.6667L3.33333 13.3333L13.75 2.91666Z"
				stroke="#6941C6"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.67"
			/>
		</svg>
	);
};

export { Edit };
