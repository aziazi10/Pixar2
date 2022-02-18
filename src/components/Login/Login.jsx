import "./Login.css"

function Login() {
    return (
        <section className="login container">
            <h2 className="login__title">Buyurtma berish</h2>
            <p className="login__text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam
                arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis
                eros at sem pulvinar
            </p>
            <form className="form">
                <input className="input" type="text" placeholder="Ismingiz"></input>
                <input className="input" type="number" placeholder="Telefon raqamingiz"></input>
                <select className="input">
                    <option selected disabled>Xizmat turi</option>
                    <option>a</option>
                    <option>b</option>
                </select>
                <button className="btn login__btn">Buyurtma berish</button>
            </form>

        </section>
    )
}

export default Login