import React from 'react';
import Radium from "radium";
import './Person.css';
import StyleRoot from "radium/es/components/style-root";
const PERSON = (arr) => {
    const style={
        '@media (min-width:500px)':{
            width:'450px',

        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={arr.click}>I am {arr.name} and I am {arr.age} years old</p>
            <p>{arr.children}</p>
            <input placeholder={arr.name} onChange={arr.change} type="password" />
        </div>
    );
};

export default Radium(PERSON);