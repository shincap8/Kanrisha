import React from 'react';
import axios from 'axios';
import history from '../history';
import ProjectsList from '../components/ProjectsList';


export class HomeFreelancer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          projects: [],
          user: history.location.state.user,
      };
  }

  componentDidMount () {
    const url = 'http://localhost:3001/project/freelancer/' + history.location.state.freelancerId;
    axios.get(
      url
    ).then(response => {
      this.setState({ projects: response.data })
    }).catch(error => {
      console.log("registration error", error);
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <ProjectsList projects={this.state.projects} />
        </div>
      </React.Fragment>
    );
  }
}