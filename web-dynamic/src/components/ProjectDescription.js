import React from 'react';
import history from '../history';

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
      <button className="btn btn-info" value="Projects" onClick={this.handleOnClick}>New Task</button>
    )
  }
}

class ProjectDescription extends React.Component {
  render() {
    const active = this.props.project.status;
    let btn = "";

    if (active === true && history.location.pathname === "/ProjectPage" && history.location.state.user === "manager") {
        btn = <NewTaskBtn newstate={this.props.newstate} />;
    }
    return (
        <div className="row">
          <div className="col-10">
            <h3> {this.props.project.name}</h3>
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
            {btn}
          </div>
        </div>
    )
  }
}

export default ProjectDescription;