import React, { Component } from 'react';
import './App.css';
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
    console.log('Deleting Person', personIndex);
    const personsDup = [...this.state.persons];
    personsDup.splice(personIndex, 1);
    this.setState({
      persons: personsDup
    });
  }

  nameChangeHandler = (e, id) => {
    console.log(this.state.persons);
    const personIndex = this.state.persons.findIndex((p) => {
      return (p.id === id);
    });

    console.log(personIndex);

    const personsDup = [...this.state.persons];

    console.log(personsDup);

    const targetPerson = personsDup[personIndex];

    console.log(targetPerson);

    console.log(targetPerson.name);

    targetPerson.name = e.target.value;

    console.log(targetPerson.name);

    this.setState({
      persons: personsDup
    });

    console.log(this.state.persons);
  }

  btnClickHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });  
  }

  render() {

    let persons = null;

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
      <div className="App">
        <h1>Hello React</h1>
        <button 
          style={style} 
          onClick={this.btnClickHandler}>Swich Names</button>
          {persons}
      </div>
    );
  }
}

export default App;
