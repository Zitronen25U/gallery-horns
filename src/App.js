import React from 'react';
import './App.css';
import Main from './main';
import data from './data.json';
import SelectedBeast from './selectedBeast';
import Header from './header';
import HornForm from './hornform';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: data,
      show: false,
      selectedBeast: {},
      slectedHorn: "ALL"
    }
  }

  handleModalShow = (index) => {
    console.log('click', index)
    this.setState({show: true, selectedBeast: this.state.data[index]})
  };

  handleModalHide = () => {
    this.setState({show: false})
  }

  updateHorn = (e) => {
    e.preventDefault();
    this.setState({slectedHorn: e.target.value})
    console.log(e.target.value)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Header />

          <HornForm 
          updateHorn={this.updateHorn}
          />

          <SelectedBeast
          show={this.state.show}
          modalBeast={this.state.selectedBeast}
          hide={this.handleModalHide}
          />

          <Main
          newData={this.state.data}
          handleModalShow={this.handleModalShow}
          selectedHorn={this.state.selectedHorn}
          />

        </header>
      </div>
    );
  }
}

export default App;
