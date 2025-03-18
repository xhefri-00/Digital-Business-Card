import React from "react";
import '../BusinessCard.css'; // Import styling
import profileImage from '../image/12.jpeg';
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
      <h2>Full-Stack Engineer</h2>

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
          Junior Full-Stack Software Engineer with a diverse background in fitness economy and sales and unique job experiences that taught me 
          adaptability and problem-solving. 
        </p>
        <p className="section">
          I excel in skills like Python, 
          JavaScript, React, Flask, OOP, SQL, HTML, CSS.
        </p>
      </div>

      {/* Interests Section */}
      <div className="section">
        <h3 className="Interests">Interests</h3>
        <p>
          Music, Working Out, Reading, Art, Cooking,
          Sightseeing, Coffee Tasting.
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
