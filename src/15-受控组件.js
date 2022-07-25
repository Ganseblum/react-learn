import React, { Component } from 'react'

export default class App extends Component {
  state = {
    value: '受控'
  }
  render () {
    return (
      <div>
        <input type="text" name="" id="" value={this.state.value} onInput={(e) => { console.log(e.target.value) }} onChange={(e) => { this.setState({ value: e.target.value }) }} />
        <button onClick={() => { console.log(this.state.value) }}>点击</button>
      </div>
    )
  }
}
