import React, { useEffect } from 'react'
import './LogSwitcher.styles.scss'

interface LogSwitcherProps {
    firstShownIndex: number;
    setFirstShownIndex: React.Dispatch<React.SetStateAction<number>>;
    size: number;
}

const LogSwitcher: React.FC<LogSwitcherProps> = ({firstShownIndex, setFirstShownIndex, size}) => {

    const handlePrevClick  = () => {
        setFirstShownIndex(prev => Math.max(0, prev - 10));
    }

    const handleNextClick  = () => {
        setFirstShownIndex(prev => prev + 10 > size - 1 ? prev : prev + 10);
    }

    return (
        <div className="main__log-switcher">
            <div className={`main__log-switcher-prev ${firstShownIndex <= 0 ? " main__log-switcher-prev_disabled" : ""}`} onClick={handlePrevClick}>{'<'}</div>
            <div className={`main__log-switcher-next ${firstShownIndex + 10 > size - 1 ? " main__log-switcher-next_disabled" : ""}`} onClick={handleNextClick}>{'>'}</div>
        </div>
    )
}

export default LogSwitcher;