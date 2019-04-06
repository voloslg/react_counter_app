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

  // Alternative
  // increment = () => {
  //   return this.setState({
  //     currentNumber: this.state.currentNumber + 1
  //   })
  // }

  render() {
    console.log(this.state)
    return (

      < div >
        <h1>Counter App</h1>
        <p>{this.state.currentNumber}</p>
        <button onClick={this.increment}>Increment</button>

      </div >
    )
  }
}
