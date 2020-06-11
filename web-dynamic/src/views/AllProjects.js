import React from 'react';
import axios from 'axios';
import history from '../history';
import ProjectsList from '../components/ProjectsList';

export class AllProjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      managerId: history.location.state.managerId,
      user: history.location.state.user,
      freelancerId: history.location.state.freelancerId,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount () {
    if (this.state.user === "manager") {
      const url = 'http://localhost:3001/projects/' + this.state.managerId;
      axios.get(
        url
      ).then(response => {
        this.setState({ data: response.data })
      }).catch(error => {
        console.log("registration error", error);
      });
    } else {
      const url = 'http://localhost:3001/project/' + this.state.managerId;
      axios.get(
        url
      ).then(response => {
        this.setState({ data: response.data })
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
    return (
      <React.Fragment>
        <div className="container mt-4">
          <ProjectsList projects={this.state.data} onClick={this.handleOnClick}/>
        </div>
      </React.Fragment>
    );
  }
}