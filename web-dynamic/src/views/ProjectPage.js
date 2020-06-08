import React from 'react';
import axios from 'axios';
import history from '../history';
import TasksList from '../components/TasksList';
import FreelancersList from '../components/FreelancersList';
import ProjectDescription from '../components/ProjectDescription';

export class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

    if (history.location.state.previousPage) {
      this.state = {
        data: [],
        freelancers: [],
        project: history.location.state.project,
        managerId: history.location.state.managerId,
        projectId: history.location.state.projectId,
      }
    } else {
      this.state = {
        data: [],
        project: {},
        freelancers: [],
        managerId: history.location.state.managerId,
        projectId: history.location.state.projectId,
      };
    }

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    console.log(this.state.taskId);
  }

  componentDidMount(){
    if (!history.location.state.previousPage) {
      const url3 = 'http://localhost:3001/project/' + history.location.state.projectId;
      axios.get(
        url3
      ).then(response => {
        this.setState({ project: response.data })
      }).catch(error => {
        console.log("registration error", error);
      });
    }
    const url1 = 'http://localhost:3001/project/tasks/' + history.location.state.projectId;
    axios.get(
      url1
    ).then(response => {
      this.setState({ data: response.data })
    }).catch(error => {
      console.log("registration error", error);
    });
    const url2 = 'http://localhost:3001/project/freelancers/' + history.location.state.projectId;
    axios.get(
      url2
    ).then(response => {
      this.setState({ freelancers: response.data })
    }).catch(error => {
      console.log(error.data);
      console.log("Error", error);
    });
  }

  async handleOnClick(e) {
    e.preventDefault();
    const key = e.currentTarget.dataset.key;
    const value = e.target.value;
    await this.setState({ taskId: key });
    if (value === 'delete') {
      this.handleDelete();
    } else {
      history.push('/TaskPage', this.state);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <ProjectDescription project={this.state.project} newstate={this.state}/>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h4 className="mb-4">Freelancers</h4>
            <FreelancersList freelancers={this.state.freelancers}/>
          </div>
          <div className="col-6">
            <h4 className="mb-4">Tasks</h4>
            <TasksList onClick={this.handleOnClick} tasks={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}
