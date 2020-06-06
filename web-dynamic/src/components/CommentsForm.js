import React from 'react';
import axios from 'axios';


class Comments extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            subject: '',
            taskId: '5edb0f068bf52440143371f3',
            description: '',
            idOwner: "5ed970442679992498bd33f3",
            profileType: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { subject, taskId, description, idOwner, profileType } = this.state;
        axios.post(
            'http://localhost:3001/createcomment',
            {
                title: subject,
                taskId: taskId,
                description: description,
                idowner: idOwner,
                profiletype: profileType
            }).then(response => {
                console.log(response);
            }).catch(error => {
                console.log("error" + error);
            })
    };


    render () {
        return (
            <div className="col-md-6 offset-md-3">
                <h1>New Comment</h1>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Subject</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            name="subject"
                            placeholder="Enter Subject"
                            value={this.state.subject}
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

                    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block" >
                        Comment
                    </button>
                </form>
            </div>
        );
    }
}

export default Comments;