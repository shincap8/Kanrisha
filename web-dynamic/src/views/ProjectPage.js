import React from 'react';
import axios from 'axios';
import history from '../history';
//import TasksList from '../components/TasksList';
import { Link } from 'react-router-dom';

export class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

    if (history.location.state.previousPage) {
      this.state = {
        project: history.location.state.project,
        managerId: history.location.state.managerId,
        projectId: history.location.state.projectId,
      }
    } else {
      this.state = {
        project: {},
        managerId: history.location.state.managerId,
        projectId: history.location.state.projectId,
      };
    }
  }


  componentWillMount() {
    if (history.location.state.previousPage) {
      //Debo ver si cambiando la condicion con !al ppio funciona
      console.log(this.state)
    } else {
      console.log("en el else");
      const url = 'http://localhost:3002/project/' + history.location.projectId;
      console.log(history)
      axios.get(
        url
      ).then(response => {
        console.log(response.data);
        this.setState({ project: response.data })
      }).catch(error => {
        console.log("registration error", error);
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-10">
            <h3>{this.state.project.projectName}</h3>
    <p><strong>Deadline: </strong>{this.state.project.deadline.toDateString()}</p>
            <p className="mt-4"><strong>Description: <br/> </strong> {this.state.project.description}</p>
          </div>
          <Link to={{pathname:"/NewTask", state: history.location.state}}>
            <li className="nav-item nav-link" value="Projects" data-toggle="dropdown">New Task</li>
          </Link>
        </div>
        
      </div>  
    );
  }
}
