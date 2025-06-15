import React, { useState } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';
import projectmenu from "../../assets/ProjectMenu.png"
import projectmenu2 from "../../assets/ProjectMenu2.png"
import projecthilabs from "../../assets/ProjectHilabs.png"
import projectkanban from "../../assets/ProjectKanban.png"
import projectsignup from "../../assets/ProjectSignup.png"
import projectpbs from "../../assets/ProjectPBS.png"

const Projects = () => {
const projects = [
  {
    imageSrc: projectmenu,
    title: "Digital Menu and Food Ordering",
    description: "A digital menu app with table-linked ordering, login, search/filter, order history, reordering, live order tracking, feedback, and payment.",
    techStack: ["React", "Tailwind", "Stripe", "JWT", "Express", "MongoDB"],
    button1Text: "Hosted Link",
    button2Text: "Source Code",
    demoLink: "https://digital-menu-two-orcin.vercel.app/",
    githubLink: "https://github.com/gauripawan/Digital-Menu",
    category: "fullstack"
  },
  {
    imageSrc: projectmenu2,
    title: "Restaurant Admin Dashboard",
    description: "Responsive admin dashboard with live order alerts, order/details view, menu management, status updates, and earnings summary. ",
    techStack: ["React", "Tailwind", "Socket.io", "JWT", "Express", "MongoDB"],
    button1Text: "Hosted Link",
    button2Text: "GitHub",
    demoLink: "https://digital-menu-admin.vercel.app/orders",
    githubLink: "https://github.com/gauripawan/Digital-Menu/tree/master/admin/orderease",
    category: "fullstack"
  },
  {
    imageSrc: projecthilabs,
    title: "HiLabs Product Deck",
    description: "A product deck for HiLabs showcasing a CMS-aligned network adequacy tool. Designed a model with comprehensive solutions and wireframes.",
    techStack: ["Figma", "Webflow", "Wireframing", "GTM", "UX research"],
    button1Text: "View Deck",
    button2Text: "Design File",
    demoLink: "https://drive.google.com/file/d/1ryjACZgrhHM3SCaO8d_6srSXk9dbJKBW/view?usp=sharing",
    githubLink: "",
    category: "product"
  },
  {
    imageSrc: projectkanban,
    title: "Kanban Board",
    description: "A React-based Kanban board with custom API integration, supporting task management, drag-and-drop, real-time updates, and persistent storage.",
    techStack: ["React", "RestAPI", "Tailwind", "Javascript" ],
    button1Text: "Hosted Link",
    button2Text: "GitHub",
    demoLink: "https://kanban-board-quicksell-one-psi.vercel.app/",
    githubLink: "https://github.com/gauripawan/Kanban-Board-Quicksell",
    category: "frontend"
  },
    {
    imageSrc: projectsignup,
    title: "Frontend Sign-Up and Home Page",
    description: "Coded the front page and the home page as a freelance work for a startup using pre built UI screens from figma.",
    techStack: ["React", "RestAPI", "Tailwind", "Javascript"],
    button1Text: "Hosted Link",
    button2Text: "GitHub",
    demoLink: "https://condeantai-assignment.vercel.app/",
    githubLink: "https://github.com/gauripawan/frontend-assignment",
    category: "frontend"
  },
  {
    imageSrc: projectpbs,
    title: "Public Bike Sharing App",
    description: "Designed a model for a Public Bike Sharing App in Campus, conducted UX research, made user app flow, wireframes and included gamification.",
    techStack: ["Figma", "Webflow"],
    button1Text: "View Deck",
    button2Text: "Design File",
    demoLink: "https://drive.google.com/file/d/1bytaK9tezKz0BEefhQOUPvIc5qO2wCLe/view?usp=sharing",
    githubLink: "",
    category: "product"
  }
];

  const [activeCategory, setActiveCategory] = useState("all");

  // 📦 Filter logic
  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
        <div id="projects" className="project-section">
      <h2 className="project-heading">Featured <span className='headingsub'>Projects</span></h2>

      <div className="project-tabs">
        {["all", "fullstack", "frontend", "product"].map((category) => (
          <button
            key={category}
            className={`project-tab-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="project-card-wrapper">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects