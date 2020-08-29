import React, {useEffect} from "react";
import classes from './Cockpit.module.css'


const Cockpit = (props) => {
  
  
  useEffect(
    () => {
      console.log('[Cockpit.js] useEffect');
      // http request...
      setTimeout(() => {alert('Saved data to cloud!');}, 1000);
    }, [props.persons]);

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
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.togglePersonsHandler}>Toggle Persons
      </button>
    </div>
  )
};

export default Cockpit;