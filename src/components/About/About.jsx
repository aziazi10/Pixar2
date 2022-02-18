import "./About.css"

import Talab from '../../assets/img/talab.png'
import Yechim from '../../assets/img/yechim.png'
import Loyiha from '../../assets/img/loyiha.png'
import Sifat from '../../assets/img/sifat.png'
import Kullash from '../../assets/img/kullash.png'




function About() {
    return (
        <section className="about">
            <div className="container about__container">
                <h2 className="about__title">Biz qanday ishlaymiz?</h2>
                <p className="about__text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam
                    arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis
                    eros at sem pulvinar</p>
                <div className="about__content">

                    <div className="about__item">
                        <img src={Talab} alt="talab" width="300" height="278" />
                        <div>
                            <h3 className="about__title-mini">Talablarni aniqlab chiqamiz</h3>
                            <p className="about__text-mini">Nullam laoreet nec turpis et ultrices.
                                Duis sit amet quam arcu. Nam facilisis
                            </p>
                        </div>
                    </div>

                    <div className="about__item">
                        <div>
                            <h3 className="about__title-mini">Bir necha yechimlarni taklif qilamiz</h3>
                            <p className="about__text-mini">Nullam laoreet nec turpis et ultrices. Duis
                                sit amet quam arcu. Nam facilisis
                            </p>
                        </div>
                        <img src={Yechim} alt="yechim" width="300" height="278" />
                    </div>

                    <div className="about__item">
                        <img src={Loyiha} alt="loyiha" width="300" height="278" />
                        <div>
                            <h3 className="about__title-mini">Loyiha uchun vaqt belgilaymiz</h3>
                            <p className="about__text-mini">Nullam laoreet nec turpis et ultrices.
                                Duis sit amet quam arcu. Nam facilisis
                            </p>
                        </div>
                    </div>

                    <div className="about__item">
                        <div>
                            <h3 className="about__title-mini">A’lo sifat bilan bajarib topshiramiz</h3>
                            <p className="about__text-mini">Nullam laoreet nec turpis et ultrices.
                                Duis sit amet quam arcu. Nam facilisis
                            </p>
                        </div>
                        <img src={Sifat} alt="sifat" width="300" height="278" />
                    </div>

                    <div className="about__item">
                        <img src={Kullash} alt="kullash" width="300" height="278" />
                        <div>
                            <h3 className="about__title-mini">Qo’llab-quvvatlab boramiz</h3>
                            <p className="about__text-mini">Nullam laoreet nec turpis et ultrices.
                                Duis sit amet quam arcu. Nam facilisis
                            </p>
                        </div>
                    </div>
                    <button type="submit" className="btn about__btn">Buyurtma berish</button>
                </div>
            </div>
        </section>
    )
}

export default About