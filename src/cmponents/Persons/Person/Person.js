import React, {Component} from 'react';
import './Person.module.css';
import classes from './Person.module.css'
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'


/*const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
        width: 450px;
      }
`;*/

class Person extends Component {
  render() {
  /*const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error('Something went wrong');
  }*/

  console.log('[Person.js] rendering...');

  return (
    /*<div className="Person" style={style}>*/
    <Auxiliary>
        <p onClick={this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
    </Auxiliary>
  );
  };
};

export default withClass(Person, classes.Person);