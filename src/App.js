import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AvengerList from './AvengerList.js';
import avengers from './avengersarray.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      avengers: avengers,
  }
}
  render() {
    return (
      <div className="App">
        <AvengerList avengers={this.state.avengers}/>
      </div>
    );
  }
}

export default App;
