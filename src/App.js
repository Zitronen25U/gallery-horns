import React from 'react';
import './App.css';
import Main from './main';
import data from './data.json';
import SelectedBeast from './selectedBeast';
import Header from './header';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: data,
      show: false,
      selectedBeast: {}
    }
  }

  handleModalShow = (index) => {
    console.log('click', index)
    this.setState({show: true, selectedBeast: this.state.data[index]})
  };

  handleModalHide = () => {
    this.setState({show: false})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Header />

          <SelectedBeast
          show={this.state.show}
          modalBeast={this.state.selectedBeast}
          hide={this.handleModalHide}
          />

          <Main
          newData={this.state.data}
          handleModalShow={this.handleModalShow}
          />

        </header>
      </div>
    );
  }
}

export default App;
