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
    const matchesTmp: { [key: string]: string[][] } = {};

    matchesTmp[fileName] = [];

    logs[fileName].forEach((logBody: string) => {
      const match = logBody.match(regExp);

      if (match) {
        const [, date, logType, message] = match;
        if (
          logType !== selectedLogsType &&
          selectedLogsType !== "ALL" &&
          selectedLogsType !== "Select a logs type"
        ) {
          return;
        }
        matchesTmp[fileName].push([date, message]);
      }
    });

    return matchesTmp;
  }, [selectedLogsType, fileName]);

  return matches;
};

export default useMatches;
