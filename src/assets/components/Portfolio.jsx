import React from 'react'
import portfolioImg from '../../photos/sql.png'
import './components.css'
import { Link } from 'react-router-dom'

export function Portfolio() {
  return (
    <>
      <div className="portfolio" id="portfolio">
        <p className="portfolio-title">Portfolio</p>
        <div className="portfolio-list">
          <Link to="https://git-scm.com/" target="_blank" className="projekts">
            <img src={portfolioImg} alt="Projekt Item" />
          </Link>
          <Link to="https://git-scm.com/" target="_blank" className="projekts">
            <img src={portfolioImg} alt="Projekt Item" />
          </Link>
          <Link to="https://git-scm.com/" target="_blank" className="projekts">
            <img src={portfolioImg} alt="Projekt Item" />
          </Link>
          <Link to="https://git-scm.com/" target="_blank" className="projekts">
            <img src={portfolioImg} alt="Projekt Item" />
          </Link>
          <Link to="https://git-scm.com/" target="_blank" className="projekts">
            <img src={portfolioImg} alt="Projekt Item" />
          </Link>
          <Link to="https://git-scm.com/" target="_blank" className="projekts">
            <img src={portfolioImg} alt="Projekt Item" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Portfolio
