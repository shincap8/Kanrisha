import React from 'react';
import axios from 'axios';
import history from '../history';
import ProjectsList from '../components/ProjectsList';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      managerId: history.location.state.managerId,
      freelancerId: history.location.state.freelancerId,
      user: history.location.state.user,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount () {
    if (this.state.user === "manager") {
      let url = 'http://localhost:3001/active-project/' + this.state.managerId;
      axios.get(
        url
      ).then(response => {
        console.log(response.data)
        this.setState({ projects: response.data })
      }).catch(error => {
        console.log("registration error", error);
      });
    } else {
      const url = 'http://localhost:3001/project/freelancer/' + history.location.state.freelancerId;
      axios.get(
        url
      ).then(response => {
        this.setState({ projects: response.data })
      }).catch(error => {
        console.log("registration error", error);
      });
    }
  }

  async handleOnClick (e) {
    e.preventDefault();
    const key = e.currentTarget.dataset.key;
    await this.setState({ projectId: key });
    history.push('/ProjectPage', this.state);
  }



  render() {
    console.log()
    return (
      <React.Fragment>
        <div className="container mt-4">
          <ProjectsList projects={this.state.projects} onClick={this.handleOnClick}/>
        </div>
      </React.Fragment>
    );
  }
}