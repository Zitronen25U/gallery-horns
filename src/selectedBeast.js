import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/modal.css';


class SelectedBeast extends React.Component{
  render() {
    return(
      <Modal id="modal" show={this.props.show} onHide={this.props.hide}>
      <Modal.Dialog id="modalContent">
        <Modal.Header closeButton>
          <Modal.Title>{this.props.modalBeast.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card 
            bg="dark"
            text="light"
          >
            <Card.Img src={this.props.modalBeast.image_url} width={500} variant="top" />
            <Card.Body>
              <Card.Title>{this.props.modalBeast.title}</Card.Title>
              <Card.Text>
                {this.props.modalBeast.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.props.hide} variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
    )
  }
}

export default SelectedBeast;