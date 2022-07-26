import React, { Component } from 'react'
import '../../css/02-maizuo.css'
export default class Tabbar extends Component {

  state = {
    list: [
      { id: 1, name: '首页' },
      { id: 2, name: '搜索' },
      { id: 3, name: '我的' },
    ],
  }
  // changIndex (e) {
  //   this.setState({
  //     actIndex: e
  //   })
  //   this.props.event(e)
  // }
  render () {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => <li className={this.props.actIndex === index ? 'active' : ''} key={item.id} onClick={() => { this.props.event(index) }} >{item.name}</li>)}
        </ul>
      </div>
    )
  }
}
