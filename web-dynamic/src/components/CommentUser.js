import React from 'react';

import axios from 'axios';

class CommentUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        }
        console.log(this.state.user);
    }

    componentDidMount () {
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

    render() {
        return (
        <h3>{this.state.user.name}</h3>
        );
    }
}

export default CommentUser;