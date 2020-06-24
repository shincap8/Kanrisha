import React from 'react';
/*
The code below has 2 classes.
@FreelancerTasksListItem Receive as parameter information of a freelancer task.
Returns the style of a freelancer task in a list.
@FreelancerTasksList Receives information about the tasks of a freelancer as a parameter.
Returns the list of tasks for a freelancer.
*/

export class FreelancerTasksListItem extends React.Component {
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
                    <p className="card-text">Percentage done of the task:{this.props.task.advanced}</p>
                    {/* <p>Percentage completed {project.percentage}%</p> */}
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
  }
}


export class FreelancerTasksList extends React.Component {
    render() {
      console.log(this.props.tasks);
        return (
          <div className="FreelancerTasksList">
            <div className="container">
              <h1>Tasks</h1>
              <div className="row">
                  {this.props.tasks.map((task, i) => {
                  return (
                    <div className="col-md-6" key={i}>
                      <FreelancerTasksListItem task={ task } />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }
    }

export default FreelancerTasksList;