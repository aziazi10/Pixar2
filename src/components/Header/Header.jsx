import './Header.css'
import PixerLogo from '../../assets/img/pixer-logo.png'

function Header() {
    return (
        <header className="header">
            <div className='container header__container'>
                <nav className='header__nav'>
                    <a href="/">
                        <img src={PixerLogo} alt="logotip" width={58} height={21} />
                    </a>
                    <ul className='header__item'>
                        <li className='header__list'><a className='header__link' href='/'>Bosh sahifa</a></li>
                        <li className='header__list'><a className='header__link' href='/'>Xizmatlar</a></li>
                        <li className='header__list'><a className='header__link' href='/'>Portfolio</a></li>
                        <li className='header__list'><a className='header__link' href='/'>Jamoa</a></li>
                        <li className='header__list'><a className='header__link' href='/'>Blog</a></li>
                        <li className='header__list'><a className='header__link' href='/'>Kontaktlar</a></li>
                    </ul>
                    <button className='btn'><a className='header__href' href="tel: +998 90 921 37 11">+998 90 921 37 11</a></button>
                </nav>
            </div>
        </header>
    )
}

export default Header