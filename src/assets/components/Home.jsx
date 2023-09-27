import React from 'react'
import logo from '../../photos/logo.png'
import './components.css'

export function Home() {
  return (
    <>
      <div className="home" id="home">
        <h1>Home</h1>
        <div className="home-text">
          <h2 className="animated-text">
            {' '}
            Hallo meine Name ist Thikalvannan Vincent Robert
          </h2>
        </div>
        <div className="photo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </>
  )
}

export default Home
