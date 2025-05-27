
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Services from './components/Services';
import './App.css'
import Testimonials from './components/Testimonials';



function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div id="home">
       <Home/>
      </div>
      <div id="about">
       <About />
      </div>
      <div id="services">
       <Services  />
      </div>
      <div id="skills">
       <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="testimonial">
       <Testimonials />
      </div>
      <div id="resume">
       <Resume />
      </div>
      <Footer />
    </div>
  );
}

export default App;


