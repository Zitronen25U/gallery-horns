import React from 'react';
import HornedBeasts from './hornedbeasts';
import data from './data.json';
import CardDeck from 'react-bootstrap/CardDeck';


class Main extends React.Component{

 constructor(props){
   super(props);
   this.state = {
     beastData: data
   }
 }
  
  render(){
    return(
      <div id="beasts">
        <CardDeck>

        {data.map((beast, index) => (
          <div key={index}>
           <HornedBeasts 
            src = {beast.image_url}
            title = {beast.title}
            description = {beast.description}
            />

          </div>
        )) 
      }
      </CardDeck>
      </div>
    );
  }
}

export default Main;