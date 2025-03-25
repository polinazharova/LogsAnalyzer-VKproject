import './LogsViewer.styles.scss'
import { useContext, useState } from 'react'
import { LogFilesContext } from '../../context/LogFilesContext'
import LogsTypeSelector from '../selector/logs-type-selector/LogsTypeSelector'
import useFileReader from '../../hooks/useFileReader'
import LogFileSelector from '../selector/log-file-selector/LogFileSelector'
import { SelectedFileContext } from '../../context/SelectedLogFileContext'
import NoFilesChosen from '../no-files-chosen/NoFilesChosen'
import LogSwitcher from '../log-switcher/LogSwitcher'
import LogItems from '../log-items/LogItems'

const LogsViewer: React.FC = () => {
    const {logFiles} = useContext(LogFilesContext);
    const {selectedFile} = useContext(SelectedFileContext);

    const [isReading, setIsReading] = useState<number>(0);
    const [logs, setLogs] = useState<{ [key: string]: string[] } | null>(null);
    const [firstShownIndex, setFirstShownIndex] = useState<number>(0);
    const [size, setSize] = useState<number>(0);

    useFileReader({logFiles, setIsReading, setLogs});
    
    switch(isReading) {
        case 0: {
            return(
                <NoFilesChosen />
            )
        } 
        case 1: {
            return(
                <div>Reading in process...</div>
            )
        }
        case 2: {
            if (logs) {
                let filenames : string[];
                selectedFile !== 'Select a file' && selectedFile !== 'ALL' ? (filenames = [selectedFile]) : filenames = Object.keys(logs)

                return(
                    <div className="main__log-viewer">
                        <LogFileSelector filenames={Object.keys(logs)} />
                        <LogsTypeSelector />
                        <LogItems fileNames={filenames} logs={logs} firstShownIndex={firstShownIndex} setFirstShownIndex={setFirstShownIndex} setSize={setSize}/>
                        <LogSwitcher firstShownIndex={firstShownIndex} setFirstShownIndex={setFirstShownIndex} 
                        size={size}/>
                    </div>
                )
            }
            break;
        }
        default: {
            return (
                <div className="main__log-viewer-items">
                    Something went wrong!
                </div>
            )
        }
    }    
}

export default LogsViewer;