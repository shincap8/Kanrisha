import React from 'react';
import TaskAdvance from './TaskAdvance';

class TaskDescription extends React.Component {
  render() {
    return (
      <div className="row description">
        <div className="col-10">
          <div className="row">
            <div className="col-4">
              <h5> {this.props.task.name}</h5>
            </div>
            <div className="col-4">
              <h5>Done <TaskAdvance taskId={this.props.task._id} value={this.props.value}/>%</h5>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-5">
              <p className="text-wrap"><strong>Deadline: </strong>{(typeof (this.props.task.deadline) === 'object') ? this.props.task.deadline.toDateString() : this.props.task.deadline}</p>
            </div>
            <div className="col-7">
              <p className="text-wrap"><strong>Description: </strong> {this.props.task.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskDescription;
