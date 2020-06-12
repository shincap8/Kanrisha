import React from 'react';
import Anonymous from '../img/anonymous.png';
import CommentUser from './CommentUser';

export class CommentsListItem extends React.Component {
    render() {
      let cls = "col-12 mt-2 align-self-start";
      if (this.props.idowner === this.props.comment.idowner) {
        cls = "col-12 align-self-end mt-2"
      }
      return (
          <div className={cls}>
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