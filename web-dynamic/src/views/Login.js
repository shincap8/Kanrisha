import React from 'react';
import LoginManager from '../components/LoginManager';
import Logo from '../img/Logo.png';

export class Login extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      user: null,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick (e) {
    e.preventDefault ();

    if (e.target.value === "Manager") {
      this.setState({user: "manager"});
    } else {
      this.serState ({ user: "freelancer" });
    }
  }

  render () {
    const user = this.state.user;
    let login;

    if (user === "manager") {
      login = <LoginManager />
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <img src={Logo} alt="Logo" className="img-fluid"/>
            <h3 className="align-center">Personnel Manager</h3>
            <button className="btn btn-info col-6 mt-2 offset-3" data-toggle="Button" value="Manager" onClick={this.handleOnClick}>Project Manager</button>
            <button className="btn btn-info col-6 mt-2 offset-3" data-toggle="Button" value="Freelancer" onClick={this.handleOnClick}>Freelancer</button>
            {login}
          </div>
        </div>
      </div>
    )
  }
}