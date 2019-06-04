import React, { Component } from 'react';
import Container from './Components/Container';


class App extends Component {
  render() {
    return (
      <div className ="app">
      <div className="app-header">Random qoute machine</div> 
      <div className="app-container">
      <Container/>
      </div>
      </div>
    );
  }
}

export default App;