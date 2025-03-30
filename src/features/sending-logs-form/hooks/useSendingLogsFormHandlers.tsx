import { useContext } from "react";
import { LogFilesContext } from "../../logs-viewer/context/LogFilesContext";

const useSendingLogsFormHandlers = (
  setFilesAttached: React.Dispatch<React.SetStateAction<number | string>>,
  formRef: React.RefObject<HTMLFormElement>,
) => {
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const files = event.target.files;

    if (files && files.length > 0) {
      if (files.length == 1) {
        setFilesAttached(files[0].name);
      } else {
        setFilesAttached(files.length);
      }

      const button: HTMLButtonElement | null = document.querySelector(
        ".main__sending-logs-form-button",
      );
      if (button) {
        button.disabled = false;
      }
    }
  };

  const { setLogFiles } = useContext(LogFilesContext);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const files: File[] = formData.getAll("log-file-input") as File[];

    setLogFiles(files);

    handleClickClearingAttachedFiles();
  };

  const handleClickClearingAttachedFiles = (): void => {
    setFilesAttached(0);

    formRef.current?.reset();

    const button: HTMLButtonElement | null = document.querySelector(
      ".main__sending-logs-form-button",
    );
    if (button) {
      button.disabled = true;
    }
  };

  return {
    handleFileChange,
    handleFormSubmit,
    handleClickClearingAttachedFiles,
  };
};

export default useSendingLogsFormHandlers;
