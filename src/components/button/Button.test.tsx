/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Button } from "./index";
import "@testing-library/jest-dom";

test("renders Button component", () => {
	render(<Button>Click Me</Button>);
	expect(screen.getByText("Click Me")).toBeInTheDocument();
});

test("Button turns red when danger prop is true", () => {
	const { rerender } = render(<Button appearance="ghost">Click Me</Button>);

	expect(screen.getByText("Click Me")).not.toHaveStyle("color: #B42318");

	rerender(
		<Button appearance="ghost" danger>
			Click Me
		</Button>
	);
	expect(screen.getByText("Click Me")).toHaveStyle("color: #B42318");
});

test("calls onClick prop when clicked", () => {
	const handleClick = jest.fn();
	const { getByText } = render(
		<Button onClick={handleClick}>Click me!</Button>
	);
	fireEvent.click(getByText("Click me!"));

	expect(handleClick).toHaveBeenCalledTimes(1);
});
