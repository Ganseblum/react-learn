import React, { Component } from 'react'

class APP extends Component {
  componentDidUpdate () {
    console.log('更新了数据')
  }
  componentDidMount () {
    console.log('渲染完成')
  }

  state = {
    num: 1,
    show: true
  }
  add () {
    this.setState({
      num: this.state.num + 1,
      show: !this.state.show
    })
  }
  render () {
    return (
      <div>
        <button onClick={() => { this.add() }}>add</button>
        {this.state.num}
        {this.state.show ? <Child></Child> : ''}
      </div>
    )
  }
}

class Child extends Component {
  componentWillUnmount () {
    console.log('卸载了')
  }

  render () {
    return (
      <div>Child</div>
    )
  }
}





export default APP