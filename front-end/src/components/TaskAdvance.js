import React from 'react';
import axios from 'axios';
import history from '../history';

class TaskAdvance extends React.Component {
  constructor (props) {
      super (props);

      this.state = {
        taskAdvance : 0,
      }
  }

  componentDidMount () {
    let taskId = this.props.taskId;
    if (this.props.taskId === undefined) {
      taskId = history.location.state.taskId;
    }
    if (history.location.state.user === "manager" && this.props.user !== 'freelancer') {
      const url = 'http://localhost:3001/task-advance/' + taskId;
      axios.get(
        url
        ).then(response => {
          if (this.props.type === 2 || history.location.state.taskType === "2") {
            console.log("entre")
            this.setState({ taskAdvance: response.data[0] });
          } else {
            this.setState({ taskAdvance: response.data });
          }
          console.log(response.data)
        }).catch(error => {
          console.log("error", error);
        })
    } else {
      let freelancerId;
      if (this.props.user) {
        freelancerId = this.props.id;
      } else {
        freelancerId = history.location.state.freelancerId;
      }
      const url2 = 'http://localhost:3001/freelancer/task-advance/' + taskId + '/' + freelancerId;
      axios.get(
        url2
      ).then(response => {
        this.setState({ taskAdvance: response.data });
      }).catch(error => {
        console.log("error", error);
      })
    }
  }
    
  render () {
    console.log(this.props.type)
    let advance = "";
    if (history.location.pathname === '/TaskPage' && history.location.state.user === 'freelancer') {
      advance = this.props.value;
    }
    else {
      advance = this.state.taskAdvance;
    }
    return (advance)
  }
}

export default TaskAdvance;