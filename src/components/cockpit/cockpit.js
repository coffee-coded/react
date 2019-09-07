import React from 'react'
import Radium, {StyleRoot} from "radium";
import './cockpit.css'

const cockpit = (props) => {

    const style = {
        backgroundColor: "green",
        color: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "6px",
        cursor: "pointer",
        marginTop: "6px",
        width: "180px"
    };
    let classes = [];
    let button = null;

    function extracted() {
        if (props.persons.length <= 2)
            classes.push("red");
        if (props.persons.length <= 1)
            classes.push("bold");
        if (props.showPersons) {
            style.backgroundColor = "red";
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            };
            button = (
                <button style={style} onClick={props.clicked}>Hide Names</button>
            );
        } else {
            style[':hover'] = {
                backgroundColor: 'lightgreen',
                color: 'black'
            };
            button = (
                <button style={style} onClick={props.clicked}>Show names</button>

            );
        }
    }

    extracted();


    return (
        <div className="Cockpit">

            <h1>This is a react App!</h1>
            <p className={classes.join(" ")}> The names can be found below!</p>
            {button}
        </div>

    );
};

export default Radium(cockpit);