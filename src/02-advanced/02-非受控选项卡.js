import React, { Component } from 'react'
import Home from './component/maizuoComponent/home.js'
import My from './component/maizuoComponent/my.js'
import Search from './component/maizuoComponent/search.js'
import Tabbar from './component/maizuoComponent/Tabbar.js'
import Navbar from './component/maizuoComponent/Navbar.js'


export default class App extends Component {
  state = {
    actIndex: 0
  }
  switch () {
    if (this.state.actIndex === 0) {
      return <Home></Home>
    }
    if (this.state.actIndex === 2) {
      return <My></My>
    }
    if (this.state.actIndex === 1) {
      return <Search></Search>
    }
  }


  render () {
    return (
      <div>
        <Navbar navEvent={(childMsg) => { this.setState({ actIndex: childMsg }) }}></Navbar>
        {this.switch()}
        <Tabbar event={(childMsg) => { this.setState({ actIndex: childMsg }) }} actIndex={this.state.actIndex}></Tabbar>
      </div >
    )
  }
}
