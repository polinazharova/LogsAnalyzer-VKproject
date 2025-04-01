import { renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import useMatches from "../src/features/logs-viewer/hooks/useMatches";

const logs = {
  "demo.log": [
    "2025-02-12T19:36:10+03:00 [ERROR] Test1",
    "2025-02-12T19:36:10+03:00 [INFO] Test2",
    "2025-02-12T19:36:10+03:00 [DEBUG] Test3",
    "2025-02-12T19:36:10+03:00 [ERROR] Test4",
    "2025-02-12T19:36:10+03:00 [ERROR] Test5",
  ],
};

describe("useMatches hook", () => {
  test("correctly filtres ALL logs type", () => {
    const { result } = renderHook(() =>
      useMatches({
        logs,
        fileName: "demo.log",
        selectedLogsType: "ALL",
        setFirstShownIndex: jest.fn(),
      }),
    );
    expect(result.current).toEqual({
      "demo.log": [
        ["2025-02-12T19:36:10+03:00", "Test1"],
        ["2025-02-12T19:36:10+03:00", "Test2"],
        ["2025-02-12T19:36:10+03:00", "Test3"],
        ["2025-02-12T19:36:10+03:00", "Test4"],
        ["2025-02-12T19:36:10+03:00", "Test5"],
      ],
    });
  });

  test("correctly filtres ERROR logs type", () => {
    const { result } = renderHook(() =>
      useMatches({
        logs,
        fileName: "demo.log",
        selectedLogsType: "ERROR",
        setFirstShownIndex: jest.fn(),
      }),
    );
    expect(result.current).toEqual({
      "demo.log": [
        ["2025-02-12T19:36:10+03:00", "Test1"],
        ["2025-02-12T19:36:10+03:00", "Test4"],
        ["2025-02-12T19:36:10+03:00", "Test5"],
      ],
    });
  });

  test("correctly filtres INFO logs type", () => {
    const { result } = renderHook(() =>
      useMatches({
        logs,
        fileName: "demo.log",
        selectedLogsType: "INFO",
        setFirstShownIndex: jest.fn(),
      }),
    );
    expect(result.current).toEqual({
      "demo.log": [["2025-02-12T19:36:10+03:00", "Test2"]],
    });
  });

  test("correctly filtres DEBUG logs type", () => {
    const { result } = renderHook(() =>
      useMatches({
        logs,
        fileName: "demo.log",
        selectedLogsType: "DEBUG",
        setFirstShownIndex: jest.fn(),
      }),
    );
    expect(result.current).toEqual({
      "demo.log": [["2025-02-12T19:36:10+03:00", "Test3"]],
    });
  });

  test("[] when wrong format of data", () => {
    const { result } = renderHook(() =>
      useMatches({
        logs: { "demo.log": ["test"] },
        fileName: "demo.log",
        selectedLogsType: "ALL",
        setFirstShownIndex: jest.fn(),
      }),
    );
    expect(result.current).toEqual({ "demo.log": [] });
  });
  test("[] when logs.fileName === []", () => {
    const { result } = renderHook(() =>
      useMatches({
        logs: { "demo.log": [] },
        fileName: "demo.log",
        selectedLogsType: "ALL",
        setFirstShownIndex: jest.fn(),
      }),
    );
    expect(result.current).toEqual({ "demo.log": [] });
  });
});
