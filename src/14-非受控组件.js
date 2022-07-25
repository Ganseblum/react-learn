import React, { Component, createRef } from 'react'

export default class App extends Component {
  myRef = createRef()
  render () {
    return (
      <div>

        <input type="text" defaultValue={'测试'} ref={this.myRef} onChange={(e) => { console.log(e.target) }} />
        <button onClick={() => { console.log(this.myRef.current.value) }}>测试</button>

      </div>
    )
  }
}
