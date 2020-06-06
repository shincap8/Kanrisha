import React from 'react';
import Anonymous from '../images/anonymous.png';
import CommentUser from './CommentUser';

export class CommentsListItem extends React.Component {
    render() {
      return (
          <div className="card mt-4" >
            <div className="ComentsListItem">
                  <div className="row md-2">
                      <img className="card-img-top col-md-2 mt-2 ml-3" src={ Anonymous } alt="User" />
                      <div className="col-md-6 mt-4">
                        <CommentUser userId={this.props.comment.idowner} />
                      </div>
                   </div>
                   <h4 className="card-text mt-4 ml-4">{ this.props.comment.title}</h4>
                   <p className="card-text mt-1 ml-4 mb-3">{this.props.comment.description}</p>
            </div>
          </div>
      );
    }
  }