import React from 'react';
import Anonymous from '../img/anonymous.png';
//import { FreelancerListItem } from './FreelancerListItem';//
//import axios from 'axios';

class FreelancerListItem extends React.Component {
  render() {
    return (
      <div className="card freelancer-item pr-4" >
        <div className="row">
          <img className="card-img-top col-md-4 mt-2 ml-3" src={Anonymous} alt="User" />
          <h4 className="col-md-7 mt-4 pl-1">{this.props.freelancer.name}</h4>
        </div>
        <p className="card-text mt-4 ml-4">{this.props.freelancer.profession}</p>
        <p className="card-text mt-1 ml-4">Task Description</p>
        <p className="card-text mt-1 ml-4" >Percentage completed: {this.props.freelancer.advancedId}%</p>
        <p className="card-text mt-1 ml-4">Contact: {this.props.freelancer.email}</p>
        <button className="btn btn-primary mt-1 ml-4 mb-2">Delete</button>
      </div>
    );
  }
}

class FreelancersList extends React.Component {
  render() {
    return (
      <div className="freelancer-list">
        <div className="card-deck">
          {this.props.freelancers.map(freelancer => {
            return (
              <div className="col-md-6 mb-4" key={freelancer._id}>
                <FreelancerListItem freelancer={ freelancer } />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FreelancersList;