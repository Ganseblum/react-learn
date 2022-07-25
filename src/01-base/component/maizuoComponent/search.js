import axios from 'axios'
import React, { Component } from 'react'

export default class search extends Component {
  state = {
    list: [],
    clonList: []
  }
  constructor() {
    super()
    axios({
      url: 'http://jsonplaceholder.typicode.com/posts',
      method: 'get'
    }).then(res => {
      this.setState({
        list: res.data,
        clonList: res.data
      })
    })
  }


  getList (e) {
    console.log(e.target.value)
    let key = e.target.value
    let newList = this.state.list.filter(item => item.title.includes(key))
    this.setState({
      clonList: newList
    })
    console.log(this.state.clonList)
  }
  render () {
    let list = this.state.clonList.map(item => <div key={item.id}>{item.title}</div>)
    return (
      <div>
        <input type="text" onInput={(e) => { this.getList(e) }}></input>
        <div>
          {list}
        </div>
      </div >
    )
  }
}
