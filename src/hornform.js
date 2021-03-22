import React from 'react';
import Form from 'react-bootstrap/Form';
import './css/hornform.css'


class HornForm extends React.Component{
  render(){
    return (   
    <Form id="hornForm">
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Filter the Beasts by Number of Horns!</Form.Label>
          <Form.Control as="select">
            <option  onSelect={this.props.updateHorn} value={1}>1</option>
            <option  onSelect={this.props.updateHorn} value={2}>2</option>
            <option  onSelect={this.props.updateHorn} value={3}>3</option>
            <option  onSelect={this.props.updateHorn} value={100}>100</option>
            <option  onSelect={this.props.updateHorn} value={"ALL"}>Display All</option>
          </Form.Control>
      </Form.Group>
    </Form>
    )
  }
}

export default HornForm