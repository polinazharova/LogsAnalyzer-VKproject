import { useRef, useState } from 'react'
import './SendingLogsForm.styles.scss'
import clearAttachedFiles from '../../../assets/clear-attached-files.png'
import Button from '../../../components/button/Button'
import useSendingLogsFormHandlers from '../model/hooks/useSendingLogsFormHandlers'

const SendingLogsForm: React.FC = () => {
    const [filesAttached, setFilesAttached] = useState<number | string>(0);
    const formRef = useRef<HTMLFormElement>(null);

    const {handleFileChange, handleFormSubmit, handleClickClearingAttachedFiles} = useSendingLogsFormHandlers(setFilesAttached, formRef);


    return(
        <form className="main__sending-logs-form" action="" onSubmit={handleFormSubmit} ref={formRef}>
            <div className="main__sending-logs-form-input-comp">
                <label className="main__sending-logs-form-file-input-label" htmlFor="log-file-input">Choose a .log file</label>
                <input className="main__sending-logs-form-file-input" id="log-file-input" name="log-file-input" type="file" multiple accept='.log' onChange={handleFileChange}></input>
            </div>
            {filesAttached ? 
                <div className="main__sending-logs-form-attached-files-comp">
                    {(typeof filesAttached === 'string' ? <span>{filesAttached}</span> : <span>{filesAttached} files attached</span>)} 
                    <img className="main__sending-logs-form-attached-files-clearing-cross" src={clearAttachedFiles} alt="clear attached files" onClick={handleClickClearingAttachedFiles}/>
                </div>
                : <></>}
            <Button className="main__sending-logs-form-button" type="submit" disabled={true}>Analyze</Button>
        </form>
    )
}

export default SendingLogsForm;
