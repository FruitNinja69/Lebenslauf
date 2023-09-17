import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from "./assets/components/Home"
import { Contact } from "./assets/components/Contact"
import { Portfolio } from "./assets/components/Portfolio"
import { About } from "./assets/components/About"
import  './App.css'

function App() {
  return (
    <>
    <div className='nav-items'>
      <div className='Logo'>
        <h1>Logo</h1>
      </div>
      <div className='button'>
        <a href=""> Home </a>
        <a href=""> About me </a>
        <a href=""> Portfolio </a>
        <a href=""> Contact </a>
      </div>
    </div>
    <Home></Home>
    <About></About>
    <Portfolio></Portfolio>
    <Contact></Contact>
    
      

    {/* <Link to="/" replace> 
      <button> Home </button>
    </Link>  
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/about" element={<About />}/>
      </Routes> */}
    </>
  );
}

export default App;
