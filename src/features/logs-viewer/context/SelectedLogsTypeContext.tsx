import React, { createContext, useState } from "react";

interface SelectedLogsTypeContextType {
  selectedLogsType: string;
  setSelectedLogsType: React.Dispatch<React.SetStateAction<string>>;
}
const SelectedLogsTypeContext = createContext<SelectedLogsTypeContextType>({
  selectedLogsType: "Select a log type value",
  setSelectedLogsType: (): void => {},
});

interface SelectedLogsTypeProviderProps {
  children: React.ReactNode;
}
const SelectedLogsTypeProvider: React.FC<SelectedLogsTypeProviderProps> = ({
  children,
}) => {
  const [selectedLogsType, setSelectedLogsType] =
    useState<string>("Select a logs type");

  return (
    <SelectedLogsTypeContext.Provider
      value={{ selectedLogsType, setSelectedLogsType }}
    >
      {children}
    </SelectedLogsTypeContext.Provider>
  );
};

export { SelectedLogsTypeContext, SelectedLogsTypeProvider };
