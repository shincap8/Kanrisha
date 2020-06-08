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
  }

  componentDidMount () {
    axios.get(
      'http://localhost:3001/all-freelancers/'
    ).then(response => {
      this.setState({freelancers: response.data});
    }).catch(error  => {
      console.log(error);
    });
  }

  handleChange (e) {
    if (!this.state.chosen.includes(e.target.value) && e.target.checked) {
      this.state.chosen.push(e.target.value);
    } else if (this.state.chosen.includes(e.target.value) && !e.target.checked) {
      const index = this.state.chosen.indexOf(e.target.value);
      if (index > -1) {
        this.state.chosen.splice(index, 1);
      }
    }
    console.log(this.state.chosen)
  }

  render(){
    return (
      <ModalFreelancers freelancers={this.state.freelancers} onChange={this.handleChange}/>
    )
  };
}

export default AddFreelancers;