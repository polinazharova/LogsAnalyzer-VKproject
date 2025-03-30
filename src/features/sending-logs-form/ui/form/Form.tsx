import "./Form.styles.scss";
import { useRef, useState } from "react";
import Button from "../../../../components/button/Button";
import useSendingLogsFormHandlers from "../../hooks/useSendingLogsFormHandlers";
import FileInput from "../../../../components/input/file-input/FileInput";
import AttachedFiles from "../attached-files/AttachedFiles";

const Form: React.FC = () => {
  const [filesAttached, setFilesAttached] = useState<number | string>(0);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    handleFileChange,
    handleFormSubmit,
    handleClickClearingAttachedFiles,
  } = useSendingLogsFormHandlers(setFilesAttached, formRef);
  const formClass = "main__sending-logs-form";

  return (
    <form
      className={formClass}
      action=""
      onSubmit={handleFormSubmit}
      ref={formRef}
    >
      <FileInput
        formClass={formClass}
        inputId="log-file-input"
        handleFileChange={handleFileChange}
      />
      <AttachedFiles
        formClass={formClass}
        filesAttached={filesAttached}
        handleClickClearingAttachedFiles={handleClickClearingAttachedFiles}
      />
      <Button
        className="main__sending-logs-form-button"
        type="submit"
        disabled={true}
      >
        Analyze
      </Button>
    </form>
  );
};

export default Form;
