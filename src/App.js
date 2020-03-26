import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {name: 'Jamalino', age: 36},
      {name: 'Catilino', age: 34},
      {name: 'Medino', age: 37}
    ],
    otherState: 'Some Other Value'
  }
  switchNameHandler =()=>{
      this.setState({
        
        persons : [
          {name: 'Jamalino I3zan', age: 36},
          {name: 'Catilino Ifolkin', age: 34},
          {name: 'Medino im(or', age: 37}
        ]
      })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, I am React App</h1>
        <p>This is working App</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> My Hobbies are: Reading and cooking</Person>
        <Person name = {this.state.persons[2].name} age =  {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
