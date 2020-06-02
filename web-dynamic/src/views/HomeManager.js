import React from 'react';
import history from '../history';

export class HomeManager extends React.Component {
  constructor(props) {
    super(props);

    console.log("Estoy en manager");
    console.log(history.location.state.managerId);
    console.log(history);
  }
  render() {
    return (
      <h3>Home manager</h3>
    );
  }
}