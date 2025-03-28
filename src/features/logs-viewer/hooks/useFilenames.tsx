import { useMemo} from "react";

type UseFileReaderParams = {
    logs : {[key : string] : string[]} | null
};

const useFilenames = ({logs} : UseFileReaderParams) : string[]  => {
    return useMemo(() => {
        return logs ? Object.keys(logs) : [];
    }, [logs]);
}

export default useFilenames;