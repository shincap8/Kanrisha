import React from 'react';
import axios from 'axios';
import history from '../history';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';


export class Advanced extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            freelancerId: history.location.state.freelancerId,
            taskId: history.location.state.taskId,
            value: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeOption = this.onChangeOption.bind(this);
        this.setValue = this.setValue.bind(this);
        console.log(this.state.value);
    }

    setValue (e) {
        this.setState({
            value: Number(e.target.value)
        })

    }

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.value);
    }

    onChangeOption = (event) => {
        if (event.target.checked) {
            console.log('Entra');
            this.setState({
                value: 100,
            })
        };
        console.log(event.target.value);
        console.log(this.state.value);
    };

    handleSubmit = e => {
        e.preventDefault();
        const { freelancerId, taskId, value } = this.state;
        axios.put(
            'http://localhost:3001/modifyadvance',
            {
                freelancerId: freelancerId,
                taskid: taskId,
                value: value
            }).then(response => {
                console.log(response);
            }).catch(error => {
                console.log("error" + error);
            })
            console.log(value);
    };


    render () {
        let type_render = '';
        if (this.props.type === 0) {
            type_render = <div className="">
                                <label className="col-md-4">
                                    <input type="checkbox"
                                    name="value"
                                    onChange={this.onChangeOption} />
                                    Done
                                </label>
                            </div>
        } else if (this.props.type === 2) {
            console.log("entre")
            type_render =  <div className="form-group">
                                <div className="row ml-0">
                                    <label className="mr-2">Update</label>
                                    <div>
                                        <input
                                        type="number"
                                        onChange={this.handleChange}
                                        min={0}
                                        name="value"
                                        placeholder="Enter a number"
                                        value={this.state.value}
                                        />
                                    </div>
                                </div>
                            </div>
        } else {
            type_render = <div className="form-group">
                            <label className="mr-2 font-weight-bold">Update</label>
                            <div className="col-8 md-4">
                                <RangeSlider
                                    value={this.state.value}
                                    onChange={this.setValue}
                                    tooltip='on'
                                />
                            </div>
                        </div>
        }
        return (
            <div className="col-6">
                <h5>Task advance</h5>
                <h6 className="mt-5">Please submit your progress</h6>
                <form onSubmit={this.onSubmit}>
                    <div className="mt-5">
                        {type_render}
                    </div>

                    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary" >
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default Advanced;