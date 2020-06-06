import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Logo.png';
import history from '../history';

export class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
          <Link to="/">
            <img className="navbar-brand d-inline-block align-top" width ="330" height="112"src={logo} alt="Kanrisha Logo" />
          </Link>
          <h3 className="text-left">Personnel Manager</h3>
          <ul className="nav justify-content-end">
            <Link to={{pathname: "/HomeManager", state: history.location.state }}>
              <li className="nav-item nav-link" value="Active Projects" data-toggle="dropdown">Active Projects</li>
            </Link>
          <Link to={{ pathname: "/AllProjects", state: history.location.state}}>
              <li className="nav-item nav-link" value="All Projects" data-toggle="dropdown">All Projects</li>
            </Link>
            <Link to={{pathname: "/NewProject", state: history.location.state}}>
              <li className="nav-item nav-link" value="New_Project">New Project</li>
            </Link>
            <Link to="/">
              
              <li className="nav-item nav-link" value="Logout">Logout</li>
            </Link>
          </ul>
      </nav>
    );
  }
}
