import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LogItems from "../src/features/logs-viewer/ui/log-items/LogItems";
import { SelectedLogsTypeContext } from "../src/features/logs-viewer/context/SelectedLogsTypeContext";
import { SelectedFileContext } from "../src/features/logs-viewer/context/SelectedLogFileContext";
import { LogsMatchesContext } from "../src/features/logs-viewer/context/LogsMathesContext";

const logs = {
  "demo.log": [
    "01.01.1980 [ERROR] Test1",
    "02.01.1980 [INFO] Test2",
    "03.01.1980 [DEBUG] Test3",
    "04.01.1980 [ERROR] Test4",
    "05.01.1980 [ERROR] Test5",
  ],
};

const matches = {
  "demo.log": [
    ["01.01.1980", "Test1"],
    ["02.01.1980", "Test2"],
    ["03.01.1980", "Test3"],
    ["04.01.1980", "Test4"],
    ["05.01.1980", "Test5"],
  ],
};

describe("LogItems component", () => {
  test("renders correctly", async () => {
    render(
      <SelectedLogsTypeContext.Provider
        value={{ selectedLogsType: "ERROR", setSelectedLogsType: jest.fn() }}
      >
        <SelectedFileContext.Provider
          value={{ selectedFile: "demo.log", setSelectedFile: jest.fn() }}
        >
          <LogsMatchesContext.Provider
            value={{ logsMatches: matches, setLogsMatches: jest.fn() }}
          >
            <LogItems
              logs={logs}
              firstShownIndex={0}
              setFirstShownIndex={jest.fn()}
            />
          </LogsMatchesContext.Provider>
        </SelectedFileContext.Provider>
      </SelectedLogsTypeContext.Provider>,
    );

    const container = document.getElementsByClassName(
      "main__log-viewer-items",
    )[0];
    expect(container).toBeInTheDocument();
    const children = document.getElementsByClassName("main__log-viewer-item");
    expect(children.length).toBe(5);
  });
  test("matches snapshot", () => {
    const { container } = render(
      <SelectedLogsTypeContext.Provider
        value={{ selectedLogsType: "ERROR", setSelectedLogsType: jest.fn() }}
      >
        <SelectedFileContext.Provider
          value={{ selectedFile: "demo.log", setSelectedFile: jest.fn() }}
        >
          <LogsMatchesContext.Provider
            value={{ logsMatches: matches, setLogsMatches: jest.fn() }}
          >
            <LogItems
              logs={logs}
              firstShownIndex={0}
              setFirstShownIndex={jest.fn()}
            />
          </LogsMatchesContext.Provider>
        </SelectedFileContext.Provider>
      </SelectedLogsTypeContext.Provider>,
    );
    expect(container).not.toBeEmptyDOMElement();
    expect(container.firstChild).toMatchSnapshot();
  });
  test("does not show log items when logs len === 0", () => {
    render(
      <SelectedLogsTypeContext.Provider
        value={{ selectedLogsType: "ERROR", setSelectedLogsType: jest.fn() }}
      >
        <SelectedFileContext.Provider
          value={{ selectedFile: "demo.log", setSelectedFile: jest.fn() }}
        >
          <LogsMatchesContext.Provider
            value={{
              logsMatches: { "demo.txt": [] },
              setLogsMatches: jest.fn(),
            }}
          >
            <LogItems
              logs={{ "demo.txt": [] }}
              firstShownIndex={0}
              setFirstShownIndex={jest.fn()}
            />
          </LogsMatchesContext.Provider>
        </SelectedFileContext.Provider>
      </SelectedLogsTypeContext.Provider>,
    );

    expect(screen.getByText("demo.txt is empty")).toBeInTheDocument();
  });

  test("does not show log items when matches len === 0", () => {
    render(
      <SelectedLogsTypeContext.Provider
        value={{ selectedLogsType: "ERROR", setSelectedLogsType: jest.fn() }}
      >
        <SelectedFileContext.Provider
          value={{ selectedFile: "demo.log", setSelectedFile: jest.fn() }}
        >
          <LogsMatchesContext.Provider
            value={{
              logsMatches: { "demo.txt": [] },
              setLogsMatches: jest.fn(),
            }}
          >
            <LogItems
              logs={{ "demo.txt": ["01.01.1980 [INFO] Test"] }}
              firstShownIndex={0}
              setFirstShownIndex={jest.fn()}
            />
          </LogsMatchesContext.Provider>
        </SelectedFileContext.Provider>
      </SelectedLogsTypeContext.Provider>,
    );

    expect(
      screen.getByText(
        `Wrong format of logs or logs with selected type don't exist!`,
      ),
    ).toBeInTheDocument();
  });
});
