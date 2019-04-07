import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: this.props.initialNumber
    }
  }

  increment = () => {
    return this.setState((prevState) => ({
      currentNumber: prevState.currentNumber + 1
    }))
  }

  decrement = () => {
    return this.setState((prevState) => ({
      currentNumber: (this.props.initialNumber == prevState.currentNumber) ? this.props.initialNumber : prevState.currentNumber - 1
    })
    );
  }

  reset = () => {
    return this.setState(() => ({
      currentNumber: 0
    }
    ))
  }

  // Alternative
  // increment = () => {
  //   return this.setState({
  //     currentNumber: this.state.currentNumber + 1
  //   })
  // }

  render() {
    console.log(this.state)
    return (

      <div>
        <h1>Counter App</h1>
        <p>{this.state.currentNumber}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>

      </div >
    )
  }
}
