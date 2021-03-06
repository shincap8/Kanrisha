/*
This code below is the Project view where the manager or freelancer
can see all the info and the tasks related to the project clicked
along with the current freelancer assigned to it (if you are a manager)
we use three classes here TasksList, FreelancersList and ProjectDescription
*/
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
        freelancerId: history.location.state.freelancerId,
        user: history.location.state.user,
      }
    } else {
      this.state = {
        data: [],
        project: {},
        freelancers: [],
        managerId: history.location.state.managerId,
        projectId: history.location.state.projectId,
        freelancerId: history.location.state.freelancerId,
        user: history.location.state.user,
      };
    }

    this.handleOnClick = this.handleOnClick.bind(this);
    this.loadProject = this.loadProject.bind(this);
  }

  componentDidMount(){
    if (!history.location.state.previousPage) {
      this.loadProject();
    }
    if (this.state.user === 'manager') {
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
          console.log("Error", error);
        });
    } else {
      const url1 = 'http://localhost:3001/task/' + history.location.state.projectId + '/' + history.location.state.freelancerId;
      axios.get(
        url1
      ).then(response => {
        this.setState({ data: response.data })
      }).catch(error => {
        console.log("registration error", error);
      });
    }
  }

  async loadProject () {
    const url1 = 'http://localhost:3001/project/' + history.location.state.projectId;
    await axios.get(
      url1
    ).then(response => {
      this.setState({ project: response.data })
    }).catch(error => {
      console.log("registration error", error);
    });
  }

  async handleOnClick(e) {
    e.preventDefault();
    const key = e.currentTarget.dataset.key;
    const id = e.currentTarget.dataset.id
    await this.setState({ taskId: key, taskType: id});
    history.push('/TaskPage', this.state);
  }

  render() {
    const user = this.state.user;
    let freelancer_list = "";
    let classN = "col-12";

    if (user === "manager") {
      freelancer_list = <div className="col-sm-6 col-12">
                          <h5 className="mb-4">Freelancers</h5>
                          <FreelancersList freelancers={this.state.freelancers} />
                        </div>
      classN = "col-sm-6 col-12";
    }

    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <ProjectDescription project={this.state.project} newstate={this.state} load={this.loadProject}/>
          </div>
        </div>
        <div className="row mt-4">
          {freelancer_list}
          <div className={classN}>
            <h5 className="mb-4">Tasks</h5>
            <TasksList onClick={this.handleOnClick} tasks={this.state.data} user={this.state.user}/>
          </div>
        </div>
      </div>
    );
  }
}
