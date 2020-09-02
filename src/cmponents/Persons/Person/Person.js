import React, {Component} from 'react';
import './Person.module.css';
import classes from './Person.module.css'
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'


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
  
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  
  render() {
  /*const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error('Something went wrong');
  }*/

  console.log('[Person.js] rendering...');

  return (
    /*<div className="Person" style={style}>*/
    <Auxiliary>
        {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>}
        <p onClick={this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input 
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} 
          // ref={(inputEl) => {this.inputElement = inputEl}} - older version of React
          ref={this.inputElementRef}
        />
    </Auxiliary>
  );
  };
};


Person.propTypes = {
  clicked: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);