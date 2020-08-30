import React, {Component} from 'react';
import Person from '../cmponents/Persons/Person/Person'
import './App.module.css'
import classes from './App.module.css';
import Persons from '../cmponents/Persons/Persons'
import Cockpit from '../cmponents/Cockpit/Cockpit'


class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    console.log('[App.js] render')
    let persons = null;

    /*let btnClass = [classes.Button];*/

    if ( this.state.showPersons ) {
      /*btnClass.push(classes.Red);*/
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
        </div>
      )
    }

    /*let assignedClasses = [];*/

    /*if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }*/

    return (

      <div className={classes.App}>
        <button onClick={() => {
          this.setState({showCockpit: false});
        }}>
          Remove Cockpit
        </button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          togglePersonsHandler={this.togglePersonsHandler}
          /> : null}
        {persons}
      </div>
  );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;