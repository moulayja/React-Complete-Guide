import React from 'react'

const person =(props)=> {
    return (
        <div onClick={props.click}>
            {/* {Math.floor(Math.random() * 30)} */}
            <p>My name is {props.name}! & I am {props.age} years old!
             <span>{props.children}</span>
             </p>
            
        </div>
    )
}

export default person;