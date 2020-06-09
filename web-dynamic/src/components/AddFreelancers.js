import React from 'react';
import axios from 'axios';
import ModalFreelancers from './ModalFreelancers';

class AddFreelancers extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      freelancers: [],
      show: false,
      chosen: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    axios.get(
      'http://localhost:3001/all-freelancers/' + this.props.taskId
    ).then(response => {
      this.setState({freelancers: response.data});
    }).catch(error  => {
      console.log(error);
    });
  }

  handleChange (e) {
    this.setState({chosen: []});
    if ((!this.state.chosen.includes(e.target.value)) && e.target.checked) {
      this.state.chosen.push(e.target.value);
    } else if (this.state.chosen.includes(e.target.value) && !e.target.checked) {
      const index = this.state.chosen.indexOf(e.target.value);
      if (index > -1) {
        this.state.chosen.splice(index, 1);
      }
    }
  }

  handleSubmit() {
    axios.post(
      'http://localhost:3001/tasks/addfreelancers',
      {
        taskId: this.props.taskId,
        freelancerids: this.state.chosen,
        projectid: this.props.projectId,
      }).then (response => {
        console.log(response.data)
        window.location.reload();
      }).catch (e => {
        console.log("error" + e);
      })
  }

  render(){
    return (
      <ModalFreelancers freelancers={this.state.freelancers} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
    )
  };
}

export default AddFreelancers;