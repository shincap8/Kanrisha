import React from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

class AddFreelancers extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      data: [],
      show: false,
    }

    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount () {
    axios.get(
      'http://localhost:3001/all-freelancers/'
    ).then(response => {
      console.log(response.data);
    }).catch(error  => {
      console.log(error);
    });
  }

  handleModal () {
    this.setState({show: !this.state.show});
  }

  render(){
    return (
      <div>
        <Button variant="info" onClick={this.handleModal}>
          Add Freelancers
        </Button>

        <Modal show={this.state.show} onHide={this.handleModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title closeButton>Freelancers</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
              <label class="form-check-label" for="inlineCheckbox1">1</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModal}>
              Cancel
            </Button>
            <Button variant="info" onClick={this.handleModal}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  };
}

export default AddFreelancers;