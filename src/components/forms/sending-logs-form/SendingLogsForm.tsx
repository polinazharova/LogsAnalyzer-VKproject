import { useContext, useState } from 'react'
import './SendingLogsForm.styles.scss'
import clearAttachedFiles from '../../../assets/clear-attached-files.png'
import Button from '../../button/Button'
import { LogFilesContext } from '../../../context/LogFilesContext'


const SendingLogsForm: React.FC = () => {
    const [filesAttached, setFilesAttached] = useState<any>(0);
    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        const files = event.target.files;

        if (files && files.length > 0) {
            if (files.length == 1) {
                setFilesAttached(files[0].name);
            }
            else {
                setFilesAttached(files.length);
            }

            const button: HTMLButtonElement | null = document.querySelector(".main__sending-logs-form-button");
            if (button) {
                button.disabled = false;
            }
        }
    } 

    const {setLogFiles} = useContext(LogFilesContext);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) : void => {
        event.preventDefault();
        handleClickClearingAttachedFiles();

        const formData = new FormData(event.currentTarget);
        const files : File[] = formData.getAll('log-file-input') as File[]
  
        setLogFiles(files);
    }

    const handleClickClearingAttachedFiles = () : void => {
        setFilesAttached(0);
        
        const button: HTMLButtonElement | null = document.querySelector(".main__sending-logs-form-button");
        if (button) {
            button.disabled = true;
        }
    }

    return(
        <form className="main__sending-logs-form" action="" onSubmit={handleFormSubmit}>
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
