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
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount () {
    const url = 'http://localhost:3001/projects/' + this.state.managerId;
    axios.get(
      url
      ).then(response => {
        this.setState({ data: response.data })
        console.log(response.data)
      }).catch(error => {
        console.log("registration error", error);
      });
  }

  async handleOnClick (e) {
    e.preventDefault();
    const key = e.currentTarget.dataset.key;
    await this.setState({ projectId: key });
    history.push('/ProjectPage', this.state);
  }

  render() {
    console.log("all")
    return (
      <React.Fragment>
        <div className="container mt-4">
          <ProjectsList projects={this.state.data} onClick={this.handleOnClick}/>
        </div>
      </React.Fragment>
    );
  }
}