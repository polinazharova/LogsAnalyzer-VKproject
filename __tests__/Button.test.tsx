import React from "react";
import Button from "../src/components/button/Button";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button component", () => {
  test("renders children correctly", () => {
    render(<Button type="submit">Upload</Button>);
    expect(screen.getByText("Upload")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(
      <Button type="submit" className="test" disabled={true}>
        Upload
      </Button>,
    );
    expect(container).not.toBeEmptyDOMElement();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("applies correct className", () => {
    render(
      <Button type="submit" className="btn">
        Class
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn");
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Button type="submit" handleClick={handleClick}>
        Click
      </Button>,
    );
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
