/*
This code below is the Task view where the manager or freelancer
can see all the info related to the task clicked
both freelaner and manager can read and create new comments
the manager can add freelancers to it and the freelancer
can update its task we use 6 classes here
FreelancersList, ProjectDescription, TaskDescription,
AddFreelancers, Comments and Advance
*/
import React from 'react';
import history from '../history';
import axios from 'axios';
import AddFreelancers from '../components/AddFreelancers';
import ProjectDescription from '../components/ProjectDescription'
import TaskDescription from '../components/TaskDescription';
import FreelancersList from '../components/FreelancersList';
import Comments from '../components/Comments';
import Advance from '../components/Advance';

export class TaskPage extends React.Component {
  constructor (props) {
    super (props);
    if (history.location.state.previousPage) {
      this.state = {
        comments: [],
        freelancers: [],
        project: history.location.state.project,
        task: history.location.state.task,
        managerId: history.location.state.managerId,
        projectId: history.location.state.projectId,
        taskId: history.location.state.taskId,
        user: history.location.state.user,
        freelancerId: history.location.state.freelancerId,
        value : 0,
        advanceTask: 0,
        tasktype: history.location.state.task.tasktype,
      }
    } else {
      this.state = {
        comments: [],
        task: {},
        project: history.location.state.project,
        freelancers: [],
        taskId: history.location.state.taskId,
        managerId: history.location.state.managerId,
        projectId: history.location.state.projectId,
        user: history.location.state.user,
        freelancerId: history.location.state.freelancerId,
        value: 0,
        advanceTask : 0,
        tasktype: history.location.state.tasktype,
      };
    }

    this.getFreelancers = this.getFreelancers.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeOption = this.handleChangeOption.bind(this);
    this.setValue = this.setValue.bind(this);
    this.getadvanceF = this.getAdvanceF.bind(this);
    this.loadProject = this.loadProject.bind(this);
  }
  
  componentDidMount () {
    if (!history.location.state.previousPage) {
      const url1 = 'http://localhost:3001/task/' + history.location.state.taskId;
      axios.get(
        url1
        ).then(response => {
          this.setState({ task: response.data})
        }).catch(error => {
          console.log("registration error", error);
        });
    }
    this.getFreelancers();
    this.getAdvanceF();
  }

  getFreelancers () {
    const url2 = 'http://localhost:3001/task/freelancers/' + history.location.state.taskId;
    axios.get(
      url2
    ).then(response => {
      this.setState({ freelancers: response.data })
    }).catch(error => {
      console.log("registration error", error);
    });
  }

  async getAdvanceF () {
    const url = 'http://localhost:3001/freelancer/task-advance/' + this.state.taskId + '/' + this.state.freelancerId;
    await axios.get(
      url
    ).then(response => {
      this.setState({ advanceTask: response.data });
    }).catch(error => {
      console.log("error", error);
    })
  }

  async loadProject() {
    const url1 = 'http://localhost:3001/project/' + history.location.state.projectId;
    await axios.get(
      url1
    ).then(response => {
      this.setState({ project: response.data })
    }).catch(error => {
      console.log("registration error", error);
    });
  }

  async handleSubmit (e) {
    e.preventDefault();
    const { freelancerId, taskId, value } = this.state;
    await axios.put(
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
    this.getAdvanceF();
  };

  setValue(e) {
    this.setState({
      value: Number(e.target.value)
    })

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChangeOption = (event) => {
    if (event.target.checked) {
      this.setState({
        value: 100,
      })
    };
  };

  render() {
    const active = this.state.project.status;
    const user = this.state.user;
    let freelancer_list = "";
    let add_freelancer = "";
    let idowner;
    let advance = "";

    if (user === "manager") {
      freelancer_list = <div className="col-sm-6 col-12">
                          <h5 className="mb-4">Freelancers</h5>
                          <FreelancersList freelancers={this.state.freelancers} tasktype={this.state.tasktype}/>
                        </div>;
      if (active === true) {
        add_freelancer = <div className="col-sm-2 col-12 mb-2">
                          <AddFreelancers taskId={this.state.taskId} projectId={this.state.projectId} refresh={this.getFreelancers}/>
                        </div>;
      }
      idowner = this.state.managerId;
    } else {
      advance = <Advance type={this.state.task.tasktype} onSubmit={this.handleSubmit} onChange={this.handleChange} onSetValue={this.setValue} onChangeOption={this.handleChangeOption} value={this.state.value} />
      idowner = this.state.freelancerId;
    }
    return (
      <div className="container">
        <div className="row mt-3 description mb-3">
          <div className="col-10">
            <ProjectDescription project={this.state.project} newstate={this.state} load={this.loadProject}/>
          </div>
          {add_freelancer}
        </div>
        <h4>Task</h4>
        <div className="row mt-3">
          <div className="col">
            <TaskDescription task={this.state.task} value={this.state.advanceTask}/>
          </div>
        </div>
        <div className="row mt-4">
          {freelancer_list}
          {advance}
          <div className="col-sm-6 col-12">
            <h5 className="mb-4">Comments</h5>
            <Comments idowner={idowner}/>
          </div>
        </div>
      </div>
    );
  }
}