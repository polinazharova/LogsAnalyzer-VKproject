import './LogSwitcher.styles.scss'
import { useContext, useMemo } from 'react';
import { LogsMatchesContext } from '../../context/LogsMathesContext';

interface LogSwitcherProps {
    firstShownIndex : number;
    setFirstShownIndex : React.Dispatch<React.SetStateAction<number>>;
}

const LogSwitcher: React.FC<LogSwitcherProps> = ({firstShownIndex, setFirstShownIndex}) => {

    const {logsMatches} = useContext(LogsMatchesContext);
    
    const fileName = useMemo(() => {
        return Object.keys(logsMatches).length ? Object.keys(logsMatches)[0] : "";
    }, [logsMatches])

    const handlePrevClick  = () => {
        setFirstShownIndex(prev => Math.max(0, prev - 10));
    }

    const handleNextClick  = () => {
        setFirstShownIndex(prev => prev + 10 <= (logsMatches[fileName].length - 1) ? prev + 10 : prev);
    }

    return (
        <div className="main__log-switcher">
            <div className={`main__log-switcher-prev ${firstShownIndex - 10 < 0 ? " main__log-switcher-prev_disabled" : ""}`} onClick={handlePrevClick}>{'<'}</div>
            <div className={`main__log-switcher-next ${firstShownIndex + 10 > (logsMatches[fileName]?.length - 1) ? " main__log-switcher-next_disabled" : ""}`} onClick={handleNextClick}>{'>'}</div>
        </div>
    )
}

export default LogSwitcher;