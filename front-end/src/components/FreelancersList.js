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
            {advance}
            <p className="card-text">Contact: {this.props.freelancer.email}</p>
            <p className="card-text">Projects:</p>
            <FreelancerProjects id={this.props.freelancer._id}/>
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
                <div className="col-6" key={freelancer._id}>
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