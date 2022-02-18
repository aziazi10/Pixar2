import "./Footer.css"

import Telegram from "../../assets/img/telegram.png"
import Facebook from "../../assets/img/facebook.png"
import Instagram from "../../assets/img/instagram.png"

function Footer() {
    return (
        <footer>
            <div className="container footer__container">
                <div className="footer__content">
                    <h3 className="footer__title">Copyright 2020</h3>
                    <p className="footer__text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                        Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem
                        pulvinar tincidunt.
                    </p>
                </div>
                <ul className="footer__item">
                    <li className="footer__title"><a className="footer__title" href="/">Sayt sahifalari</a></li>
                    <li className="footer__list"><a className="footer__link" href="/">Bosh sahifa</a></li>
                    <li className="footer__list"><a className="footer__link" href="/">Xizmatlar</a></li>
                    <li className="footer__list"><a className="footer__link" href="/">Portfolio</a></li>
                    <li className="footer__list"><a className="footer__link" href="/">Jamoa</a></li>
                    <li className="footer__list"><a className="footer__link" href="/">Blog</a></li>
                    <li className="footer__list"><a className="footer__link" href="/">Kontaktlar</a></li>
                </ul>
                <div className="footer__contacts">
                    <h3 className="footer__title">Biz internetda</h3>
                    <div className="footer__address">
                        <image src={Telegram} width="22" height="23" />
                        <p className="footer__link">Telegram</p>
                    </div>
                    <div className="footer__address">
                        <image src={Facebook} width="22" height="23" />
                        <p className="footer__link">Facebook</p>
                    </div>
                    <div className="footer__address">
                        <image src={Instagram} width="22" height="23" />
                        <p className="footer__link">Instagram</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer