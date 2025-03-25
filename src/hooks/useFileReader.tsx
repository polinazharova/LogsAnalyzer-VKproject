import { useEffect } from "react";

type UseFileReaderParams = {
    logFiles : File[] | null;
    setIsReading : React.Dispatch<React.SetStateAction<number>>;
    setLogs : React.Dispatch<React.SetStateAction<{ [key: string]: string[] } | null>>;
};

const useFileReader = ({logFiles, setIsReading, setLogs}: UseFileReaderParams) : void => {
    useEffect(() : void => {
        if (logFiles) {
            setIsReading(1);
            const logsBodyTmp : { [key: string]: string[] } = {};
            
            const readFile = (file: File): Promise<{ name: string; lines: string[] }> => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
    
                    reader.onload = () => {
                        if (reader.result) {
                            const lines = (reader.result as string).split(/\r?\n/);
                            const linesFiltered = lines.filter((line) => line.trim() !== '');
    
                            resolve({ name: file.name, lines: linesFiltered });
                        }
                    };
    
                    reader.onerror = () => {
                        reject(new Error(`Error reading file: ${file.name}`));
                    };
    
                    reader.readAsText(file);
                });
            };
    
            Promise.all(logFiles.map((file) => readFile(file)))
                .then((results) => {
                    results.forEach((result) => {
                        logsBodyTmp[result.name] = result.lines;
                    });
                    setLogs(logsBodyTmp);
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setIsReading(2);
                });
        }
    }, [logFiles])
}

export default useFileReader;