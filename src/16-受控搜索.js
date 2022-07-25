import axios from 'axios'
import React, { Component } from 'react'

export default class search extends Component {
  state = {
    list: [],
    key: ""
  }
  constructor() {
    super()
    axios({
      url: 'http://jsonplaceholder.typicode.com/posts',
      method: 'get'
    }).then(res => {
      this.setState({
        list: res.data
      })
    })
  }


  getList (e) {
    this.setState({
      key: e.target.value
    })
  }
  getNewList () {
    return this.state.list.filter(item => item.title.includes(this.state.key))
  }
  render () {
    // let list = this.state.clonList.map(item => <div key={item.id}>{item.title}</div>)
    return (
      <div>
        <input type="text" value={this.state.key} onInput={(e) => { this.getList(e) }}  ></input>
        <div>
          {this.getNewList().map(item => <div key={item.id}>{item.title}</div>)}
        </div>
      </div >
    )
  }
}
