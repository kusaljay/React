import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
  render() {
    const characters = [
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
    /* const workPlaces = [
      {
        'name' : 'Pittu Bambuwa',
        'suburb' : 'Colombo 02'
      },
      {
        'name' : 'Eureka Towers',
        'suburb' : 'South Bank'
      },
      {
        'name' : 'Merchant Towers',
        'suburb' : 'Kolpetty'
      } 
    ]; */
    return (
      <div className="app-container">
        <Table characterData={characters} /* workPlaceData={workPlaces} */ /> {/* Props */}  
      </div>
    )
  }
}

export default App;