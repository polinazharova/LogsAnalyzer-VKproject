import './LogItems.styles.scss'
import { SelectedLogsTypeContext } from '../../context/SelectedLogsTypeContext'
import { useContext, useEffect, useMemo } from 'react';
import LogItem from '../log-item/LogItem';
import { SelectedFileContext } from '../../context/SelectedLogFileContext';

const regExp : RegExp = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+\d{2}:\d{2})\s+\[(\w+)\]\s+(.+?)(\r)?$/;

interface LogItemsProps {
    fileNames: string[];
    logs: {[key: string] : string[]};
    firstShownIndex: number;
    setFirstShownIndex: React.Dispatch<React.SetStateAction<number>>;
    setSize: React.Dispatch<React.SetStateAction<number>>;
};

const LogItems: React.FC<LogItemsProps> = ({fileNames, logs, firstShownIndex, setFirstShownIndex, setSize}) => {
    const {selectedLogsType} = useContext(SelectedLogsTypeContext);
    const {selectedFile} = useContext(SelectedFileContext);

    const { matches, sizeTmp } = useMemo(() => {
        const matches: { [key: string]: string[][] } = {};
        let sizeTmp : number = 0;
      
        fileNames.forEach((fileName) => {
          matches[fileName] = [];
          logs[fileName].forEach((logBody) => {
            const match = logBody.match(regExp);
            if (match) {
              if (
                selectedLogsType !== 'Select a logs type' &&
                selectedLogsType !== 'ALL' &&
                match[2] !== selectedLogsType
              ) {
                return;
              }
              matches[fileName].push([match[1], match[3]]);
              sizeTmp++;
            }
          });
        });
      
        return { matches, sizeTmp };
      }, [logs, selectedLogsType, selectedFile]);

    useEffect(() => {
        setSize(sizeTmp);
        setFirstShownIndex(0);
    }, [logs, selectedLogsType, selectedFile])

    return (
        <div className="main__log-viewer-items">
            {
                fileNames.map((fileName) => (
                    (logs[fileName].length ?
                    (!matches[fileName].length ? <div>Wrong format of logs!</div> : 
                        (matches[fileName].slice(firstShownIndex, firstShownIndex + 10).map((log, index) => (
                        <LogItem key={fileName + index} fileName={fileName} date={log[0]} message={log[1]}/>
                    )))) : <div className="main__log-viewer-item" key={fileName}>{fileName} is empty</div>)
   
                ))
            }
        </div>
    )
}

export default LogItems;
