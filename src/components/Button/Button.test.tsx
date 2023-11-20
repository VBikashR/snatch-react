import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  // Test case for rendering the button with default props
  test("renders the Button component with default props", () => {
    render(<Button />);
    // Add assertions here based on your requirements
  });

  // Test case for rendering the button with custom text
  test("renders the Button component with custom text", () => {
    const { getByText } = render(<Button text="Click me" />);
    const buttonElement = getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  // Test case for rendering the button with different sizes
  test.each(["small", "medium", "large", undefined] as const)(
    "renders the Button component with size %s",
    (size) => {
      const { container } = render(<Button size={size} />);
      const buttonElement = container.firstChild;
      // Add assertions here based on your styling for different sizes
    }
  );

  // Test case for rendering the button with different variants
  test.each([
    "default",
    "destructive",
    "secondary",
    "outline",
    "ghost",
    "link",
    undefined,
  ] as const)("renders the Button component with variant %s", (variant) => {
    const { container } = render(<Button variant={variant} />);
    const buttonElement = container.firstChild;
    // Add assertions here based on your styling for different variants
  });

  // Test case for rendering the button as disabled
  test("renders the Button component as disabled", () => {
    const { container } = render(<Button disabled />);
    const buttonElement = container.firstChild;
    // Add assertions here based on your styling for disabled state
  });

  // Test case for clicking the button and invoking the onClick handler
  test("invokes onClick handler when the button is clicked", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button text="Click me" onClick={mockOnClick} />
    );
    const buttonElement = getByText("Click me");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });

  // Add more test cases based on your specific use cases and requirements
});
