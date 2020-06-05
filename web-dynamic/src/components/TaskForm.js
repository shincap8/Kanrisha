import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export class TaskForm extends React.Component {
  render () {
    return (
      <form onSubmit={this.onSubmit}>

        <div className="form-group">
          <label>Task Name</label>
          <input
            onChange={this.props.onChange}
            type="text"
            className="form-control"
            name="taskName"
            placeholder="Enter Task Name"
            value={this.props.task.taskName}
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
            value={this.props.task.description}
            required
            />
        </div>

        <div className="form-group ">
          <label>Deadline</label>
          <DatePicker
            onChange={this.props.onChangeDate}
            className="form-control"
            name="deadline"
            selected={this.props.task.deadline}
            value={this.props.task.deadline}
            required
          />
        </div>

        <div className="form-group">
          <label>Choose a way to keep track on the task <br/> </label>
          <div>
            <label className="radio-inline col-md-4">
              <input type="radio"
              name="tasktype"
              value="0"
              checked={this.props.task.tasktype === "0"}
              onChange={this.props.onChangeOption} />
              Boolean
            </label>


            <label className="radio-inline col-md-4">
              <input type="radio"
              name="tasktype"
              value="1"
              checked={this.props.task.tasktype === "1"}
              onChange={this.props.onChangeOption} />
              Percentage
            </label>

            <label className="radio-inline col-md-4">
              <input type="radio"
              name="tasktype"
              value="2"
              checked={this.props.task.tasktype === "2"}
              onChange={this.props.onChangeOption} />
              Amount
            </label>

          </div>
        </div>

        <div className="form-group">
          <label>The weight of this task in the project is: <br/></label>
          <div>
            <input
            type="number"
            onChange={this.props.onChange}
            min="0"
            max="100"
            name="weight"
            value={this.props.task.weight}
            required
              />
          </div>
        </div>

        <div className="form-group">
          <label>If you choose amount please fill in the Goal <br/></label>
          <div>
            <input
            disabled={(this.props.task.tasktype === "2") ? "" : "disabled" }
            type="number"
            onChange={this.props.onChange}
            min="0"
            name="amount"
            value={this.props.task.amount}
            />
          </div>
        </div>

        <button type="submit" onClick={this.props.onSubmit} className="btn btn-info btn-block col-8 offset-2 mb-2" >
          Save
        </button>
      </form>
    );
  }
}