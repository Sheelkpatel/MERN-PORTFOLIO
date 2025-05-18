import React from 'react';
import { motion } from 'framer-motion';
import '../css/skill.css'; // Keep using your existing styles

// Import assets...
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
import Heroku from '../Assets/Heroku.svg';
import Vscode from '../Assets/vscode.svg';
import Postman from '../Assets/postman.svg';
import Insomnia from '../Assets/insomnia.svg';
import MacOS from '../Assets/macos.svg';
import GoogleDocs from '../Assets/googledocs.svg';
import PowerPoint from '../Assets/powerpoint.svg';
import Sequelize from '../Assets/Sequelize-Dark.svg';
import Github from '../Assets/Github-Dark.svg';
import PhP from '../Assets/PHP-Dark.svg';

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
    { name: 'Vercel', img: Vercel },
    { name: 'Heroku', img: Heroku },
    { name: 'VS Code', img: Vscode },
    { name: 'Postman', img: Postman },
    { name: 'Insomnia', img: Insomnia },
    { name: 'macOS', img: MacOS },
    { name: 'Google Docs', img: GoogleDocs },
    { name: 'PowerPoint', img: PowerPoint },
    { name: 'Sequelize', img: Sequelize },
    { name: 'Github', img: Github },
    { name: 'PHP', img: PhP },
  ];

  return (
    <section id="skills" style={{ backgroundColor: '#121212', color: 'white' }}>
      <div className="skills-section container py-5">
        <h2 className="text-center mb-4">Professional Skill Set</h2>
        <div className="skills-grid mt-5">
          {skill.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.0 }}
            >
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
