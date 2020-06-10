import React from 'react';

class TaskDescription extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-10">
          <div className="row">
            <div className="col-4">
              <h5> {this.props.task.name}</h5>
            </div>
            <div className="col-4">
              <h5>Done {this.props.task.amount}</h5>
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
