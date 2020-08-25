import React from "react";
import classes from './Cockpit.module.css'


const cockpit = (props) => {
  /*изменяет цвет параграфа*/
  const assignedClasses = [];
  /*меняет цвет кнопки*/
  let btnClass = '';

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  if (props.showPersons) {
    btnClass = classes.Red;
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.togglePersonsHandler}>Toggle Persons
      </button>
    </div>
  )
};

export default cockpit;