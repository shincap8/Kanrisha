import React from 'react';
import { Link } from 'react-router-dom';
import history from '../history';


class ProjectListItem extends React.Component {
  render() {
    return (
      <div className="card" >
        <div className="card-body">
          <div className="card-header">
            <h3>{ this.props.project.name }</h3>
            </div>
          <div className="card-body">
            <p className="card-text">{ this.props.project.description}</p>
            <p className="card-text">{this.props.project.deadline}</p>
            {/* <p>Percentage completed {project.percentage}%</p> */}
            <button onClick>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

class ProjectsList extends React.Component {
  render() {
    return (
      <div className="ProjectList">
        <div className="card-deck">
          {this.props.projects.map(project => {
            return (
              <div className="col-md-4 mb-4" data-key={project._id} onClick={this.props.onClick}>
                <ProjectListItem project={project}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProjectsList;
