import React, { Component } from 'react'


class Filed extends Component {
  state = {
    uname: '',
    password: ''
  }
  render () {
    return (
      <div>
        <label>{this.props.label}</label>
        <input value={this.props.value} type={this.props.type} onChange={(e) => { this.props.onChangeEvent(e.target.value) }} />
      </div>
    )
  }
}




export default class App extends Component {
  state = {
    uname: '',
    password: ''
  }
  render () {
    return (
      <div>
        <Filed label='用户名' type='text' value={this.state.uname} onChangeEvent={(value) => { this.setState({ uname: value }) }}></Filed>
        <Filed label='密码' type='password' value={this.state.password} onChangeEvent={(value) => { this.setState({ password: value }) }}></Filed>

        <button onClick={() => { console.log(this.state) }}>登录</button>
        <button onClick={() => { this.setState({ uname: '', password: '' }) }}>取消</button>
      </div>
    )
  }
}
