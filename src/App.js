import React, {Component} from 'react';
import Table from './Table';

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

  state = {
    characters: [
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
    ]
  };

}

export default App;