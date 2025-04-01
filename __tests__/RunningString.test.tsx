import React from "react";
import RunningString from "../src/components/running-string/RunningString";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Running string component", () => {
  test("renders children correctly", () => {
    render(<RunningString>RS</RunningString>);
    const rs = screen.getAllByText("RS");
    rs.forEach((elem) => {
      expect(elem).toBeInTheDocument();
    });
  });

  test("matches snapshot", () => {
    const { container } = render(<RunningString>RS</RunningString>);
    expect(container).not.toBeEmptyDOMElement();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("applies correct className", () => {
    render(<RunningString>RS</RunningString>);
    const rs = screen.getAllByText("RS");
    rs.forEach((elem) => {
      expect(elem).toHaveClass("main__running-string-text");
    });
  });
});
