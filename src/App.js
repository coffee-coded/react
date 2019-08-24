import React, {Component} from 'react';
import './App.css';
import Radium,{StyleRoot} from "radium";
import Person from "./Person/Person";
import Toolbar from "./Toolbar/Nav/Nav"

import "./bootstrap.min.css"


class App extends Component {
    state = {
        persons: [
            {id:"x1", name: "Max", age: 20},
            {id:"x2", name: "Yash", age: 19},
            {id:"x3", name: "Harsh", age: 18}
        ],
        showPersons: false,

    };
    switchNameHandler = (name) => {
        this.setState({
            persons: [
                {name: name, age: 20},
                {name: "Yash", age: 19},
                {name: "Harsh", age: 21}
            ]
        })
    };

    nameChangedHandler = (event,id) => {
        const person_index = this.state.persons.findIndex(p=>{
            return p.id===id;
        });
        let person = {
            ...this.state.persons[person_index]
        };
        person.name =event.target.value;
        const persons = [...this.state.persons];
        persons[person_index]=person;
        this.setState({persons: persons});
    };
    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

     deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
         persons.splice(personIndex,1);
         this.setState({persons: persons});
     };

    render() {
        const style ={
          backgroundColor:"green",
            color:"white",
            font:"inherit",
            border:"1px solid blue",
            padding: "6px",
            cursor:"pointer",
            text:"Show Names",
            marginTop:"6px",
            width:"180px",
            ':hover':{
                backgroundColor:'lightgreen',
                color:'black'
            }
        };
        let persons = null;
        let button = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person,index)=>{
                      return <Person name = {person.name}
                                     click={()=>{this.deletePersonHandler(index)}}
                                     age = {person.age}
                                     key={person.id}
                                     change={(event) => {this.nameChangedHandler(event,person.id)}}
                                    />
                    })}
                </div>
            );
            style.backgroundColor="red";
            style[':hover']={
                backgroundColor:'salmon',
                color:'black'
            };
            button = (
                <button style={style} onClick={this.togglePersonHandler}>Hide Names</button>
            );

        }
        if(!this.state.showPersons){
            style[':hover']={
                backgroundColor:'lightgreen',
                color:'black'
            };
            button=(
                button = (
                    <button style={style} onClick={this.togglePersonHandler}>Show names</button>
                )
            );
        }

        let classes = [];
        if(this.state.persons.length<=2)
            classes.push("red");
        if(this.state.persons.length<=1)
            classes.push("bold");




        return (
            <StyleRoot>
            <div className="App">


                <Toolbar/>
                <br/>
                <h1>This is a react App!</h1>
                <p className={classes.join(" ")}> The names can be found below!</p>
                {persons}
                {button}
            </div>
            </StyleRoot>
        );
    }

}


export default Radium(App);
