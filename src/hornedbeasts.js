import React from 'react';
import './beast.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {
  constructor(props){
    super(props);
    this.state={
      likes: 0
    }
  }

  addLikes = () => {
    this.setState({likes: this.state.likes + 1})
  }

  render(){
    return(
      <div id="beastContainer" onClick={() => this.props.handleModalShow(this.props.index)}>
        <CardGroup >
          <Card>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Img variant="top" src={this.props.src} width={300} />
              <Card.Body>
              <Card.Text id="beastText">
                {this.props.description}
              </Card.Text>
              <Card.Text> ❤️ {this.state.likes}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <Button onClick={() => this.addLikes}>CLICK ME TO LIKE THE {this.props.title}</Button>
      </div>
    );
  }
}

export default HornedBeasts;