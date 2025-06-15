import React, { useState } from "react";
import './App.css';
import "./index.css";
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import AboutMe from './Components/About Me/AboutMe.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Loading from './Components/Loading/Loading.jsx';
import RevealOnScroll from "./Components/RevealOnScroll.jsx";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="App">
      <div className="circle top-left"></div>
      <div className="circle bottom-right"></div>
      <div className="circle bottom-left"></div>

      {!isLoaded && <Loading onComplete={() => setIsLoaded(true)} />}

      <div className={`fade-container ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar activeSection={activeSection} />
        <RevealOnScroll id="home" onVisible={setActiveSection}>
          <Home />
        </RevealOnScroll>
        <RevealOnScroll id="about" onVisible={setActiveSection}>
          <AboutMe />
        </RevealOnScroll>
        <RevealOnScroll id="projects" onVisible={setActiveSection}>
          <Projects />
        </RevealOnScroll>
        <RevealOnScroll id="contact" onVisible={setActiveSection}>
          <Footer />
        </RevealOnScroll>
        
      </div>
    </div>
  );
}

export default App;
