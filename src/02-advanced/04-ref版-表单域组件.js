import React, { Component, createRef } from 'react'


class Filed extends Component {
  state = {
    value: ''
  }
  clear () {
    this.setState({
      value: ''
    })
  }
  setValue (val) {
    console.log(val)
    this.setState({
      value: val
    })
  }
  render () {
    return (
      <div>
        <label >{this.props.label}</label>
        <input type={this.props.type} onChange={(e) => { this.setState({ value: e.target.value }) }} value={this.state.value} />
      </div>

    )
  }
}


export default class App extends Component {
  myName = createRef()
  myPassword = createRef()
  state = {
    a: 22
  }
  render () {
    return (
      <div>
        <Filed ref={this.myName} type='text' label='用户名'></Filed>
        <Filed ref={this.myPassword} type='password' label='密码' ></Filed>

        <button onClick={() => { console.log(this.myName.current.state.value, this.myPassword.current.state.value) }}>登录</button>
        {/* <button onClick={() => { this. }}>取消</button> */}
        <button onClick={() => { this.myName.current.clear(); this.myPassword.current.setValue() }}>取消</button>
      </div>
    )
  }
}
