import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';


export class ProjectForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            projectName: '',
            description: '',
            deadline: new Date(),
            tasksId: 'default',
            managerId: "5ed3d2a1544f80305c83d244",
            freelancersId: 'default',
            status: true,
            advanced: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        //En el setState vamos a guardar la información que ingresa a ese campo
        this.setState({
            [e.target.name]: e.target.value
        })
        //console.log(this.state);
    }

    // handleClick = e => {
    //     console.log('Button was clicked');
    // };

    handleSubmit = e => {
        e.preventDefault();
        const { projectName, description, deadline, tasksId, managerId, freelancersId, status, advanced } = this.state;
        axios.post(
            'http://localhost:3002/new-project',
            {
                name: projectName,
                description: description,
                deadline: deadline,
                tasksId: tasksId,
                managerId: managerId,
                freelancersId: freelancersId,
                status: status,
                advanced: advanced
            }).then(response => {
                console.log(response);
            }).catch(error => {
                console.log("error" + error);
            })
        // this.props.onAddProject(this.state);
        // console.log('Form was submitted');
        // console.log(this.state);
    };

    onChangeDate = deadline => {
        this.setState({deadline});
        console.log(deadline);
        console.log(deadline.toString());
        console.log(deadline.toGMTString());
        console.log(deadline.toDateString());
    }

    render () {
        return (
            <div className="col-md-6 offset-md-3">
                <h1>New Project</h1>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Project Name</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            name="projectName"
                            placeholder="Enter Project Name"
                            value={this.state.projectName}
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
                            value={this.state.desciption}
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
                        />
                    </div>
                    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block" >
                        Save
                    </button>
                </form>
            </div>
        );
    }
}
