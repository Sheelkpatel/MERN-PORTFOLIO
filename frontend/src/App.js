
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Project';
import Resume from './pages/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
         <Route path="/projects" element={<Projects />} /> 
          <Route path="/resume" element={<Resume />} /> 
        </Routes>
      
      <Footer />
    </Router>    
    
        </>
  );
}

export default App;
