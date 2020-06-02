import React from 'react';


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
                    <button>Delete</button>
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
        <div className="row">
          {this.props.projects.map(project => {
            return (
              <div className="col-md-4" key={project.id}>
                <ProjectListItem project={project} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProjectsList;
