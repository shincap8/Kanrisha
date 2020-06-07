import React from 'react';
import history from '../history';
import AddFreelancers from './AddFreelancers';

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
      }
    } else {
      this.state = {
        comments: [],
        task: {},
        project: history.location.state.project,
        freelancers: [],
        managerId: history.location.state.managerId,
        projecId: history.location.state.projectId,
      };
    }
  }
  
  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <div className="row">
              <div className="col-8">
                <h3> {this.state.project.name}</h3>
              </div>
              <div className="col-2">
                <AddFreelancers />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <p className="text-wrap"><strong>Deadline: </strong>{(typeof (this.state.project.deadline) === 'object') ? this.state.project.deadline.toDateString() : this.state.project.deadline}</p>
              </div>
              <div className="col-6">
                <p className="text-wrap"><strong>Description: </strong> {this.state.project.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">

        </div>
      </div>
    );
  }
}