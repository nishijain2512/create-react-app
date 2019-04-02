import React, { Component } from 'react';
//import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//---------------using STATE in CLASS-----------------
class App extends Component {
  state = {
    persons: [
      {name: 'Nishi', age: 34},
      {name: 'Vaibhav', age: 38},
      {name: 'Anisha', age: 7},
      {name: 'Avika', age: 1}
    ],
    otherState: 'some other state'
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
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Nishi', age: 34},
        {name: event.target.value, age: 38},
        {name: 'Anisha', age: 7},
        {name: 'Avika', age: 1}
      ],
      otherState: 'some other state'
    }
    );
  }
//-----------------------------------


  render() {
  //---------Inline styling example----------
  const style = {
  backgroundColor: 'green',
  border: '1px solid blue',
  font:'inherent',
  padding: '8px',
  cursor: 'pointer'
};
//-----------------------------------
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <button 
        style={style}//inline style for button
        onClick= {this.switchNameHandler.bind(this, 'Nishi!!')}>Switch Name</button>
        <Person
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this, 'Jimmy!!')} >My Hobby: crocheting </Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}/>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
        <Person 
        name={this.state.persons[3].name} 
        age={this.state.persons[3].age}/>
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


