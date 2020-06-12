import React from 'react';
import history from '../history';
import axios from 'axios';
import { ProjectForm } from '../components/ProjectForm';

export class NewProject extends React.Component {
  state = {
    project: {
      name: '',
      description: '',
      deadline: new Date(),
      tasksId: [],
      managerId: history.location.state.managerId,
      freelancersId: [],
      status: true,
      advanced: 0, 
    },
    projectId: "",
    managerId: history.location.state.managerId,
    previousPage: "NewProject",
    user: history.location.state.user,
    freelancerId: history.location.freelancerId,
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
    console.log(this.state.project)
    const { name, description, deadline, tasksId, managerId, freelancersId, status, advanced } = this.state.project;
    axios.post(
      'http://localhost:3001/new-project',
      {
        name: name,
        description: description,
        deadline: deadline.toDateString(),
        tasksId: tasksId,
        managerId: managerId,
        freelancersId: freelancersId,
        status: status,
        advanced: advanced
      }).then(response => {
        this.setState({ projectId: response.data});
        console.log(history.location.state)
        history.push('/ProjectPage', this.state);
      }).catch(error => {
        console.log("error" + error);
      })
    // this.props.onAddProject(this.state);
    // console.log('Form was submitted');
    // console.log(this.state);
  };

  handleDate = deadline => {
    this.setState({ project: { ...this.state.project, deadline: deadline},});
  }

  render () {
    return (
      <div className="col-md-6 offset-md-3 mt-5">
        <h2 className="text-center">New Project</h2>

        <ProjectForm onChange={this.handleChange} onSubmit={this.handleSubmit} project={this.state.project} onChangeDate={this.handleDate}/>
      </div>
    )
  }
}