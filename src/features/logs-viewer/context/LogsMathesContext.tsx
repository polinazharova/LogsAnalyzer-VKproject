import React, { createContext, useState } from "react";

interface LogsMatchesContextType {
  logsMatches: { [key: string]: string[] };
  setLogsMatches: React.Dispatch<
    React.SetStateAction<{ [key: string]: string[] }>
  >;
}
const LogsMatchesContext = createContext<LogsMatchesContextType>({
  logsMatches: {},
  setLogsMatches: (): void => {},
});

interface LogsMatchesProviderProps {
  children: React.ReactNode;
}
const LogsMatchesProvider: React.FC<LogsMatchesProviderProps> = ({
  children,
}) => {
  const [logsMatches, setLogsMatches] = useState<{ [key: string]: string[] }>(
    {},
  );

  return (
    <LogsMatchesContext.Provider value={{ logsMatches, setLogsMatches }}>
      {children}
    </LogsMatchesContext.Provider>
  );
};

export { LogsMatchesContext, LogsMatchesProvider };
