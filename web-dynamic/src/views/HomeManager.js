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
      projectId: "",
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount () {
    const url = 'http://localhost:3002/projects/' + this.state.managerId;
    axios.get(
      url
      ).then(response => {
        this.setState({ data: response.data })
        console.log(response.data)
      }).catch(error => {
        console.log("registration error", error);
      });
  }

  handleOnClick (e) {
    e.preventDefault();
    this.setState({ projectId: e.currentTarget.dataset.key, function() {
      console.log(this.state.value)
    } });
    console.log(this.state);
    //history.push('/ProjectPage', this.state);
    console.log(e.currentTarget.dataset.key);
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