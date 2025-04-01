import React from "react";
import LogItem from "../src/features/logs-viewer/ui/log-item/LogItem";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const props: { [key: string]: string } = {
  fileName: "test.log",
  date: "13.02.2003",
  message: "test",
};

describe("LogItem component", () => {
  test("renders component correctly", () => {
    render(
      <LogItem
        fileName={props.fileName}
        date={props.date}
        message={props.message}
      />,
    );
    const logItem = document.getElementsByClassName("main__log-viewer-item")[0];
    expect(logItem).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(
      <LogItem
        fileName={props.fileName}
        date={props.date}
        message={props.message}
      />,
    );
    expect(container).not.toBeEmptyDOMElement();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("applies correct data", () => {
    const date = "2025-02-12T19:36:10+03:00";
    render(
      <LogItem fileName={props.fileName} date={date} message={props.message} />,
    );
    expect(screen.getByText(props.fileName)).toBeInTheDocument();
    expect(screen.getByText("12.02.2025, 19:36:10")).toBeInTheDocument();
    expect(screen.getByText(props.message)).toBeInTheDocument();
  });

  test("renders more than 1 component correctly", () => {
    render(
      <LogItem
        fileName={props.fileName}
        date={props.date}
        message={props.message}
      />,
    );
    render(
      <LogItem
        fileName={props.fileName}
        date={props.date}
        message={props.message}
      />,
    );
    render(
      <LogItem
        fileName={props.fileName}
        date={props.date}
        message={props.message}
      />,
    );
    const logItems = document.getElementsByClassName("main__log-viewer-item");
    expect(logItems).toHaveLength(3);
  });
});
