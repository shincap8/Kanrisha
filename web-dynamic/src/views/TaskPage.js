import React from 'react';
import history from '../history';
import axios from 'axios';
import AddFreelancers from '../components/AddFreelancers';
import ProjectDescription from '../components/ProjectDescription'
import TaskDescription from '../components/TaskDescription';
import FreelancersList from '../components/FreelancersList';
//import Comments from '../components/Comments';

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
    const url2 = 'http://localhost:3001/task/freelancers/' + history.location.state.taskId;
    axios.get(
      url2
    ).then(response => {
      this.setState({ freelancers: response.data })
    }).catch(error => {
      console.log("registration error", error);
    });
    const url3 = 'http://localhost:3001/comments-task/' + history.location.state.taskId;
    axios.get(
      url3
    ).then(response => {
      this.setState({ comments: response.data })
    }).catch(error => {
      console.log(error.data);
      console.log("Error", error);
    });
  }
  render() {
    const user = this.state.user;
    let freelancer_list = "";
    let add_freelancer = "";

    if (user === "manager") {
      freelancer_list = <div className="col-6">
                          <h5>Freelancers</h5>
                          <FreelancersList freelancers={this.state.freelancers} />
                        </div>;
      add_freelancer = <div className="col-2">
                        <AddFreelancers taskId={this.state.taskId} projectId={this.state.projectId}/>
                      </div>;
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
          <div className="col-6">
            <h5>Comments</h5>
          </div>
        </div>
      </div>
    );
  }
}