import React from 'react'; 
import  './components.css'
import aws from '../../photos/AWS.png'
import css from '../../photos/CSS.png'
import Csharp from '../../photos/C.png'
import Docker from '../../photos/Docker.png'
import html from '../../photos/HTML.png'
import git from '../../photos/GIt.png'
import sql from '../../photos/SQL.png'
import MongoDB from '../../photos/MongoDB.png'
import javascript from '../../photos/javascript.png'


export function About() {
  return (
    <>
    <div className="about">
    <div className='aws'>
    <img src={aws} alt="AWS" />
    </div>
    <div className='css'>
    <img src={css} alt="CSS" />
    </div>
    <div className='csharp'>
    <img src={Csharp} alt="C#" />
    </div>
    <div className='docker'>
    <img src={Docker} alt="Docker" />
    </div>
    <div className='html'>
    <img src={html} alt="HTML" />
    </div>
    <div className='git'>
    <img src={git} alt="GIT" />
    </div>
    <div className='sql'>
    <img src={sql} alt="sql" />
    </div>
    <div  className='mongodb'>
    <img src={MongoDB} alt="mongodb" />
    </div>
    <div  className='javascript'>
    <img src={javascript} alt="javascript" />
    </div>
    </div>
    <img src={MongoDB} alt="jaav">
      
  )
}

export default About;
