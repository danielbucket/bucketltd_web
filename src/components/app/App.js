import React, { Component } from 'react';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
