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
      history.location.state.managerId = "";
    }
  }

  render() {
    let firstBt = "Projects";
    let secondBt = "New Project";

    if (this.props.location === '/AllProjects') {
      firstBt = "Active Projects";
    } else if (this.props.location === '/NewProject') {
      secondBt = "Active projects";
    }
    return (
      <nav className="navbar navbar-light bg-light">
          <Link to="/">
            <img className="navbar-brand d-inline-block align-top" width ="330" height="112"src={logo} alt="Kanrisha Logo" />
          </Link>
          <h3 className="text-left">Personnel Manager</h3>
          <ul className="nav justify-content-end">
            <Link to="/">
              <li className="nav-item nav-link" value={firstBt}>{firstBt}</li>
            </Link>
            <Link to="/new-project">
              <li className="nav-item nav-link" value={secondBt}>{secondBt}</li>
            </Link>
            <Link to="/">
              <li className="nav-item nav-link" value="Logout">Logout</li>
            </Link>
          </ul>
      </nav>
    );
  }
}
