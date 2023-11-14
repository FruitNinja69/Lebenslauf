import React from 'react'
import Webseite from '../../photos/Webseite.jpg'
import MongoDb from '../../photos/MongoDB.jpg'
import AWS from '../../photos/aws.jpg'
import SQL from '../../photos/SQL.png'
import Quiz from '../../photos/Quiz.jpg'
import './components.css'
import { Link } from 'react-router-dom'

export function Portfolio() {
  return (
    <>
      <div className="portfolio" id="portfolio">
        <p className="portfolio-title">Portfolio</p>
        <div className="portfolio-list">
          <Link
            to="https://fruitninja69.github.io/LA_1303_Zahlensymtem/"
            target="_blank"
            className="projekts"
          >
            <img src={Webseite} alt="Projekt Item" />
          </Link>
          <Link
            to="https://portfolio.bbbaden.ch/view/view.php?t=8461877193e919d2325a"
            target="_blank"
            className="projekts"
          >
            <img src={MongoDb} alt="Projekt Item" />
          </Link>
          <Link
            to="https://portfolio.bbbaden.ch/view/view.php?t=b402e9eff895784ad496"
            target="_blank"
            className="projekts"
          >
            <img src={AWS} alt="Projekt Item" />
          </Link>
          <Link
            to="https://portfolio.bbbaden.ch/user/t-vincentrobert-inf21/modul-164"
            target="_blank"
            className="projekts"
          >
            <img src={SQL} alt="Projekt Item" />
          </Link>
          <Link
            to="https://portfolio.bbbaden.ch/user/t-vincentrobert-inf21/1304"
            target="_blank"
            className="projekts"
          >
            <img src={Quiz} alt="Projekt Item" />
          </Link>
          {/* <Link to="https://git-scm.com/" target="_blank" className="projekts">
            <img src={Webseite} alt="Projekt Item" />
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default Portfolio
