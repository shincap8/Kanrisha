import React from 'react';
import axios from 'axios';
import history from '../history';

export class HomeManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      managerId: history.location.state.managerId,
    };
    console.log(this.state.managerId);
  }

  componentDidMount () {
    const url = 'http://localhost:3002/projects/' + this.state.managerId;
    console.log(url);
    axios.get(
      url
      ).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error.data);
        console.log("registration error", error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Home Manager</h1>
      </React.Fragment>
    );
  }
}