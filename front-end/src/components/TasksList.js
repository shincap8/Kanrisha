import React from 'react';
import TaskAdvance from './TaskAdvance';


class TaskListItem extends React.Component {
  render() {
    return (
        <div className="card task text-white" >
          <div className="card-header">
            <h4>{this.props.task.name}</h4>
          </div>
          <div className="card-body">
            <p className="card-text t-description">{ this.props.task.description}</p>
            <p className="card-text">{(typeof (this.props.task.deadline) === 'object') ? this.props.task.deadline.toDateString() : this.props.task.deadline}</p>
            <p className="card-text">Done {<TaskAdvance taskId={this.props.task._id} type={this.props.task.tasktype}/>}%</p>
            {/*<button className="btn btn-light" value="delete">Delete</button>*/}
          </div>
        </div>

    );
  }
}

class TasksList extends React.Component {
  render() {
    let notask = "";
    let classM = "col-md-4 mb-4"
    if (this.props.tasks.length === 0) {
      notask = <h5 className="text-muted">There are no task assigned</h5>
    } 
    if (this.props.user === "manager") {
      classM = "col-md-6 mb-4";
    }
    return (
      <div className="TaskList">
        <div className="card-deck">
          {this.props.tasks.map(task => {
            return (
              <div className={classM} key={task._id} data-key={task._id} data-id={task.tasktype} onClick={this.props.onClick}>
                <TaskListItem task={task} />
              </div>
            );
          })}
          {notask}
        </div>
      </div>
    );
  }
}

export default TasksList;
