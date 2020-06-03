import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Logo.png';
import history from '../history';

export class NavBar extends React.Component {
  constructor (props){
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick (e) {
    e.preventDefault();

    if (e.target.value === "Logout") {
      console.log("Eliminé manager Id")
      history.location.state.managerId = "";
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
          <Link to="/">
            <img className="navbar-brand d-inline-block align-top" width ="330" height="112"src={logo} alt="Kanrisha Logo" />
          </Link>
          <h3 className="text-left">Personnel Manager</h3>
          <ul className="nav justify-content-end">
            <Link to="/HomeManager">
              <li className="nav-item nav-link" value="Projects" data-toggle="dropdown">Active Projects</li>
            </Link>
            <Link to="/">
              <li className="nav-item nav-link" value="Projects" data-toggle="dropdown">All Projects</li>
            </Link>
            <Link to="/NewProject">
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
