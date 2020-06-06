import React from 'react';
import { CommentsListItem } from './CommentsListItem';
import axios from 'axios';



class CommentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
        console.log(this.state.comments);
    }

    componentDidMount () {
      const url = 'http://localhost:3001/comments-task/5edb0f068bf52440143371f3';
      console.log(url);
      axios.get(
        url
        ).then(response => {
            console.log(response.data);
          this.setState({ comments: response.data })
        }).catch(error => {
          console.log(error.data);
          console.log("Error", error);
        });
    }

    render() {
        return (
          <div className="CommentsList">
            <div className="container">
              <h1>Comments</h1>
              <div className="row">
                  {this.state.comments.map((comment, i) => {
                  return (
                    <div className="col-md-6" key={i}>
                      <CommentsListItem comment={ comment } />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }
    }

export default CommentsList;