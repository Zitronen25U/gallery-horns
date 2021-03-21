import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import './beast.css';


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
      <CardColumns>
          <Card
           id="beastColumns" 
           style={{ width: '18rem' }}
           onClick={this.addLikes}
           >
          <Card.Img width="200" variant="top" src={this.props.src} />
          <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
           </Card.Text>
          <Card.Text>
          ❤️ = {this.state.likes}
          </Card.Text>
          </Card.Body>
          </Card>
      </CardColumns>
    );
  }
}

export default HornedBeasts;