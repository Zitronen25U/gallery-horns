import React from 'react';
import Form from 'react-bootstrap/Form';


class HornForm extends React.Component{
  render(){
    return (   
    <Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Filter the Beasts by Number of Horns!</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>100</option>
          </Form.Control>
      </Form.Group>
    </Form>

    )
  }
}

export default HornForm