import React from 'react';
import Anonymous from '../img/anonymous.png';
import CommentUser from './CommentUser';

export class CommentsListItem extends React.Component {
    render() {
      return (
          <div className="col-12 comment-item">
                  <div className="row md-12">
                      <img className="card-img-top col-md-2 mt-2 ml-3" src={ Anonymous } alt="User" />
                      <div className="col-md-6 mt-4">
                        <CommentUser userId={this.props.comment.idowner} type={this.props.comment.profiletype}/>
                      </div>
                  </div>
                   <h6 className="card-text mt-2 ml-4">{ this.props.comment.title}</h6>
                   <p className="card-text mt-2 ml-4 mb-3">{this.props.comment.description}</p>
          </div>
      );
    }
  }