import React, {Component} from 'react';
import './App.css';
import Radium,{StyleRoot} from "radium";
import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons"
import Cockpit from "../components/cockpit/cockpit"

import "../bootstrap.min.css"


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

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        click={this.deletePersonHandler}
                        change={this.nameChangedHandler}
                        />

                </div>
            );
        }

        return (
            <StyleRoot>
            <div className="App">


                <br/>
                <Cockpit
                    showPersons ={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}/>

                {persons}
            </div>
            </StyleRoot>
        );
    }

}


export default Radium(App);
