import { useContext, useEffect, useState } from 'react';
import './LogFileSelector.styles.scss'
import useLogFileSelectorHandlers from '../../../features/logs-viewer/hooks/useLogFileSelectorHandlers';
import { SelectedFileContext } from '../../../features/logs-viewer/context/SelectedLogFileContext';
import { LogFilesContext } from '../../../features/logs-viewer/context/LogFilesContext';

interface LogFileSelectorProps {
    filenames: string[];
};

const LogFileSelector: React.FC<LogFileSelectorProps> = ({filenames}) => {
    const {selectedFile, setSelectedFile} = useContext(SelectedFileContext);
    const [isSelectorLogFilesHidden, setIsSelectorLogFilesHidden] = useState<boolean>(true);
    const {logFiles} = useContext(LogFilesContext);

    useEffect(() => {
        setSelectedFile(filenames[0]);
    }, [logFiles]);

    useLogFileSelectorHandlers({setIsSelectorLogFilesHidden, setSelectedFile});

    return(
        <div className="main__log-file-selector">
            <div className="main__log-file-selector-label">{selectedFile}</div>
            <div className={`main__log-file-selector-items${isSelectorLogFilesHidden ? " hidden" : ""}`}>
                {
                    filenames.map((fileName, index) => (
                        <div key={`${index + fileName}`} 
                            className={`main__log-file-selector-item ${!index ? " main__log-file-selector-item_selected" : "" }`}>
                            {fileName}
                        </div>
                ))
                }
            </div>
        </div>
    )
}

export default LogFileSelector;
