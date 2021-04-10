import React from 'react';
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = () => {

  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I'm
          <span> Adrián Antañón </span>
        </h1>
        <p className="h-sub-text">
          A front-end developer, passionated about web development, technology and internet.
        </p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/adrianantanyon" rel="noopener noreferrer" target="_blank" className="icon-holder">
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </a>
          <a href="https://github.com/Adri-Antanon" rel="noopener noreferrer" target="_blank" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a href="https://gitlab.com/AdrianAntanon" rel="noopener noreferrer" target="_blank" className="icon-holder">
            <FontAwesomeIcon icon={faGitlab} className="icon yt" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;