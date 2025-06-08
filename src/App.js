//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollIndicator from './components/ScrollIndicator';
import Footer from './components/Footer.jsx';


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
      <Footer/>
      <ScrollToTop />
    </>
  );
}

export default App;
