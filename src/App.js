import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  /*render() {
    /* const characters = [
      { 
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
        'name': 'Dee',
        'job': 'Aspring actress'
      },
      {
        'name': 'Dennis',
        'job': 'Bartender'
      }
    ];

    return (
      <div className="app-container">
        <Table characterData={characters} />    // **** Props 
      </div>
    )
  }*/

/* Using 'State' */
  state = {
    characters: [
      /* { 
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
        'name': 'Dee',
        'job': 'Aspring actress'
      },
      {
        'name': 'Dennis',
        'job': 'Bartender'
      } */
    ]
  };

  /* Function to remove an array object */
  removeCharacter = index => {
    const { characters } = this.state;

    this.setState ({
      characters: characters.filter((character, i) => {
         return i !== index;
      })
    });   
  }


  /* Submit button */
  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }

  render() {
    const { characters} = this.state;
    
    return (
      <div className="app-container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }

  

}

export default App;