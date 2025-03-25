import { useContext, useEffect, useState } from 'react';
import './LogFileSelector.styles.scss'
import useLogFileSelectorHandlers from '../../../hooks/useLogFileSelectorHandlers';
import { SelectedFileContext } from '../../../context/SelectedLogFileContext';
import { LogFilesContext } from '../../../context/LogFilesContext';

interface LogFileSelectorProps {
    filenames: string[]
}

const LogFileSelector: React.FC<LogFileSelectorProps> = ({filenames}) => {
    const {selectedFile, setSelectedFile} = useContext(SelectedFileContext);
    const {logFiles} = useContext(LogFilesContext);

    const [isSelectorLogFilesHidden, setIsSelectorLogFilesHidden] = useState<boolean>(true);

    useEffect(() => {
        setSelectedFile('Select a file');
    }, [logFiles]);

    useLogFileSelectorHandlers(setIsSelectorLogFilesHidden, setSelectedFile);

    return(
        <div className="main__log-file-selector">
            <div className="main__log-file-selector-label">{selectedFile}</div>
            <div className={`main__log-file-selector-items${isSelectorLogFilesHidden ? " hidden" : ""}`}>
                {filenames.length > 1 ? (<div className="main__log-file-selector-item main__log-file-selector-item_selected">
                    ALL 
                </div>) : <></>}
                {
                    filenames.map((fileName, index) => (
                        <div key={`${index + fileName}`} 
                            className={`main__log-file-selector-item ${filenames.length === 1 && !index ? " main__log-file-selector-item_selected" : "" }`}>
                            {fileName}
                        </div>
                ))
                }
            </div>
        </div>
    )
}

export default LogFileSelector;
