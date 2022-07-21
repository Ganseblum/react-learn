import axios from 'axios'
import React, { Component } from 'react'

export default class search extends Component {
  constructor() {
    super()
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=7099440',
      headers: {
        'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.0", "e": "16584148861332367574695937", "bc": "110100" }',
        'X-Host': 'mall.cfg.cinema.banners'
      },
      method: 'get'
    }).then(res => {
      console.log(res)
    })
  }
  state = {
    list: []
  }
  getList (e) {
    console.log(e)
  }
  render () {
    return (
      <div>
        <div>1</div>
      </div>
    )
  }
}
