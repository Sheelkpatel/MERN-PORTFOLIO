import HTML from '../Assets/HTML.svg';
import CSS from '../Assets/CSS.svg';
import JavaScript from '../Assets/JavaScript.svg';
import MySQL from '../Assets/MySQL-Dark.svg';
import MongoDB from '../Assets/MongoDB.svg';
import ExpressJS from '../Assets/ExpressJS-Dark.svg';
import ReactJS from '../Assets/React-Dark.svg';
import Python from '../Assets/Python-Dark.svg';
import NodeJS from '../Assets/NodeJS-Dark.svg';
import TailwindCSS from '../Assets/TailwindCSS-Dark.svg';
import Bootstrap from '../Assets/Bootstrap.svg';
import Vercel from '../Assets/Vercel-Dark.svg';
import Heroku from '../Assets/Heroku.svg'
import React from 'react';
import Vscode from '../Assets/vscode.svg';
import Postman from '../Assets/postman.svg';
import Insomnia from '../Assets/insomnia.svg';
import MacOS from '../Assets/macos.svg';
import GoogleDocs from '../Assets/googledocs.svg';
import PowerPoint from '../Assets/powerpoint.svg';
import '../css/About.css';
const Skills = () => {
  const skill = [
    { name: 'HTML', img: HTML },
    { name: 'CSS', img: CSS },
    { name: 'JavaScript', img: JavaScript },
    { name: 'MySQL', img: MySQL },
    { name: 'MongoDB', img: MongoDB },
    { name: 'ExpressJS', img: ExpressJS },
    { name: 'ReactJS', img: ReactJS },
    { name: 'Python', img: Python },
    { name: 'NodeJS', img: NodeJS },
    { name: 'TailwindCSS', img: TailwindCSS },
    { name: 'Bootstrap', img: Bootstrap },
    {name :'Vercel' , img : Vercel   },
    {name :'Heroku' , img : Heroku   },
    { name: 'VS Code', img: Vscode },
    { name: 'Postman', img: Postman },
    { name: 'Insomnia', img: Insomnia },
    { name: 'macOS', img: MacOS },
    { name: 'Google Docs', img: GoogleDocs },
    { name: 'PowerPoint', img: PowerPoint },
  ];

  return (
    <section id="skills" style={{backgroundColor:'#121212'}}>
    <div className="skills-section">
      <h2>Professional Skill Set</h2>
      <div className="skills-grid mt-5">
        {skill.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
     
    </section>
  );
};

export default Skills;
