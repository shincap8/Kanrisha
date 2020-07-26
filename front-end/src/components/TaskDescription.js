/*
This code below is for displaying the information about a task
*/
import React from 'react';
import TaskAdvance from './TaskAdvance';

class TaskDescription extends React.Component {
  render() {
    return (
      <div className="row description">
        <div className="col-sm-10 col-12">
          <div className="row">
            <div className="col-6 col-sm-4">
              <h5> {this.props.task.name}</h5>
            </div>
            <div className="col-6 col-sm-4">
              <h5>Done <TaskAdvance taskId={this.props.task._id} value={this.props.value}/>%</h5>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-5 col-12">
              <p className="text-wrap"><strong>Deadline: </strong>{(typeof (this.props.task.deadline) === 'object') ? this.props.task.deadline.toDateString() : this.props.task.deadline}</p>
            </div>
            <div className="col-sm-7 col-12">
              <p className="text-wrap"><strong>Description: </strong> {this.props.task.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskDescription;
