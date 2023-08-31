/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import React from "react";
import { Avatar } from "./index";
import "@testing-library/jest-dom";

describe("<Avatar />", () => {
	it("renders without crashing", () => {
		const { getByRole } = render(
			<Avatar isOnline src="./profile-pictures/u1.jpg" />
		);
		const avatarElement = getByRole("img");
		expect(avatarElement).toBeInTheDocument();
	});

	it("displays the provided image src", () => {
		// we can loop all the profile pictures here but I believe it is not needed
		const testSrc = "./profile-pictures/u1.jpg";
		const { getByRole } = render(<Avatar isOnline src={testSrc} />);
		const avatarElement = getByRole("img");

		expect(avatarElement).toHaveAttribute("src", testSrc);
	});

	it("displays the online indicator when isOnline is true", () => {
		const { queryByTestId } = render(<Avatar isOnline={true} />);
		const onlineIndicator = queryByTestId("online-indicator");

		expect(onlineIndicator).toBeInTheDocument();
		expect(onlineIndicator).toHaveStyle("background-color: #12b76a");
	});

	it("does not display the online indicator when isOnline is false", () => {
		const { queryByTestId } = render(<Avatar isOnline={false} />);
		const onlineIndicator = queryByTestId("online-indicator");

		expect(onlineIndicator).not.toBeInTheDocument();
	});
});
