import React from 'react'
import { Link } from 'react-scroll'
import { Home } from './assets/components/Home'
import { Contact } from './assets/components/Contact'
import { Portfolio } from './assets/components/Portfolio'
import { About } from './assets/components/About'
import { Footer } from './assets/components/Footer'
import Logo from './photos/logohome.png'
import './App.css'

function App() {
  return (
    <>
      <div className="nav-items">
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="button">
          <a className="button-element" href="#home">
            Home
          </a>
          <a className="button-element" href="#about">
            About
          </a>
          <a className="button-element" href="#portfolio">
            Portfolio
          </a>
          <a className="button-element" href="#contact">
            Contact
          </a>
        </div>
      </div>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Footer></Footer>
      <Contact></Contact>
    </>
  )
}

export default App
