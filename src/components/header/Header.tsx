import VKLogo from '../../assets/vk-logo.png'
import './Header.styles.scss'

const Header: React.FC = () => {

    return(
        <header id='header'>
            <div className='header__comp'>
                <div className='header__text-logo-comp' onClick={() => {location.href = '/'}}>
                    <p>Study project for</p>
                    <img className='header__logo' src={VKLogo} alt="VK Logo" />
                    <p>Education</p>
                </div>
                <h1 className='header__title' onClick={() => {location.href = '/'}}>Logs Analyzer</h1>
            </div>
            <div className='divider'></div>
        </header>
    )
}

export default Header;
