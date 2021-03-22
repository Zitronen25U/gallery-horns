import React from 'react';
import HornedBeasts from './hornedbeasts';


class Main extends React.Component{
  render(){

    const newDataVal = this.props.newData;

    const filteredHorns = newDataVal.filter((beast) => {
      if(this.props.selectedHorn === "ALL") {
        return beast;
      } else {
        return beast.horns === this.props.selectedHorn;
      }
    })

    return(
      <div id="beasts">
        <>
        {filteredHorns.map((beast, index) => (
          <div key={index}>
            <HornedBeasts 
            width={100}
            src = {beast.image_url}
            title = {beast.title}
            description = {beast.description}
            handleModalShow={this.props.handleModalShow}
            index={index}
            horns= {beast.horns}
            selectedHorn = {this.props.selectedHorn}
            />
          </div>

        )) 
      }
      </>
      </div>
    );
  }
}

export default Main;