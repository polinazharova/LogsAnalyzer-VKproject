import { useEffect, useMemo } from "react";
import { logsRegExp as regExp } from "../const/logsRegExp";

type UseMatchesParams = {
  logs: { [key: string]: string[] };
  fileName: string;
  selectedLogsType: string;
  setFirstShownIndex: React.Dispatch<React.SetStateAction<number>>;
};

const useMatches = ({
  logs,
  fileName,
  selectedLogsType,
  setFirstShownIndex,
}: UseMatchesParams) => {
  useEffect(() => {
    setFirstShownIndex(0);
  }, [fileName, selectedLogsType]);

  const matches: { [key: string]: string[][] } = useMemo(() => {
    const matches: { [key: string]: string[][] } = {};

    matches[fileName] = [];

    logs[fileName].forEach((logBody: string) => {
      const match = logBody.match(regExp);

      if (match) {
        if (
          match[2] !== selectedLogsType &&
          selectedLogsType !== "ALL" &&
          selectedLogsType !== "Select a logs type"
        ) {
          return;
        }
        matches[fileName].push([match[1], match[3]]);
      }
    });

    return matches;
  }, [selectedLogsType, fileName]);

  return matches;
};

export default useMatches;
