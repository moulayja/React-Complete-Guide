import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, I am React App</h1>
        <p>This is working App</p>
        <Person name='Jamal' age = '21'/>
        <Person name = 'Cait' age = '20'> My Hobbies are: Reading and cooking</Person>
        <Person name = 'Med' age = '22'/>
      </div>

    );
  }
}

export default App;
