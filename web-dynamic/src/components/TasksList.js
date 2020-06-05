import React from 'react';


class TaskListItem extends React.Component {
  render() {
    return (
        <div className="card" >
            <div className="card-body">
                <div className="card-header">
                    <h3>{ this.props.task.name }</h3>
                </div>
                <div className="card-body">
                    <p className="card-text">{ this.props.task.description}</p>
                    <p className="card-text">{this.props.task.deadline}</p>
                    <p className="card-text">Percentage done of the task:</p>
                    {/* <p>Percentage completed {project.percentage}%</p> */}
                    <button>Delete</button>
                </div>
            </div>
        </div>

    );
  }
}

class TasksList extends React.Component {
  render() {
    return (
      <div className="TaskList">
        <div className="card-deck">
          {this.props.tasks.map(task => {
            return (
              <div className="col-md-4 mb-4" key={task.id}>
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
