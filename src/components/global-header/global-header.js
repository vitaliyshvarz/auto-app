import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import autoLogo from '../../assets/auto-logo.svg';
import './global-header.css';

function GlobalHeader() {

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">
        <img src={autoLogo} className="auto-logo" alt="logo" />
      </span>
      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="topMenu">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/listing">Listing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default GlobalHeader;
