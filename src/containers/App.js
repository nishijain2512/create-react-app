import React, { Component } from 'react';
//import React, { useState } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

//---------------NOTES-----------------
// # radium is a package which help to use css psedo selectors in in-line styling and media queries. As the properties added using radium are not defauult JS properties of styling,
//   we define these properties as ':hover' (in string with :)

//---------------------------------------
//---------------using STATE in CLASS-----------------
class App extends Component {
  state = {
    persons: [
      {id:'dggjs', name: 'Nishi', age: 34},
      {id:'sksmm', name: 'Vaibhav', age: 38},
      {id:'dsddd', name: 'Anisha', age: 7},
      {id:'lfjui', name: 'Avika', age: 1}
    ],
    otherState: 'some other state',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 37},
        {name: 'Vaibhav', age: 38},
        {name: 'Anisha', age: 7},
        {name: 'Avika', age: 1}
      ],
      otherState: 'some other state'
    }
    );
  }
// method will handle user input
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }
//-----------------------------------


togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});

}

deletePersonHandler = personIndex => {
  // By directly copying the persons array in another variable, we mutate original array which can
  // lead to problem, so we should 1st copy array in other variable by using .slice method  or using
  // using spread operator.
  //const persons = this.state.persons.slice;
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

  render() {
  //---------Inline styling example----------
  // const style = {
  //   backgroundColor: 'green',
  //   color: 'white',
  //   border: '1px solid blue',
  //   font:'inherent',
  //   padding: '8px',
  //   cursor: 'pointer',
    
  // };
  //-----------------------------------

  let person = null;

  if (this.state.showPersons) {
    person = (
    <div>
      {
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      }
    </div>
    );
    //style.backgroundColor = 'red';
  }

  

      return (
        //.join method joins array element with a space and makes it a string as classname cannot be array, it need to be a string.
          <div className={classes.App}>
            <Cockpit 
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            buttonClicked={this.togglePersonsHandler}/>
            {person}
          </div>
        
      );
    }
}

export default App; 
//-----------------end of using STATE in CLASS-------------------

/*---------------using HOOKS in FUNCTIONS--------------------------

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Nishi', age: 34},
      {name: 'Vaibhav', age: 38},
      {name: 'Anisha', age: 7},
      {name: 'Avika', age: 1}
    ],
    otherState: 'some other state'
  });

  const [otherState, setOtherState] = useState('some other state');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Hello', age: 37},
        {name: 'Vaibhav', age: 38},
        {name: 'Anisha', age: 7},
        {name: 'Avika', age: 1}
      ]
    }
    );
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App.</h1>
      <button onClick= {switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>I like crocheting.</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      <Person name={personsState.persons[3].name} age={personsState.persons[3].age}/>
    </div>
  )

}

export default app;*/

//-----------------end of using HOOKS in FUNCTIONS-------------------


