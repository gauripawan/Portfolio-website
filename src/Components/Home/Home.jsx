import React from 'react';
import './Home.css';
import Profile from '../../assets/Profile3.png'
import {motion} from 'motion/react'
import home1 from '../../assets/home1.png'
import home2 from '../../assets/home2.png'
import home3 from '../../assets/home3.png'
import {FaLink} from 'react-icons/fa';

const Home = () => {
  return (
    <div id='home' className="home-container">
      {/* Decorative Circles */}

      <div className="content">
        <div className="text-section">
          <h1><span className='heading1'>Hi I am </span><span className='heading2'>Gauri Pawan</span></h1>
          <p className="home-para">
            Whether it’s designing intuitive interfaces, developing performant web apps, or driving product vision from idea to launch — I thrive at the intersection of design, development, and product thinking. Let’s build something exceptional.
          </p>
<a
  href="https://drive.google.com/file/d/1aZ6WlWBWd6ItgRlMIXMOY2LsNbnSgzAe/view?usp=sharing"
  className="resume-button"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLink className="icon" />
  <span>Resume</span>
</a>
        </div>

        <div className="image-section">
          <img className='profile' src={Profile} alt="Home Visual" /> 
                <motion.div
        className="bubble1"
        animate={{
          x: ["0%", "20%", "-15%", "10%", "-20%", "0%"],
          y: ["0%", "-15%", "20%", "-10%", "15%", "0%"],
        }}
        transition={{
          duration: 12, // faster
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />     
      <motion.div
        className="bubble2"
        animate={{
          x: ["0%", "0%", "0%", "0%", "0%", "0%"], // no horizontal motion
          y: ["0%", "25%", "-20%", "15%", "-25%", "0%"], // vertical motion only
        }}
        transition={{
          duration: 10, // faster
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
      className="hover-card1"
      whileHover={{
        rotate: 5, 
        y: -10,
        transition: { type: "spring", stiffness: 300, damping: 15 }
      }}
    >
      <img height='42px' src={home1} alt='h'  />
    </motion.div>
        <motion.div
      className="hover-card2"
      whileHover={{
        rotate: -5,
        y: -10,
        transition: { type: "spring", stiffness: 300, damping: 15 }
      }}
    >
      <img height='42px' src={home2} alt='h' />
    </motion.div>
            <motion.div
      className="hover-card3"
      whileHover={{
        rotate: 5,
        y: -10,
        transition: { type: "spring", stiffness: 300, damping: 15 }
      }}
    >
      <img height='42px' src={home3} alt='h' />
    </motion.div>
        </div>
      </div>
      <div className="scroll-down">
  <span className="scroll-text">Scroll</span>
  <div className="scroll-arrow">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
    </div>
  )
}

export default Home