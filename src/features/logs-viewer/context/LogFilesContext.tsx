import React, { createContext, useState } from "react";

interface LogFilesContextType {
  logFiles: File[] | null;
  setLogFiles: React.Dispatch<React.SetStateAction<File[] | null>>;
}
const LogFilesContext = createContext<LogFilesContextType>({
  logFiles: null,
  setLogFiles: (): void => {},
});

interface LogFilesProviderProps {
  children: React.ReactNode;
}
const LogFilesProvider: React.FC<LogFilesProviderProps> = ({ children }) => {
  const [logFiles, setLogFiles] = useState<File[] | null>(null);

  return (
    <LogFilesContext.Provider value={{ logFiles, setLogFiles }}>
      {children}
    </LogFilesContext.Provider>
  );
};

export { LogFilesContext, LogFilesProvider };
