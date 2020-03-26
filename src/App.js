import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, I am React App</h1>
        <p>This is working App</p>
        <Person name='Jamal'/>
        <Person name = 'Cait'/>
        <Person name = 'Med'/>
      </div>

    );
  }
}

export default App;
