import React, { Component } from 'react'
import NavBar from './component/props/navBar.js'
import SliderBar from './component/props/siderBar.js'

export default class App extends Component {
  render () {
    return (
      <div>
        <NavBar name="首页" leftShow={true}></NavBar>
        <NavBar name="我的" leftShow={false}></NavBar>
        <NavBar leftShow={true}></NavBar>

        <SliderBar position='left'></SliderBar>
        <SliderBar position='right'></SliderBar>

      </div >
    )
  }
}
