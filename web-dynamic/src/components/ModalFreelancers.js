import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class ModalFreelancer extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            show: false,
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit () {
      this.props.onSubmit();
      this.handleClose();
    }

    handleShow () {
      this.setState({ show: true });
    }
  
    handleClose (e) {
      this.setState({ show: false });
      this.props.reset();
    }
    
  render () {
    return (
      <div>
      <Button variant="info" onClick={this.handleShow}>
        Add Freelancers
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Freelancers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">Choose the freelancers you want to add to the task</p>
          {this.props.freelancers.map(freelancer => {
            return (
              <div className="form-check" key={freelancer._id} data-key={freelancer._id}>
                <hr />
                <input className="form-check-input" type="checkbox" id={freelancer._id} value={freelancer._id} onChange={this.props.onChange}/>
                <label className="form-check-label" htmlFor={freelancer._id}>{freelancer.name}</label>
              </div>
            );
          })}
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={this.handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )}
}

export default ModalFreelancer;