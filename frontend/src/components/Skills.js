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
  ];

  return (
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
  );
};

export default Skills;
