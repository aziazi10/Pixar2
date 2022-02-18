import './App.css'

// components

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About/>
      <Login/>
      <Footer/>
    </div>
  )
}

export default App

