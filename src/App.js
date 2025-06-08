//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollIndicator from './components/ScrollIndicator';


function App() {
  return (
    <>
      <ScrollIndicator />
      <Navbar />
      <Hero />
      <div style={{ backgroundColor: '#121212' }}>
        <About />
        <Projects />
        <Contact />
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
