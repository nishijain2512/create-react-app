import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

    const asignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.red;
    }

    if (props.persons.length <= 2){
        asignedClasses.push(classes.red);//we imported all the classes in .CSS file and use these class names to push
    }
    if (props.persons.length <= 1){
        asignedClasses.push(classes.bold);
    } 
    return(
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App.</h1>
            <p className={asignedClasses.join(' ')}>This is really working</p> 
            <button 
            className={btnClass}
            //style={style}//inline style for button
            onClick= {props.buttonClicked}>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;