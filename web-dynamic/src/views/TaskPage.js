import React from 'react';
import history from '../history';
import axios from 'axios';
import AddFreelancers from '../components/AddFreelancers';
import ProjectDescription from '../components/ProjectDescription'
import TaskDescription from '../components/TaskDescription';
import FreelancersList from '../components/FreelancersList';
import Comments from '../components/Comments';
import Advance from '../components/Advance';

export class TaskPage extends React.Component {
  constructor (props) {
    super (props);
    if (history.location.state.previousPage) {
      this.state = {
        comments: [],
        freelancers: [],
        project: history.location.state.project,
        task: history.location.state.task,
        managerId: history.location.state.managerId,
        projectId: history.location.state.projectId,
        taskId: history.location.state.taskId,
        user: history.location.state.user,
        freelancerId: history.location.state.freelancerId,
      }
    } else {
      this.state = {
        comments: [],
        task: {},
        project: history.location.state.project,
        freelancers: [],
        taskId: history.location.state.taskId,
        managerId: history.location.state.managerId,
        projectId: history.location.state.projectId,
        user: history.location.state.user,
        freelancerId: history.location.state.freelancerId,
      };
    }

    this.getFreelancers = this.getFreelancers.bind(this);
  }
  
  componentDidMount () {
    if (!history.location.state.previousPage) {
      const url1 = 'http://localhost:3001/task/' + history.location.state.taskId;
      axios.get(
        url1
        ).then(response => {
          this.setState({ task: response.data })
        }).catch(error => {
          console.log("registration error", error);
        });
    }
    this.getFreelancers();
  }

  getFreelancers () {
    const url2 = 'http://localhost:3001/task/freelancers/' + history.location.state.taskId;
    axios.get(
      url2
    ).then(response => {
      this.setState({ freelancers: response.data })
    }).catch(error => {
      console.log("registration error", error);
    });
  }

  render() {
    const user = this.state.user;
    let freelancer_list = "";
    let add_freelancer = "";
    let idowner;
    let advance = "";

    if (user === "manager") {
      freelancer_list = <div className="col-6">
                          <h5>Freelancers</h5>
                          <FreelancersList freelancers={this.state.freelancers}/>
                        </div>;
      add_freelancer = <div className="col-2">
        <AddFreelancers taskId={this.state.taskId} projectId={this.state.projectId} refresh={this.getFreelancers}/>
                      </div>;
      idowner = this.state.managerId;
    } else {
      advance = <Advance type={this.state.task.tasktype}/>
      idowner = this.state.freelancerId;
    }
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-10">
            <ProjectDescription project={this.state.project} newstate={this.state}/>
          </div>
          {add_freelancer}
        </div>
        <h4>Task</h4>
        <div className="row mt-3">
          <div className="col">
            <TaskDescription task={this.state.task} />
          </div>
        </div>
        <div className="row mt-3">
          {freelancer_list}
          {advance}
          <div className="col-6">
            <h5>Comments</h5>
            <Comments idowner={idowner}/>
          </div>
        </div>
      </div>
    );
  }
}