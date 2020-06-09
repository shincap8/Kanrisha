import React from 'react';
import axios from 'axios';
import history from '../history';


export class CommentsForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            subject: '',
            taskId: history.location.state.taskId,
            description: '',
            idOwner: this.props.idowner,
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

    handleSubmit = async (e) => {
        e.preventDefault();
        const { subject, taskId, description, idOwner, profileType } = this.state;
        await axios.post(
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
        this.props.commentsList();
        this.setState({
            subject: '',
            description: ''
        })
    };


    render () {
        return (
            <div className="col-md-12 mt-3">
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
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
                        <textarea
                            onChange={this.handleChange}
                            className="form-control"
                            name="description"
                            placeholder="Enter description"
                            value={this.state.description}
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

export default CommentsForm;