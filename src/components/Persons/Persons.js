import React from 'react'
import Person from "./Person/Person";

const persons = (props) => (
        props.persons.map((person,index)=>{
            return <Person name = {person.name}
                           click={()=>{props.click(index)}}
                           age = {person.age}
                           key={person.id}
                           change={(event) => {props.change(event,person.id)}}/>})

);

export default persons;