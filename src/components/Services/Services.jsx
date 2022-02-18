import "./Services.css"

import Bot from '../../assets/img/bot-tg.png'
import Crm from "../../assets/img/crm.png"
import Design from "../../assets/img/design.png"
import Smm from "../../assets/img/smm.png"
import Xat from "../../assets/img/xat.png"

function Services() {
    return (
        <section className="services container">
            <h2 className="services__title">Xizmatlar</h2>
            <p className="services__text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam
                arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque
                in. Vivamus mattis eros at sem pulvinar
            </p>

            <div className="services__content">
                <div className="services__card">
                    <img src={Xat} alt="xat" width="203" height="130" />
                    <h3 className="services__p">Vebsayt tuzish</h3>
                    <p className="services__t">lorem ipsum</p>
                </div>
                <div className="services__card">
                    <img src={Bot} alt="bot"  alt=""width="203" height="130" />
                    <h3 className="services__p">Telegram bot</h3>
                    <p className="services__t">lorem ipsum</p>
                </div>
                <div className="services__card">
                    <img src={Smm} alt="smm" width="203" height="130" />
                    <h3 className="services__p">SMM</h3>
                    <p className="services__t">lorem ipsum</p>
                </div>
                <div className="services__card">
                    <img src={Design} alt="desgign" width="203" height="130" />
                    <h3 className="services__p">Grafik dizayn</h3>
                    <p className="services__t">lorem ipsum</p>
                </div>
                <div className="services__card">
                    <img src={Crm} alt="crm" width="203" height="130" />
                    <h3 className="services__p">CRM tizimlar</h3>
                    <p className="services__t">lorem ipsum</p>
                </div>
            </div>
            <div className="services__item">
                <button className="btn services__btn" type="submit">Buyurtma berish</button>
                <a className="services__link" href="/">Xizmatlar sahifasiga o’tish</a>
            </div>
        </section>
    )
}

export default Services