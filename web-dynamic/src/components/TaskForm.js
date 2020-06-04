import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export class TaskForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            taskName: '',
            description: '',
            deadline: new Date(),
            projectId: "5ed6d8c3ec57792448e944b4",
            freelancersId: ["default"],
            commentsId: "default",
            weight: 0,
            tasktype: 0,
            amount: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeOption = this.onChangeOption.bind(this);
    }

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { taskName, description, deadline, projectId, freelancersId, commentsId, weight, tasktype, amount } = this.state; //add deadline
        axios.post(
            'http://localhost:3002/new-task',
            {
                name: taskName,
                description: description,
                deadline: deadline,
                projectId: projectId,
                freelancersId: freelancersId,
                commentsId: commentsId,
                weight: weight,
                tasktype: tasktype,
                amount: amount
            }).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })

    };

    onChangeDate = deadline => {
        this.setState({deadline});
        console.log(deadline);
        console.log(deadline.toString());
        console.log(deadline.toDateString());
    };

    onChangeOption = event => {
        this.setState({
            tasktype: event.target.value
        });
        console.log(event.target.value);
    };

    render () {
        return (
            <div className="col-md-6 offset-md-3">
                <h1>New Task</h1>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Task Name</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            name="taskName"
                            placeholder="Enter Task Name"
                            value={this.state.taskName}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            onChange={this.handleChange}
                            className="form-control"
                            name="description"
                            placeholder="Enter description"
                            value={this.state.description}
                            required
                        />
                    </div>

                    <div className="form-group ">
                        <label>Deadline</label>
                        <DatePicker
                            onChange={this.onChangeDate}
                            className="form-control"
                            name="deadline"
                            selected={this.state.deadline}
                            value={this.state.deadline}
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
                                    checked={this.state.tasktype === "0"}
                                    onChange={this.onChangeOption} />
                                    Boolean
                                </label>


                                <label className="radio-inline col-md-4">
                                    <input type="radio"
                                    name="tasktype"
                                    value="1"
                                    checked={this.state.tasktype === "1"}
                                    onChange={this.onChangeOption} />
                                    Percentage
                                </label>

                                <label className="radio-inline col-md-4">
                                    <input type="radio"
                                    name="tasktype"
                                    value="2"
                                    checked={this.state.tasktype === "2"}
                                    onChange={this.onChangeOption} />
                                    Amount
                                </label>

                        </div>
                    </div>

                    <div className="form-group">
                        <label>The weight of this task in the project is: <br/></label>
                        <div>
                            <input
                            type="number"
                            onChange={this.handleChange}
                            min="0"
                            max="100"
                            name="weight"
                            value={this.state.weight}
                            required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>If you choose amount please fill in the Goal <br/></label>
                        <div>
                            <input
                            disabled={(this.state.tasktype === "2") ? "" : "disabled" }
                            type="number"
                            onChange={this.handleChange}
                            min="0"
                            name="amount"
                            value={this.state.amount}
                            />
                        </div>
                    </div>

                    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block" >
                        Save
                    </button>
                </form>
            </div>
        );
    }
}