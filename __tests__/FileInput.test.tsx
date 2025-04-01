import React from "react";
import FileInput from "../src/components/input/file-input/FileInput";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("File input component", () => {
  test("renders children correctly", () => {
    render(
      <FileInput formClass="test" inputId="test" handleFileChange={() => {}}>
        Input
      </FileInput>,
    );
    expect(screen.getByText("Input")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(
      <FileInput formClass="test" inputId="test" handleFileChange={() => {}}>
        Input
      </FileInput>,
    );
    expect(container).not.toBeEmptyDOMElement();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("applies correct className, inputId", () => {
    render(
      <FileInput formClass="test" inputId="test" handleFileChange={() => {}}>
        Input
      </FileInput>,
    );
    const fInput = screen.getByLabelText("Input");

    expect(fInput).toHaveClass("test-file-input");
    expect(fInput.id).toBe("test");
  });

  test("uploads a .log file", async () => {
    const user = userEvent.setup();
    const file = new File(
      [
        "2023-01-01 [ERROR] Something went wrong\n2023-01-02 [INFO] Process started",
      ],
      "demo.log",
      { type: "text/plain" },
    );

    render(
      <FileInput formClass="test" inputId="test" handleFileChange={() => {}}>
        Input
      </FileInput>,
    );
    const fInput = screen.getByLabelText("Input") as HTMLInputElement;

    await user.upload(fInput, file);

    expect(fInput.files).toHaveLength(1);
    expect(fInput.files?.[0]).toBe(file);
  });

  test("calls onChange handler when a file chosed", async () => {
    const handleFileChange = jest.fn();
    const user = userEvent.setup();
    const file = new File(
      [
        "2023-01-01 [ERROR] Something went wrong\n2023-01-02 [INFO] Process started",
      ],
      "demo.log",
      { type: "text/plain" },
    );

    render(
      <FileInput
        formClass="test"
        inputId="test"
        handleFileChange={handleFileChange}
      >
        Input
      </FileInput>,
    );
    const fInput = screen.getByLabelText("Input") as HTMLInputElement;

    await user.upload(fInput, file);

    expect(handleFileChange).toHaveBeenCalledTimes(1);
  });
});
