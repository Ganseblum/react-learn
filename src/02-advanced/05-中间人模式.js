import React, { Component } from 'react'
import './css/03-communication.css'




class ItemList extends Component {
  render () {
    return (
      <div onClick={() => this.props.Event(this.props.info)}>{this.props.name}</div>
    )
  }
}

class ItemDet extends Component {
  render () {
    return (
      <div className='itemDet'>

        {this.props.info}
      </div>
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
        {this.state.list.map((item, index) => <ItemList {...item} key={index} Event={(value) => { console.log('父组件接收', value); this.setState({ info: value }); console.log(this.state.info) }}></ItemList>)}


        <ItemDet info={this.state.info}></ItemDet>
      </div>
    )
  }
}
