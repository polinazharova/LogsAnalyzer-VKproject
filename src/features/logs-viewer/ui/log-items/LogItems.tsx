import "./LogItems.styles.scss";
import { SelectedLogsTypeContext } from "../../context/SelectedLogsTypeContext";
import { useContext, useEffect, useMemo } from "react";
import LogItem from "../log-item/LogItem";
import { SelectedFileContext } from "../../context/SelectedLogFileContext";
import useMatches from "../../hooks/useMatches";
import { LogsMatchesContext } from "../../context/LogsMathesContext";

interface LogItemsProps {
  logs: { [key: string]: string[] };
  firstShownIndex: number;
  setFirstShownIndex: React.Dispatch<React.SetStateAction<number>>;
}

const LogItems: React.FC<LogItemsProps> = ({
  logs,
  firstShownIndex,
  setFirstShownIndex,
}) => {
  const { selectedLogsType } = useContext(SelectedLogsTypeContext);
  const { selectedFile } = useContext(SelectedFileContext);

  const fileName = useMemo(() => {
    return Object.keys(logs).includes(selectedFile)
      ? selectedFile
      : Object.keys(logs)[0];
  }, [selectedFile]);

  const { logsMatches, setLogsMatches } = useContext(LogsMatchesContext);

  const matchesTmp :  { [key: string]: string[][] } = useMatches({
    logs,
    fileName,
    selectedLogsType,
    setFirstShownIndex,
  });
  useEffect(() => {
    setLogsMatches(matchesTmp);
  }, [matchesTmp]);

  if (logsMatches[fileName]) {
    return (
      <div className="main__log-viewer-items">
        {logsMatches[fileName].length ? (
          logsMatches[fileName]
            .slice(firstShownIndex, firstShownIndex + 10)
            .map((log: string[], index: number) => (
              <LogItem
                key={fileName + index}
                fileName={fileName}
                date={log[0]}
                message={log[1]}
              />
            ))
        ) : logs[fileName].length ? (
          <div key={`${fileName}-wrong`}>Wrong format of logs!</div>
        ) : (
          <div className="main__log-viewer-item" key={`${fileName}-empty`}>
            {fileName} is empty
          </div>
        )}
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default LogItems;
