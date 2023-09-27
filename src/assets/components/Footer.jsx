import { Link } from 'react-router-dom'
import React from 'react'
import { Icons } from './icons'
import './components.css'

export function Footer() {
  return (
    <>
      <div className="footer">
        <div className="items">
          <Link to="vincentrobert132@gmail.com" target="_blank">
            <Icons.mail />
          </Link>
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
export default Footer
