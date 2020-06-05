import React from 'react';


class FreelancerItem extends React.Component {
  render() {
    return (
        <div className="card" >
            <div className="card-body">
                <div className="card-header">
                    <h3>{ this.props.freelancer.name }</h3>
                </div>
                <div className="card-body">
                    <p className="card-text">{ this.props.freelancer.projects}</p>
                    <p className="card-text">{this.props.freelancer.deadline}</p>
                    {/* <p>Percentage completed {project.percentage}%</p> */}
                    <button>Delete</button>
                </div>
            </div>
        </div>

    );
  }
}

export class FreelancerList extends React.Component {
  render() {
    return (
      <div className="FreelancerList">
        <div className="row">
          {this.props.freelancers.map(freelancer => {
            return (
              <div className="col-md-4" key={freelancer.id}>
                <FreelancerItem freelancer={freelancer} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
