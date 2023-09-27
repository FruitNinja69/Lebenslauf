import React from 'react'
import home from '../../photos/home.png'
import backgroundImage from '../../photos/background.jpg'
import './components.css'

export function Home() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100vh', // Set the height to 100vh
  }
  return (
    <>
      <div className="home" id="home" style={divStyle}>
        <div className="home-text">
          <h2 className="animated-text">
            {' '}
            Hallo meine Name ist Thikalvannan Vincent Robert
          </h2>
        </div>
        <div className="photo">
          <img src={home} alt="Logo" />
        </div>
      </div>
    </>
  )
}

export default Home
