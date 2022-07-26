import React, { Component } from 'react'

export default class Navbar extends Component {

  btn1 () {
    this.props.navEvent(0)
  }

  btn2 () {
    this.props.navEvent(2)
  }


  render () {
    return (
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => { this.btn1() }}>去home</button>
        <span>测试</span>
        <button onClick={() => { this.btn2() }}>去my</button>

      </div>
    )
  }
}
