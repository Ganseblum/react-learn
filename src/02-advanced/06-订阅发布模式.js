import React, { Component } from 'react'
import './css/03-communication.css'

var box = {
  list: [],
  // 订阅
  subscribe (callback) {
    this.list.push(callback)

  },
  // 发布
  publish (text) {
    this.list.forEach(item => {
      item && item(text)
    })
  }
}




class ItemDet extends Component {
  constructor() {
    super()
    this.state = {
      info: ''
    }
    box.subscribe((info) => {
      this.setState({
        info: info
      })
    })
  }
  render () {
    return (
      <div className='itemDet'>
        {this.state.info}
      </div>
    )
  }
}

class ItemList extends Component {
  render () {
    return (
      <div onClick={() => { box.publish(this.props.info) }}>{this.props.name}</div>
    )
  }
}




export default class App extends Component {
  state = {
    list: [
      {
        name: 'a',
        info: '我是a'
      },
      {
        name: 'b',
        info: '我是b'
      },
      {
        name: 'c',
        info: '我是c'
      }
    ],
    info: ""
  }
  render () {
    return (
      <div>
        {this.state.list.map((item, index) => <ItemList {...item} key={index} ></ItemList>)}


        <ItemDet></ItemDet>
      </div>
    )
  }
}
