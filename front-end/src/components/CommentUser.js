/*
The code below receives an ownerId.
Returns the name of the user according to whether an Id is a freelancer or manager.
*/

import React from 'react';
import axios from 'axios';

class CommentUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        }
    }

    componentDidMount () {
      if (this.props.type === 0) {
        const url = `http://localhost:3001/manager/${this.props.userId}`;
        axios.get(
          url
        ).then(response => {
          this.setState({ user: response.data })
        }).catch(error => {
          console.log(error.data);
          console.log("Error", error);
        });
      } else {
        console.log("else")
        const url = `http://localhost:3001/freelancer/${this.props.userId}`;
        console.log(url);
        axios.get(
          url
          ).then(response => {
            console.log(response.data);
            this.setState({ user: response.data })
          }).catch(error => {
            console.log(error.data);
            console.log("Error", error);
          });
      }
    }

    render() {
        return (
        <h5>{this.state.user.name}</h5>
        );
    }
}

export default CommentUser;