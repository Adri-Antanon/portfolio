import React from 'react';
import { NavLink } from 'react-router-dom';

import avatar from '../assets/img/avatar.png'

const NavBar = () => {

  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="avatar-adrian-antanyon" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active" >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active" >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" exact activeClassName="active" >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active" >
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>@2021 Adrián Antañón</p>
        </footer>
      </nav>
    </div>
  );
};

export default NavBar;