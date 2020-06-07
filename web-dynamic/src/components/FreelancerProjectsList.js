import React from 'react';


class FreelancerProjectListItem extends React.Component {
  render() {
    return (
        <div className="card" >
            <div className="card-body">
                <div className="card-header">
                    <h3>{ this.props.project.name }</h3>
                </div>
                <div className="card-body">
                    <p className="card-text">{ this.props.project.description}</p>
                    <p className="card-text">{this.props.project.deadline.toString()}</p>
                    {/* <p className="card-text">Percentage done of the task:{this.props.project.advanced}</p> */}
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
  }
}


export class FreelancerProjectsList extends React.Component {
    render() {
        return (
          <div className="FreelancerProjectsList">
            <div className="container">
              <h1>Freelancer Projects</h1>
              <div className="row">
                  {this.props.projects.map((project, i) => {
                  return (
                    <div className="col-md-6" key={i}>
                      <FreelancerProjectListItem project={ project } />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }
    }

export default FreelancerProjectsList;