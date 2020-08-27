import React from 'react';
import './App.css';
import BagelContainer from './Components/BagelContainer'

export const baseURL = 'https://bagel-api-fis.herokuapp.com/bagels'

export default class App extends React.Component {
  
  state = {
    bagels: []
  }

  componentDidMount(){
    fetch(baseURL)
      .then(response => response.json())
      .then(bagels => this.setState({ bagels: bagels}))
  }
        
  render() {
    // console.log(this.state.bagels)
  return (
    <div className="App">
      <h1>Bagels:</h1>
      <BagelContainer bagels={this.state.bagels}/>
    </div>
  );
  }
}
