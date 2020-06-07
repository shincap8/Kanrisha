import React from 'react';
import axios from 'axios';
import FreelancerTasksList from '../components/FreelancerTasksList';


export class FreelancerTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          projects: [],
          tasks: [],
        };
        console.log(this.state.tasks);
    }

    componentDidMount () {
      const url = 'http://localhost:3001/task/5edc561ee5fbba03044273ce/5edc5501e5fbba03044273cd'; // projectId/freelancerId
      axios.get(
        url
      ).then(response => {
        this.setState({ tasks: response.data })
        console.log(this.state.tasks);
        console.log(response.data);
      }).catch(error => {
        console.log("registration error", error);
      });
    }

    render () {
      return (
      <div className="container">
        <div className="row mt-3">
          {/* <div className="col">
            <h3> {this.state.project.name }</h3>
            <div className="row mt-4">
              <div className="col-6">
                <p className="text-wrap"><strong>Deadline: </strong>{(typeof(this.state.project.deadline) === 'object') ? this.state.project.deadline.toDateString() : this.state.project.deadline }</p>
              </div>
              <div className="col-6">
                <p className="text-wrap"><strong>Description: </strong> { this.state.project.description }</p>
              </div>
            </div>
          </div> */}
          <div className="col-8">
            <h3 className="mb-4">Tasks</h3>
            <FreelancerTasksList tasks={this.state.tasks} />
          </div>
        </div>
      </div>
        )
    }
}