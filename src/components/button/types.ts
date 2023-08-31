type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	appearance?: "ghost" | "default";
	icon?: React.ComponentType;
	danger?: boolean;
};

export { ButtonProps };
