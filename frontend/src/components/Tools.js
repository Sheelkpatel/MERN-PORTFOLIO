import React from 'react';
import '../css/About.css';

import Vscode from '../Assets/vscode.svg';
import Postman from '../Assets/postman.svg';
import Insomnia from '../Assets/insomnia.svg';
import MacOS from '../Assets/macos.svg';
import GoogleDocs from '../Assets/googledocs.svg';
import PowerPoint from '../Assets/powerpoint.svg';

const Tools = () => {
  const tools = [
    { name: 'VS Code', img: Vscode },
    { name: 'Postman', img: Postman },
    { name: 'Insomnia', img: Insomnia },
    { name: 'macOS', img: MacOS },
    { name: 'Google Docs', img: GoogleDocs },
    { name: 'PowerPoint', img: PowerPoint },
  ];

  return (
    <div className="tools-section">
      <h2>Tools I Use</h2>
      <div className="skills-grid mt-5">
        {tools.map((tool) => (
          <div className="skill-card" key={tool.name}>
            <img src={tool.img} alt={tool.name} />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
