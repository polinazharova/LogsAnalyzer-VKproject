import RunningStringPattern from '../../assets/running_string_pattern.svg'
import './RunningString.styles.scss'

const RunningString: React.FC = () => {
    return(
        <div className='main__running-string'>
            <div className='main__running-string-content'>
                <img className='main__running-string-pattern' src={RunningStringPattern} alt="Running string background image" />
                <span className='main__running-string-text'>This is not a real project</span>
                <img className='main__running-string-pattern' src={RunningStringPattern} alt="Running string background image" />
            </div>
            <div className='main__running-string-content'>
                <img className='main__running-string-pattern' src={RunningStringPattern} alt="Running string background image" />
                <span className='main__running-string-text'>This is not a real project</span>
                <img className='main__running-string-pattern' src={RunningStringPattern} alt="Running string background image" />
            </div>
        </div>
    )
}

export default RunningString;
