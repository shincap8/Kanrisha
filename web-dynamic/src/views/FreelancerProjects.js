import React from 'react';
import axios from 'axios';
import FreelancerProjectsList from '../components/FreelancerProjectsList';


export class FreelancerProjects extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          projects: [],
      };
      console.log(this.state.projects);
  }

  componentDidMount () {
    const url = 'http://localhost:3001/project/freelancer/5edc5494e5fbba03044273cb';
    axios.get(
      url
    ).then(response => {
      this.setState({ projects: response.data })
      console.log(this.state.projects);
      console.log(response.data);
    }).catch(error => {
      console.log("registration error", error);
    });
  }

  render() {
    console.log(this.state.projects);
    return (
      <React.Fragment>
        <div className="container mt-4">
          <FreelancerProjectsList projects={this.state.projects} />
        </div>
      </React.Fragment>
    );
  }
}