import React from 'react';
import history from '../history';
import axios from 'axios';

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
      'http://localhost:3001/changestatus/' + this.props.id
      ).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    this.props.load();
  }
  render() {
    let text = "Close";
    console.log(this.props.status)
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

    if (history.location.state.user === "manager") {
      changeStsbtn = <ChangeStatus status={this.props.project.status} id={this.props.project._id} load={this.props.load}/>
    }
    if (active && history.location.pathname === "/ProjectPage" && history.location.state.user === "manager") {
        NewTaskbtn = <NewTaskBtn newstate={this.props.newstate} />;
    }
    if (history.location.state.user === "manager") {
      advance = <h3>{this.props.project.advanced} %</h3>;
    }
    return (
        <div className="row">
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