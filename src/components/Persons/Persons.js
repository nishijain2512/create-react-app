import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((individual, index) => {
        return <Person 
        click={() => props.clicked(index)}
        name={individual.name} 
        age={individual.age}
        key={individual.id}//key property is to give all data elements a unique id for react to help identify while updating DOM.
        changed={(event) => props.changed(event, individual.id)}/>
      });

export default persons;