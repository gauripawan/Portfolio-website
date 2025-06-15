import React, { useState } from "react";
import "./Navbar.css";

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About Me", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Navbar = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-heading">Portfolio.</div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`navbar-tabs ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
