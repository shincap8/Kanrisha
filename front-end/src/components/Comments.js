import React from 'react';
import { CommentsListItem } from './CommentsListItem';
import axios from 'axios';
import { CommentsForm } from '../components/CommentsForm';
import history from '../history';


export class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
        this.getComments = this.getComments.bind(this);
    }

    componentDidMount () {
      this.getComments();
    }

    async getComments () {
      const url = 'http://localhost:3001/comments-task/' + history.location.state.taskId;
      await axios.get(
        url
        ).then(response => {
          this.setState({ comments: response.data })
        }).catch(error => {
          console.log(error.data);
          console.log("Error", error);
        });
    }

    render() {
        return (
          <div className="CommentsList">
            <div className="row">
              <div className="col-11 chat">
                {this.state.comments.map(comment => {
                  return (
                    <CommentsListItem comment={comment} idowner={this.props.idowner}/>
                );
              })}
              </div>
            </div>
            <CommentsForm idowner={this.props.idowner} commentsList={this.getComments.bind()}/>
          </div>
        );
      }
    }
export default Comments;