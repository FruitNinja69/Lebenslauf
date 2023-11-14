import { Link } from 'react-router-dom'
import React from 'react'
import { Icons } from './icons'
import backgroundImage from '../../photos/background.jpg'
import './components.css'

export function Footer() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '50vh',
  }
  return (
    <>
      <div className="footer" id="footer" style={divStyle}>
        <div className="items">
          <Icons.mail />
          <h4>vincentrobert132@gmail.com</h4>
          <Link to="https://github.com/FruitNinja69" target="_blank">
            <Icons.githubIcon />
          </Link>
          <Link to="https://www.instagram.com/thikal_31/?hl=en" target="_blank">
            <Icons.instragramm />
          </Link>
        </div>
      </div>
    </>
  )
}
