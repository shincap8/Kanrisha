import React from 'react';


class TaskListItem extends React.Component {
  render() {
    return (
        <div className="card text-white bg-info" >
          <div className="card-header">
            <h4>{this.props.task.name}</h4>
          </div>
          <div className="card-body">
            <p className="card-text">{ this.props.task.description}</p>
            <p className="card-text">{this.props.task.deadline}</p>
            <p className="card-text">Percentage done of the task:</p>
            {/* <p>Percentage completed {project.percentage}%</p> */}
            <button className="btn btn-light">Delete</button>
          </div>
        </div>

    );
  }
}

class TasksList extends React.Component {
  render() {
    console.log(this.props.tasks)
    return (
      <div className="TaskList">
        <div className="card-deck">
          {this.props.tasks.map(task => {
            return (
              <div className="col-md-6 mb-4" key={task._id}>
                <TaskListItem task={task} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TasksList;
