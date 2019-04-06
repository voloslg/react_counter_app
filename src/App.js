import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';

class App extends Component {


  render() {

    return (
      <div className="App">
        <Counter initialNumber={0} />
        <Counter initialNumber={-5} />
        <Counter initialNumber={-20} />
        <Counter initialNumber={1} />
      </div>
    );
  }
}

export default App;
