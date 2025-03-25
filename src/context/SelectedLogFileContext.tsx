import React, { createContext, useState } from 'react';


interface SelectedFileContextType {
    selectedFile: string;
    setSelectedFile: React.Dispatch<React.SetStateAction<string>>;
}

const SelectedFileContext = createContext<SelectedFileContextType>({
    selectedFile: "Select a file",
    setSelectedFile: () : void => {},
});


interface SelectedFileProviderProps {
    children: React.ReactNode;
}

const SelectedFileProvider : React.FC<SelectedFileProviderProps> = ({children}) => {

    const [selectedFile, setSelectedFile] = useState<string>("Select a file");

    return (
        <SelectedFileContext.Provider value={{selectedFile, setSelectedFile}}>{children}</SelectedFileContext.Provider>
    )
}

export {SelectedFileContext, SelectedFileProvider};