import React, { Component, Fragment } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <Fragment className="App">
        <h1>Hello, I am React App</h1>
        <p>This is working App</p>
        <Person />
      </Fragment>

    );
  }
}

export default App;
