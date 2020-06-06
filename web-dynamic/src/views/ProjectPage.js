import React from 'react';
import axios from 'axios';
import history from '../history';
import TasksList from '../components/TasksList';
import FreelancersList from '../components/FreelancersList';
import { Link } from 'react-router-dom';

class NewTaskBtn extends React.Component {
  render () {
    return (
      <Link to={{ pathname: "/NewTask", state: history.location.state }}>
        <li className="nav-item nav-link" value="Projects" data-toggle="dropdown">New Task</li>
      </Link>
    )
  }
}

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
  }


  componentWillMount() {
    if (!history.location.state.previousPage) {
      const url = 'http://localhost:3001/project/' + history.location.state.projectId;
      axios.get(
        url
      ).then(response => {
        this.setState({ project: response.data })
      }).catch(error => {
        console.log("registration error", error);
      });
    }
  }

  componentDidMount(){
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

  render() {
    const active = this.state.project.status;
    let btn;

    if (active === true) {
      btn = < NewTaskBtn />;
    }
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h3> {this.state.project.name }</h3>
            <div className="row mt-4">
              <div className="col-6">
                <p className="text-wrap"><strong>Deadline: </strong>{(typeof(this.state.project.deadline) === 'object') ? this.state.project.deadline.toDateString() : this.state.project.deadline }</p>
              </div>
              <div className="col-6">
                <p className="text-wrap"><strong>Description: </strong> { this.state.project.description }</p>
              </div>
            </div>  
          </div>
          {btn}
        </div>
        <div className="row">
          <div className="col-6">
            <h3 className="mb-4">Freelancers</h3>
            <FreelancersList freelancers={this.state.freelancers}/>
          </div>
          <div className="col-6">
            <h3 className="mb-4">Tasks</h3>
            <TasksList tasks={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}
