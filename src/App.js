import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>React, Redux and Firebase</h1>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
