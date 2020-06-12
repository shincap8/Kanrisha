import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Logo.png';
import history from '../history';

export class NavBar extends React.Component {
  render() {
    let newProject = "";

    if (history.location.state.user === 'manager') {
      newProject = <Link to={{ pathname: "/NewProject", state: history.location.state }}>
                    <li className="nav-item nav-link" value="New_Project">New Project</li>
                  </Link>
    }
    return (
      <nav className="navbar">
        <Link to="/">
          <img className="navbar-brand d-inline-block align-top" width ="330" height="112"src={logo} alt="Kanrisha Logo" />
        </Link>
        <h3 className="text-left">Personnel Manager</h3>
        <ul className="nav justify-content-end">
          <Link to={{pathname: "/Home", state: history.location.state }}>
            <li className="nav-link" value="Active Projects" data-toggle="dropdown">Active Projects</li>
          </Link>
          <Link to={{ pathname: "/AllProjects", state: history.location.state}}>
            <li className="nav-item nav-link" value="All Projects" data-toggle="dropdown">All Projects</li>
          </Link>
          {newProject}
          <Link to={{pathname: "/", state: null}}>
            <li className="nav-item nav-link" value="Logout">Logout</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
