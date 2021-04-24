import React from 'react';
import { Link } from 'react-router-dom';


import about from '../assets/img/adri.JPG';

const ImageSection = () => {

  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="adrian-antanyon" />
      </div>
      <div className="about-info">
        <h4>I'm<span> Adrián Antañón</span></h4>
        <p className="about-text">
          A highly motivated, fast learner and self-taught developer, passionated about web development, technology and internet. I am proactive, hard worker person and I enjoy working on a team and the exchange of ideas and knowledge it provides.
          </p>
        <p className="about-text">
          My goal is develop my career by building simple, clean and well crafted software using the latest technologies.
          </p>
        <div className="about-details">
          <div className="left-section">
            <p>Location: </p>
            <p>Languages: </p>
          </div>
          <div className="right-section">
            <p>Barcelona</p>
            <p>Spanish, English, Catalan</p>
          </div>
        </div>
        <button className="btn" >
          <Link className="link" rel="noopener noreferrer" to="ResumeAdrianAntanyon.pdf" target="_blank" download >
            Download CV
        </Link>
        </button>
      </div>
    </div>
  );
};

export default ImageSection;