import { Link } from 'react-router-dom'
import React from 'react'
import { Icons } from './icons'
import './components.css'

export function Footer() {
  return (
    <>
      <div className="footer">
        <div className="items">
          <Icons.mail />
          <h4>vincentrobert132@gmail.com</h4>
          <Link to="https://github.com/FruitNinja69" target="_blank">
            <Icons.githubIcon />
          </Link>
        </div>
      </div>
    </>
  )
}
export default Footer
