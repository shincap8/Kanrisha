import React from 'react';
import axios from 'axios';
import history from '../history';
import ProjectsList from '../components/ProjectsList';

export class HomeManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      managerId: history.location.state.managerId,
    };
  }

  componentDidMount () {
    const url = 'http://localhost:3002/projects/' + this.state.managerId;
    axios.get(
      url
      ).then(response => {
        this.setState({ data: response.data })
      }).catch(error => {
        console.log("registration error", error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <ProjectsList projects={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}