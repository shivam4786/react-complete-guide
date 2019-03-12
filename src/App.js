import React, { Component } from 'react';
import Classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        {
          name: 'shivam',
          age: 23,
          id:1
        },
        {
          name: 'prem',
          age: 60,
          id:2
        },
        {
          name: 'sushma',
          age: 58,
          id: 3
        }
      ],
      showPersons: false
    }
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 23
        },
        {
          name: 'prem',
          age: '60'
        },
        {
          name: 'sushma',
          age: 58
        }
      ]
    });
  }

  deletePersonHandler = (personIndex) => {
    const personsDup = [...this.state.persons];
    personsDup.splice(personIndex, 1);
    this.setState({
      persons: personsDup
    });
  }

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return (p.id === id);
    });

    const personsDup = [...this.state.persons];
    
    const targetPerson = personsDup[personIndex];

    targetPerson.name = e.target.value;

    this.setState({
      persons: personsDup
    });
  }

  btnClickHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });  
  }

  render() {
    let persons = null;
    
    let classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
          return (<Person 
                    nameChange={(e) => this.nameChangeHandler(e, person.id)} 
                    click={() => this.deletePersonHandler(index)}
                    key={person.id} 
                    name={person.name} 
                    age={person.age}>
                  </Person>)
          })}
        </div>
      )
    }
 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className={Classes.App}>
        <h1>Hello React</h1>
        <button 
          style={style} 
          onClick={this.btnClickHandler}>Toggle Persons </button>
          {persons}
      </div>
    );
  }
}

export default App;
