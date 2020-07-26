/*
The code below has 2 classes.
@FreelancerListItem Receives information from a freelancer as a parameter.
Returns the style of a freelancer in a list.
@FreelancersList Receives information from freelancers as a parameter.
Return the list of freelancers.
*/
import React from 'react';
import Anonymous from '../img/anonymous.png';
import TaskAdvance from './TaskAdvance';
import history from '../history';
import { FreelancerProjects } from './FreelancerProjects';

class FreelancerListItem extends React.Component {
  render() {
    let advance = "";
    if (history.location.pathname === "/TaskPage") {
      advance = <p className="card-text" >Percentage completed: {<TaskAdvance taskId={history.location.state.taskId} type={this.props.tasktype} user="freelancer" id={this.props.freelancer._id}/>}%</p>
    }
    return (
      <div>
        <div className="row">
          <div className="col-4 img-free">
            <img className="card-img mt-2" src={Anonymous} alt="User" />
          </div>
          <div className="col-7 mt-2">
            <h4 className="card-title">{this.props.freelancer.name}</h4>
            <p className="card-text">{this.props.freelancer.profession}</p>
          </div>
        </div>
        <div className="row">
          <div className="card-body ml-1">
            {advance}
            <p className="card-text">Contact: {this.props.freelancer.email}</p>
            <p className="card-text">Projects:</p>
            <FreelancerProjects id={this.props.freelancer._id} className="freelancer"/>
            {/*<button className="btn btn-primary mt-1 ml-4 mb-2">Delete</button>*/}
          </div>
        </div>
      </div>
    );
  }
}

class FreelancersList extends React.Component {
  render() {
    let nofreelancer = "";
    if (this.props.freelancers.length === 0) {
      nofreelancer = <h5 className="text-muted">There are no freelancers assigned</h5>
    }
    return (
      <React.Fragment>
        <div className="card-deck">
            {this.props.freelancers.map(freelancer => {
              return (
                <div className="col-sm-6 col-12" key={freelancer._id}>
                  <div className="card mb-4">
                    <FreelancerListItem freelancer={ freelancer } tasktype={this.props.tasktype}/>
                  </div>
                </div>
              );
            })}
            {nofreelancer}
        </div>
      </React.Fragment>
    );
  }
}

export default FreelancersList;