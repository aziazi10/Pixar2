import "./Hero.css"

function Hero() {
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__content">
                    <h2 className="hero__title">Biznesingizni keyingi bosqichga
                        olib chiqing</h2>
                    <p className="hero__text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam
                        arcu. Nam facilisis lacinia ex, eget sollicitudin massa
                        pellentesque in. Vivamus mattis eros at sem pulvinar
                    </p>
                    <button className="hero__btn" type="submit">Xizmatlar bilan tanishish</button>
                </div>
                <iframe width="458" height="258" src="https://www.youtube.com/embed/6_pru8U2RmM" title="YouTube video player" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        </section>
    )
}

export default Hero
