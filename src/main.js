import React from 'react';
import HornedBeasts from './hornedbeasts';
import data from './data.json';


class Main extends React.Component{

 constructor(props){
   super(props);
   this.state = {
     beastData: data
   }
 }
  
  render(){
    return(
      <div id="beastContainer">
        {data.map((beast, index) => (
          <div key={index}>
           <HornedBeasts />
            src = {beast.image_url}
            title = {beast.title}
            description = {beast.description}
          </div>
      )) 

      }
        
      </div>
    );
  }
}

export default Main;