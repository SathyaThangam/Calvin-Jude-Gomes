import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const styles = {
    navbar: {
      'boxShadow': '1px 1px 10px 2px #444',
      'backgroundColor': 'white'
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={styles.navbar}>
      <a className="navbar-brand" href="#">OMDb API</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/#landingPage">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#usagePage">Usage</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#parametersPage">Parameters</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#examplesPage">Examples</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#changeLogPage">Change Log</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/api">API Key</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
