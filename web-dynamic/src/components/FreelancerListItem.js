import React from 'react';
import Anonymous from '../img/anonymous.png';

export class FreelancerListItem extends React.Component {
    render() {
      return (
          <div className="card mt-4" >
            <div className="freelancerListItem">
                  <div className="row">
                      <img className="card-img-top col-md-2 mt-2 ml-3" src={ Anonymous } alt="User" />
                      <h3 className="col-md-6 mt-4">{ this.props.freelancer.name }</h3>
                   </div>
                   <p className="card-text mt-4 ml-4">{ this.props.freelancer.profession}</p>
                   <p className="card-text mt-1 ml-4">Task Description</p>
                   <p className="card-text mt-1 ml-4" >Percentage completed: { this.props.freelancer.advancedId }%</p>
                   <p className="card-text mt-1 ml-4">Contact: { this.props.freelancer.email}</p>
                   <button className="btn btn-primary mt-1 ml-4 mb-2">Delete</button>
            </div>
          </div>
      );
    }
  }