import { ChangeEventHandler } from "react";

interface FileInputProps {
  children: React.ReactNode;
  formClass: string;
  inputId: string;
  handleFileChange: ChangeEventHandler<HTMLInputElement>;
}

const FileInput: React.FC<FileInputProps> = ({
  children,
  formClass,
  inputId,
  handleFileChange,
}) => {
  return (
    <div className={`${formClass}-file-input-comp`}>
      <label className={`${formClass}-file-input-label`} htmlFor={inputId}>
        {children}
      </label>
      <input
        className={`${formClass}-file-input`}
        id={inputId}
        name={inputId}
        type="file"
        multiple
        accept=".log"
        onChange={handleFileChange}
      ></input>
    </div>
  );
};

export default FileInput;
