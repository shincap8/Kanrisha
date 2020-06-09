import React from 'react';
import axios from 'axios';
import history from '../history';

class LoginFreelancer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      freelancerId: '',
      user: this.props.user,
      managerId: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState ({
      [e.target.name]: e.target.value
    });
  }

  async handleSubmit (e) {
    e.preventDefault ();

    const { email, password } = this.state;

    await axios.post(
      'http://localhost:3001/signIn/freelancer',
      {
        email: email,
        password: password,
      }).then(response => {
        if (response.data) {
          this.setState({freelancerId: response.data, password: ""});
          history.push('/Home', this.state);
        } else {
          console.log("nah");
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 mt-3 mx-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Freelancer user:</label>
              <input type="email" className="form-control" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} required/>                                
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} required/>                                
            </div>
            <button type="submit" onClick={this.handleSubmit} className="btn btn-info col-6 offset-3">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginFreelancer;
