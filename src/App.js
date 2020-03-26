import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

  const  [personState, setPersonState ] = useState({
    persons : [
      {name: 'Jamalino', age: 36},
      {name: 'Catilino', age: 34},
      {name: 'Medino', age: 37}
    ],
    otherState: 'Some Other Value'

  }
  )

   const switchNameHandler =()=>{
    setPersonState({...personState,
        
        persons : [
          {name: 'Jamalino I3zan', age: 36},
          {name: 'Catilino Ifolkin', age: 34},
          {name: 'Medino im(or', age: 37}
        ]
      })
  }
  
    return (
      <div className="App">
        <h1>Hello, I am React App</h1>
        <p>This is working App</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person
         name={personState.persons[0].name}
         age = {personState.persons[0].age}
         click = {switchNameHandler}
        />
        <Person
         name = {personState.persons[1].name}
         age = {personState.persons[1].age}
         >
         My Hobbies are: Reading and cooking
         </Person>
        <Person
         name = {personState.persons[2].name}
         age =  {personState.persons[2].age}
         click = {switchNameHandler}
        />
      </div>
    );
}

export default app;



// state = {
//   persons : [
//     {name: 'Jamalino', age: 36},
//     {name: 'Catilino', age: 34},
//     {name: 'Medino', age: 37}
//   ],
//   otherState: 'Some Other Value'
// }
// switchNameHandler =()=>{
//     this.setState({
      
//       persons : [
//         {name: 'Jamalino I3zan', age: 36},
//         {name: 'Catilino Ifolkin', age: 34},
//         {name: 'Medino im(or', age: 37}
//       ]
//     })
// }