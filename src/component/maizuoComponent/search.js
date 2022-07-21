import axios from 'axios'
import React, { Component } from 'react'

export default class search extends Component {
  state = {
    list: []
  }
  constructor() {
    super()
    axios({
      url: 'http://jsonplaceholder.typicode.com/posts',
      // headers: {
      //   'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.0", "e": "16584148861332367574695937", "bc": "110100" }',
      //   'X-Host': 'mall.cfg.cinema.banners'
      // },
      method: 'get'
    }).then(res => {
      this.setState({
        list: res.data
      })
    })
  }


  getList (e) {
    console.log(e.target.value)
  }
  render () {
    return (
      <div>
        <input type="text" onInput={(e) => { this.getList(e) }}></input>
        <div>
          {this.state.list.map(item => <div key={item.id}>{item.title}</div>)}
        </div>
      </div >
    )
  }
}
