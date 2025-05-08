
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import Skills from './components/Skills';




function App() {
  return (
   
      <div  className="app-container">
    
        <div >
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Footer />
        </div>
      </div>
    
  );
}


export default App;

