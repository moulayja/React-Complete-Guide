import React from 'react'
import { Children } from 'react/cjs/react.production.min';

const person =(props)=> {
    return (
        <div>
            {/* {Math.floor(Math.random() * 30)} */}
            <p>My name is {props.name}! & I am {props.age} years old! <span>{props.children}</span></p>
            
            
        </div>
    )
}

export default person;