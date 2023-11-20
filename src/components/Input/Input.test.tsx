import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // for additional matchers
import Input from "./Input";

describe("Input component", () => {
  test("renders input with label and handles user input", () => {
    const { getByLabelText } = render(<Input id="test" label="Test" />);
    const inputElement = getByLabelText("Test") as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "test input" } });
    expect(inputElement.value).toBe("test input");
  });

  test("renders file input with label and handles file selection", () => {
    const { getByLabelText } = render(
      <Input id="fileInput" type="file" label="File Input" />
    );
    const fileInput = getByLabelText("File Input") as HTMLInputElement;

    expect(fileInput).toBeInTheDocument();

    const file = new File(["file content"], "test.txt", { type: "text/plain" });
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Check if files is not null before accessing it
    expect(fileInput.files).not.toBeNull();
    expect(fileInput.files).toHaveLength(1);
    expect(fileInput.files![0]).toStrictEqual(file);
  });

  test("renders input with error message and handles aria attributes", () => {
    const { getByLabelText, getByText } = render(
      <Input
        id="errorInput"
        label="Error Input"
        error
        message="Invalid input"
      />
    );

    const inputElement = getByLabelText("Error Input");
    const errorMessage = getByText("Invalid input");

    expect(inputElement).toHaveAttribute("aria-invalid", "true");
    expect(inputElement).toHaveAttribute(
      "aria-describedby",
      "errorInput-error"
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("renders disabled input with disabled label and handles aria attributes", () => {
    const { getByLabelText, getByText } = render(
      <Input id="disabledInput" label="Disabled Input" disabled />
    );

    const inputElement = getByLabelText("Disabled Input");
    const labelText = getByText("Disabled Input");

    expect(inputElement).toBeDisabled();
    expect(inputElement).toHaveAttribute("aria-disabled", "true");
    expect(labelText).toHaveStyle("color: #e4e3ea");
  });

  // Add more test cases for different scenarios as needed
});
