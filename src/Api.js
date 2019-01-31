import React from 'react';
import Movie from './Movie';

class App extends React.Component {
  state = {
    data: []
  };
  
  componentDidMount() {
    //const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";
    const dataURL = "https://ghibliapi.herokuapp.com/films";
    
    //const dataURL = "http://192.168.70.9/practitionerSearch/api/data/authenticate?userSearch=Fernando";

    // Using ES6 in-built fetch API
    fetch(dataURL)
      .then(response => response.json())
      .then(response => {
        this.setState({data: response});
      });  
  }

  render () {
    const {data} = this.state; 
    
    let result = data.map((entry, index) => {
      //return <div key={index}>{entry}</div>
      return <Movie key={index} name={entry.title} director={entry.director} description={entry.description}  />
    });
        
    return <div>{result}</div>

    //return <div></div>

  } 
}

export default App;