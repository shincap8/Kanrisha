import React from 'react';
import Anonymous from '../img/anonymous.png';
import { FreelancerProjects } from './FreelancerProjects';

class FreelancerListItem extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 px-auto">
            <img className="card-img mt-2 mx-auto ml-5" src={Anonymous} alt="User" />
          </div>
          <div className="col-md-8 mt-2">
            <h4 className="card-title">{this.props.freelancer.name}</h4>
            <p className="card-text">{this.props.freelancer.profession}</p>
          </div>
        </div>
        <div className="row">
          <div className="card-body ml-1">
            <p className="card-text">Task Description</p>
            <p className="card-text" >Percentage completed: {this.props.freelancer.advancedId}%</p>
            <p className="card-text">Contact: {this.props.freelancer.email}</p>
            <p className="card-text">Projects:</p>
            <FreelancerProjects id={this.props.freelancer._id}/>
            <button className="btn btn-primary mt-1 ml-4 mb-2">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

class FreelancersList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card-deck">
            {this.props.freelancers.map(freelancer => {
              return (
                <div className="card mb-4" key={freelancer._id}>
                  <FreelancerListItem freelancer={ freelancer } />
                </div>
              );
            })}
        </div>
      </React.Fragment>
    );
  }
}

export default FreelancersList;