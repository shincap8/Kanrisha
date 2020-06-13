import React from 'react';
import history from '../history';
import axios from 'axios';
import ProjectAdvance from './ProjectAdvance';

class NewTaskBtn extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();

    history.push('/NewTask', this.props.newstate);
  }
  render() {
    return (
      <button className='btn btn-info' value='Projects' onClick={this.handleOnClick}>New Task</button>
    )
  }
}

class ChangeStatus extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();

    axios.put(
      'http://localhost:3001/changestatus/' + history.location.state.projectId
      ).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    this.props.load();
  }
  render() {
    let text = "Close";
    if (!this.props.status) {
      text = "Open";
    }
    return (
      <button className='btn btn-info' value='Projects' onClick={this.handleOnClick}>{text}</button>
    )
  }
}

class ProjectDescription extends React.Component {
  render() {
    const active = this.props.project.status;
    let NewTaskbtn = "";
    let advance = "";
    let changeStsbtn = "";
    let cls = "row description mb3";

    if (history.location.state.user === "manager") {
      changeStsbtn = <ChangeStatus status={this.props.project.status} id={this.props.project._id} load={this.props.load}/>
    }
    if (active && history.location.pathname === "/ProjectPage" && history.location.state.user === "manager") {
        NewTaskbtn = <NewTaskBtn newstate={this.props.newstate} />;
    }
    if (history.location.state.user === "manager") {
    advance = <h3><ProjectAdvance projectId={this.props.project._id}/>%</h3>;
    }
    if (history.location.pathname === "/TaskPage") {
      cls = "row";
    }
    return (
        <div className={cls}>
          <div className="col-10">
            <div className="row">
            <div className="col-4">
              <h3>{this.props.project.name}</h3>
            </div>
            <div className="col-4">
              {advance}
            </div>
            <div className="col-4">
              {changeStsbtn}
            </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <p className="text-wrap"><strong>Deadline: </strong>{(typeof (this.props.project.deadline) === 'object') ? this.props.project.deadline.toDateString() : this.props.project.deadline}</p>
              </div>
              <div className="col-6">
                <p className="text-wrap"><strong>Description: </strong> {this.props.project.description}</p>
              </div>
            </div>
          </div>
          <div className="col-2">
            {NewTaskbtn}
          </div>
        </div>
    )
  }
}

export default ProjectDescription;
