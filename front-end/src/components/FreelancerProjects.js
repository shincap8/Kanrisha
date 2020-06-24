/*
The code below receives by parameter the data of a freelancer by Id.
Returns the names of the projects of a freelancer.
*/

import React from 'react';
import axios from 'axios';

export class FreelancerProjects extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      data: [],
    }

    this.bringProjects = this.bringProjects.bind(this);
  }

  componentDidMount() {
    this.bringProjects(this.props.id);
  }
  bringProjects(id) {
    const url = 'http://localhost:3001/project/freelancer/' + id;
    axios.get(
      url
    ).then( response => {
      this.setState({data: response.data});
    }).catch( error => {
      console.log(error);
    });
  }

  render () {
    return (
      <ul className="f-projects">
        {this.state.data.map(project => {
          return (
            <li key={this.props.id + project._id}>
              {project.name}
            </li>
          );
        })}
      </ul>
    )
  }
}