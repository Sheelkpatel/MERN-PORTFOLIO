import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Tooltip,
  Title,
  Legend,
} from 'chart.js';
import '../css/Expertise.css'; // custom styles

ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend);

const skillData = {
  Frontend: [
   { name: "HTML5", percent: 90 },
{ name: "CSS3", percent: 85 },
{ name: "Tailwind CSS", percent: 75 },
{ name: "Bootstrap", percent: 85 },
{ name: "Font Awesome", percent: 90 },
  ],
  "Logic & frameworks" : [
   { name: "JavaScript (ES6+)", percent: 80 },
   { name: "React.js", percent: 90 },
   { name: "Redux / Context API", percent: 85 },
   { name: "React Slick (Carousel)", percent: 80 },
  { name: "Chart.js", percent: 80 },

  ],
  "UI Enhancements / Animations": [
    { name: "Framer Motion", percent: 85 },
    { name: "Slick Carousel", percent: 80 },
     { name: "CSS Animations & Transitions", percent: 80 },,
  ],
  Backend: [
  { name: "Node.js", percent: 80 },
  { name: "Express.js", percent: 75 },
  { name: "JWT Authentication", percent: 70 },
  { name: "Multer (File Uploads)", percent: 75 },
  { name: "Cloudinary API (Media Storage)", percent: 75 },
  { name: "Razorpay (Payment Integration)", percent: 80 },
  { name: "Nodemailer (Email Service)", percent: 85 },
  { name: "PHP", percent: 60 },
],

  Database: [
  { name: "MongoDB", percent: 80 },
  { name: "Mongoose (ODM)", percent: 75 },
  { name: "MongoDB Atlas (Cloud)", percent: 70 },
  { name: "MySQL", percent: 75 },
  { name: "Sequelize (ORM)", percent: 70 },
],
"Tools & DevOps": [
  { name: "Git & GitHub", percent: 80 },
  { name: "VS Code", percent: 90 },
  { name: "Postman", percent: 85 },
  { name: "Insomnia", percent: 85 },
  { name: "Vercel (Deploy)", percent: 75 },
  { name: "Render (Deploy)", percent: 80 },
  { name: "XAMPP (Local Server)", percent: 80 },
],
  "Soft Skills": [
    { name: "Problem Solving", percent: 95 },
    { name: "Team Collaboration", percent: 95 },
    { name: "Communication", percent: 80 },
    { name: "Time Management", percent: 90 },
     { name: "Adaptability", percent:80 },
    
  ],
};

const SkillSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Frontend');
  const selectedSkills = skillData[selectedCategory];

  const barData = {
    labels: selectedSkills.map((skill) => skill.name),
    datasets: [
      {
        label: 'Proficiency (%)',
        data: selectedSkills.map((skill) => skill.percent),
        backgroundColor: '#00bcd4',
        borderRadius: 6,
      },
    ],
  };

  const barOptions = {
    indexAxis: 'y',
    scales: {
      x: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          color: '#ffffff',  // x-axis ticks color
        },
        
      },
      y: {
        ticks: {
          color: '#ffffff', // y-axis labels color
        },
       
      },
    },
    plugins: {
      legend: { 
        display: false,
        labels: {
          color: '#ffffff',  // legend text color (not shown here but good to set)
        },
      },
      tooltip: { enabled: true },
      title: {
        display: false,
        color: '#ffffff',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeOutQuart',
    },
  };

  const pieData = {
    labels: selectedSkills.map((skill) => skill.name),
    datasets: [
      {
        label: 'Skill Distribution',
        data: selectedSkills.map((skill) => skill.percent),
        backgroundColor: [
  '#00bcd4', '#00e5ff', '#1de9b6', '#00c853',
  '#ffab00', '#ff6d00', '#ff4081', '#7c4dff'
],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        position: 'bottom',
        labels: {
          color: '#ffffff',  // legend text color
        },
      },
      tooltip: { enabled: true },
      title: {
        display: false,
        color: '#ffffff',
      },
    },
    animation: {
      animateRotate: true,
      duration: 1000,
      easing: 'easeOutBounce',
    },
  };

  return (
    <section className="container py-5">
      <h2 className="text-center text-light mb-5 fw-bold display-6">
        My Skill <span style={{ color: "#00bcd4" }}>Expertise</span>
      </h2>

      {/* Categories on top */}
      <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
        {Object.keys(skillData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`btn category-btn ${selectedCategory === category ? 'selected-category' : 'unselected-category'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Charts side by side */}
      <div className="row gx-4 align-items-stretch">
        <div className="col-md-7 mb-4 mb-md-0">
          <div className="card shadow-sm h-100 chart-container animate-fadeIn" style={{ backgroundColor: '#121212' }}>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center mb-4 text-white">{selectedCategory} Proficiency</h5>
              <div className="chart-wrapper flex-grow-1">
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card shadow-sm h-100 chart-container animate-fadeIn" style={{ backgroundColor: '#121212' }}>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center mb-4 text-white">Skill Share</h5>
              <div className="chart-wrapper flex-grow-1">
                <Pie data={pieData} options={pieOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
