import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export class ProjectForm extends React.Component {
  render () {
    return (
      <div className="col-md-6 offset-md-3">

      <form onSubmit={this.props.onSubmit}>

        <div className="form-group">
          <label>Project Name</label>
          <input
            onChange={this.props.onChange}
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter Project Name"
            value={this.props.project.name}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            onChange={this.props.onChange}
            className="form-control"
            name="description"
            placeholder="Enter description"
            value={this.props.project.description}
            required
          />
        </div>

        <div className="form-group ">
          <label>Deadline</label>
          <DatePicker
            onChange={this.props.onChangeDate}
            className="form-control"
            name="deadline"
            selected={this.props.project.deadline}
            value={this.props.project.deadline}
          />
        </div>
        <button type="submit" className="btn btn-info btn-block" >
          Save
        </button>
      </form>
      </div>
    );
  }
}
