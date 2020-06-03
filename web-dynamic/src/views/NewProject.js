import React from 'react';
import history from '../history';
import axios from 'axios';
import { ProjectForm } from '../components/ProjectForm';

export class NewProject extends React.Component {
  state = {
    project: {
      projectName: '',
      description: '',
      deadline: new Date(),
      tasksId: 'default',
      managerId: history.location.state.managerId,
      freelancersId: 'default',
      status: true,
      advanced: 0
    },
  };
  
  constructor (props) {
    super (props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState ({
      project: {
        ...this.state.project,
        [e.target.name]: e.target.value,
      },
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    const { projectName, description, deadline, tasksId, managerId, freelancersId, status, advanced } = this.state.project;
    axios.post(
      'http://localhost:3002/new-project',
      {
        name: projectName,
        description: description,
        deadline: deadline,
        tasksId: tasksId,
        managerId: managerId,
        freelancersId: freelancersId,
        status: status,
        advanced: advanced
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log("error" + error);
      })
    // this.props.onAddProject(this.state);
    // console.log('Form was submitted');
    // console.log(this.state);
  };

  handleDate = deadline => {
    this.setState({ project: { ...this.state.project, deadline: deadline},}
    );
    console.log(this.state.project);
    console.log(deadline);
  }

  render () {
    return (
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center">New Project</h2>

        <ProjectForm onChange={this.handleChange} onSubmit={this.handleSubmit} project={this.state.project} onChangeDate={this.handleDate}/>
      </div>
    )
  }
}