import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Logo.png';

export class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Kanrisha Logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
          </div>
        </div>
      </nav>
    );
  }
}
