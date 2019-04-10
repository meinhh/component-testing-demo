import React, { Component } from 'react';
import Shallow from './shallow/Shallow';
import Mount from './mount/Mount';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="border"><Shallow onButtonClick={() => alert('shallow')} /></div>
        <div className="border"><Mount title="fml" onButtonClick={() => alert('mount')} /></div>
      </div>
    );
  }
}

export default App;
