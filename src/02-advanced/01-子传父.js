import React, { Component } from 'react'

function NavBar (props) {

  console.log(props)
  var getMsg = () => {
    props.event(111)
  }
  return (
    // <div style={{ background: "red" }}> <button onClick={() => { props.event() }}>点击</button></div>
    <div style={{ background: "red" }}> <button onClick={getMsg}>点击</button></div>
  )
}

function SiderBar () {
  return (
    <div style={{ width: "100px", background: "yellow" }}>
      <ul>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
      </ul>
    </div>
  )
}



export default class App extends Component {
  state = {
    isShow: true
  }

  change (childMsg) {
    this.setState({
      isShow: !this.state.isShow
    })
    console.log(childMsg)
  }
  render () {
    return (
      <div>
        <NavBar event={(childMsg) => { this.change(childMsg) }}></NavBar>

        {this.state.isShow ? <SiderBar></SiderBar> : ''}
      </div>
    )
  }
}
