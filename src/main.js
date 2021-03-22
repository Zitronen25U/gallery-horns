import React from 'react';
import HornedBeasts from './hornedbeasts';
import data from './data.json';
import CardDeck from 'react-bootstrap/CardDeck';


class Main extends React.Component{

  render(){
    return(
      <div id="beasts">
        <>
        {this.props.newData.map((beast, index) => (
           <HornedBeasts 
            key={index}
            width={100}
            src = {beast.image_url}
            title = {beast.title}
            description = {beast.description}
            handleModalShow={this.props.handleModalShow}
            index={index}
            />
        )) 
      }
      </>
      </div>
    );
  }
}

export default Main;