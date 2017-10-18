import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    fetch('/users')
    .then(res => res.json())
    .then(data => console.log('data: ', data))
    .catch(error => console.log({ "error": error }))
  }

  render() {
    return (
      <div className="App">
        dicktastic
      </div>
    );
  }
}

export default App;
