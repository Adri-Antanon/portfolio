import React from 'react';
import about from '../assets/img/avatar.jpg';

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
            <p>Full Name</p>
            <p>Nationality</p>
            <p>Languages</p>
          </div>
          <div className="right-section">
            <p>: Adrián Antañón Orozco</p>
            <p>: Spanish</p>
            <p>: Spanish, English, Catalan</p>
          </div>
        </div>
        <button className="btn" >Download Cv</button>
      </div>
    </div>
  );
};

export default ImageSection;