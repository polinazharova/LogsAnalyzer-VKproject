import { MouseEventHandler } from 'react'
import clearAttachedFiles from '../../../../assets/clear-attached-files.png'

interface AttachedFilesProps {
    formClass : string;
    filesAttached : number | string;
    handleClickClearingAttachedFiles : MouseEventHandler<HTMLImageElement>;
}

const AttachedFiles: React.FC<AttachedFilesProps> = ({formClass, filesAttached, handleClickClearingAttachedFiles}) => {
    return filesAttached ? (
        <div className={`${formClass}-attached-files-comp`}>
        {(typeof filesAttached === 'string' ? <span>{filesAttached}</span> : <span>{filesAttached} files attached</span>)} 
        <img className={`${formClass}-attached-files-clearing-cross`} src={clearAttachedFiles} alt="clear attached files" onClick={handleClickClearingAttachedFiles}/>
        </div>
    ) : null;
}

export default AttachedFiles;
