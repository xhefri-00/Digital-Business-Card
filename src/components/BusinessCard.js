import React from "react";
import '../BusinessCard.css'; // Import styling
import profileImage from '../image/IMG_1128.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const BusinessCard = () => {
  return (
    <div className="card">
      <img
        src={profileImage}
        alt="Xhefri Murati"
        className="profile-image"/>

      {/* Name and Title */}
      <h1>Xhefri Murati</h1>
      <h2>Fullstack Developer</h2>

      {/* Contact Buttons */}
      <div className="buttons">
        {/* Email Button */}
        <a href="mailto:xhefri.murati@outlook.com" className="email-button">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>


        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/xhefri-murati-/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </div>

      {/* About Section */}
      <div>
        <h3 className="AboutMe">About Me</h3>
        <p className="section">
          I am an enthusiastic Software Developer with proficient skills in Python, 
          JavaScript, React, OOP, SQL, and HTML. I excel at simplifying
          complex processes, automating tasks, and delivering user-friendly applications.
        </p>
      </div>

      {/* Interests Section */}
      <div className="section">
        <h3 className="Interests">Interests</h3>
        <p>
          Music. Internet geek. Working out. Music. Entrepreneur. 
          Traveling lover. Professional coffee enjoyer.
        </p>
      </div>

      {/* GitHub Icon at the Bottom */}
      <div className="github-container">
        <a
          href="https://github.com/xhefri-00"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default BusinessCard;
