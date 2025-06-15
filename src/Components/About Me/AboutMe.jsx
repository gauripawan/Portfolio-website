import React, { useState, useEffect} from "react";
import "./AboutMe.css";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaCode, FaHtml5, FaCss3Alt, FaJs, FaNodeJs} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFigma, SiRender, SiMysql, SiAdobexd, SiAdobephotoshop } from "react-icons/si";
import { FiPenTool } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";
import { RiVercelLine } from "react-icons/ri";
import { FaGitAlt, FaGithub } from "react-icons/fa";

// Progress bar component with animation
const PercentageBar = ({ skill }) => {
  const [progress, setProgress] = useState(0);
  const IconComponent = skill.icon;

  useEffect(() => {
    let current = 0;
    const speed = 15; // ms per increment
    const increment = skill.level / (1500 / speed); // fill to level in 1.5s

    const interval = setInterval(() => {
      current += increment;
      if (current >= skill.level) {
        current = skill.level;
        clearInterval(interval);
      }
      setProgress(current);
    }, speed);

    return () => clearInterval(interval);
  }, [skill.level]);

  return (
    <div className="progressbar">
      <CircularProgressbarWithChildren
        strokeWidth={12}
        value={progress}
        styles={buildStyles({
          rotation: 0.5,
          pathColor: "#2B2373",
          trailColor: "none",
        })}
      >
        {IconComponent && <IconComponent size={30} color="#6253BE" />}
      </CircularProgressbarWithChildren>
      <div className="skill-name">{skill.name}</div>
    </div>
  );
};

const AboutMe = ( {setActiveSection }) => {
  const [activeTab, setActiveTab] = useState("all");


  const skillsContent = [
    { name: "HTML", level: 85, category: "frontend", icon: FaHtml5 },
    { name: "CSS", level: 90, category: "frontend", icon: FaCss3Alt },
    { name: "Tailwind", level: 65, category: "frontend", icon: SiTailwindcss },
    { name: "Javascript", level: 75, category: "frontend", icon: FaJs },
    { name: "Vercel", level: 80, category: "frontend", icon: RiVercelLine },
    { name: "Node", level: 85, category: "backend", icon: FaNodeJs },
    { name: "MongoDB", level: 85, category: "backend", icon: SiMongodb },
    { name: "Render", level: 85, category: "backend", icon: SiRender },
    { name: "git", level: 60, category: "backend", icon: FaGitAlt },
    { name: "Github", level: 80, category: "backend", icon: FaGithub},
    { name: "Figma", level: 95, category: "product", icon: SiFigma },
    { name: "AdobeXD", level: 75, category: "product", icon: SiAdobexd },
    { name: "Photoshop", level: 80, category: "product", icon: SiAdobephotoshop },
    { name: "MySQL", level: 85, category: "product", icon: SiMysql },      
  ];

  const tabs = ["all", "frontend", "backend", "product"];

  const filteredSkills = skillsContent.filter(
    (skill) => activeTab === "all" || skill.category === activeTab
  );

  return (
    <div id="about" className="about-section">
      <div className="heading">
        About <span className="me">Me</span>
      </div>

      <div className="about-container ">
        {/* Left Section */}
        <div className="left-section">
          <p>
            Started as a designer, exploring the tech side and became passionate about building end-to-end solutions from product thinking to final execution.
 
          </p>
          <div className="card-list">
            <div className="card">
              <div className="cardicon"><FiPenTool size="25px" color="#6253BE" /></div>
              <div>
                <h3>Designer</h3>
                <p className="cardp">
                  Creating dynamic app experiences through intuitive wireframes and UI. </p>
              </div>
            </div>
            <div className="card">
              <div className="cardicon"><FaCode size="25px" color="#6253BE" /></div>
              <div>
                <h3>Developer</h3>
                <p className="cardp">
                  Building seamless digital experiences through clean code, scalable architecture.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="cardicon"><IoMdPerson size="25px" color="#6253BE" /></div>
              <div>
                <h3>Product Enthusiast</h3>
                <p className="cardp">
                  Crafting impactful products, business goals, and tech feasibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2>Skills</h2>
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <PercentageBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
