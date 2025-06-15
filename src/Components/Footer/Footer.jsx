import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='contact' className="footer">
      <h2 className="footer-heading">Contact <span className="me-highlight">Me</span></h2>

      <div className="footer-content">
        <div className="footer-left">
          <p>Let’s build something great together. Feel free to reach out for collaborations, opportunities, or just a friendly chat!</p>
        </div>

        <div className="footer-right">
          <div className="footer-item">
            <div className='footer-icon-container'><FaEnvelope size="25px" className="footer-icon" /></div><div className='footer-text'><span>Email</span>
            <p>gauri_p@ar.iitr.ac.in</p></div>
            
          </div>
                    {/* <div className="footer-item">
            <div className='footer-icon-container'><FaPhoneAlt size="25px" className="footer-icon" /></div><div className='footer-text'><span>Phone</span>
            <p>(+91)8905981719</p></div>
            
          </div> */}
                    <div className="footer-item">
            <div className='footer-icon-container'><FaMapMarkerAlt size="25px" className="footer-icon" /></div><div className='footer-text'><span>Location</span>
            <p>302039, Jaipur, Rajasthan</p></div>
            
          </div>

        </div>
      </div>

      <div className="footer-social">
        <p>Find me at</p>
        <div className="social-icons">
          <a href="https://github.com/gauripawan" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/gauripawan" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com/gauripawan" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <p className="footer-credit">gauripawan@2025</p>
    </footer>
  );
};

export default Footer;
