import React, { Component, createRef } from 'react'
import '../src/css/01-index.css'
class App extends Component {
  myRef = createRef()
  state = {
    list: [
      {
        id: 1,
        name: 'zs',
        check: true
      },
      {
        id: 2,
        name: 'sda',
        check: false
      },
      {
        id: 3,
        name: '哈哈',
        check: true
      }
    ]
  }
  btn (e) {
    let newList = this.state.list.slice()
    newList.push({ id: new Date().getTime(), name: e, check: false })
    this.setState({
      list: newList
    })
    this.myRef.current.value = ''
  }
  btn2 (id) {
    let newList = this.state.list.slice()
    newList = newList.filter(item => item.id !== id)
    this.setState({
      list: newList
    })
  }
  changeStatus (index) {

    let newList = this.state.list
    newList[index].check = !newList[index].check
    this.setState({
      list: newList
    })
  }
  render () {
    var newList = this.state.list.map((item, index) => <li key={item.id}><input type="checkbox" checked={item.check} onChange={() => { this.changeStatus(index) }} /> <span dangerouslySetInnerHTML={{ __html: item.name }} style={{ textDecoration: item.check ? 'line-through' : '' }}></span><button onClick={() => { this.btn2(item.id) }}>删除</button>  </li>)
    return (
      <>
        <input type="text" ref={this.myRef} />
        <button onClick={() => { this.btn(this.myRef.current.value) }}>增加</button>
        <ul>
          {newList}
        </ul>
        <div className={this.state.list.length === 0 ? '' : 'hidden'}>已经4145没有内容了</div>
      </>
    )
  }
}

export default App