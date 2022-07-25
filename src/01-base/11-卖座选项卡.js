
import React, { Component } from 'react'
import Home from '../src/component/maizuoComponent/home'
import My from '../src/component/maizuoComponent/my'
import Search from '../src/component/maizuoComponent/search'
import '../src/css/02-maizuo.css'

class App extends Component {
  state = {
    list: [{ id: 1, name: '首页' }, { id: 2, name: '搜索' }, { id: 3, name: '我的' }], actIndex: 0
  }

  changIndex (e) {
    this.setState({
      actIndex: e
    })
  }
  // 函数形式的
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

        {/* {this.state.actIndex === 0 ? <Home></Home> : ''}
        {this.state.actIndex === 1 ? <My></My> : ''}
        {this.state.actIndex === 2 ? <Search></Search> : ''} */}
        {
          this.switch()
        }


        <ul>
          {this.state.list.map((item, index) => <li className={this.state.actIndex === index ? 'active' : ''} key={item.id} onClick={() => { this.changIndex(index) }} >{item.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default App