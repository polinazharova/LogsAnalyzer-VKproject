import {ChangeEventHandler} from "react";

interface FileInputProps {
    formClass: string;
    inputId: string;
    handleFileChange : ChangeEventHandler<HTMLInputElement>;
};

const FileInput: React.FC<FileInputProps> = ({formClass, inputId, handleFileChange}) => {
    return (
        <div className={`${formClass}-file-input-comp`}>
            <label className={`${formClass}-file-input-label`} htmlFor={inputId}>Choose a .log file</label>
            <input className={`${formClass}-file-input`} id={inputId} name={inputId} type="file" multiple accept='.log' onChange={handleFileChange}></input>
        </div>
    )
}

export default FileInput;
