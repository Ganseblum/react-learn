import React, { Component, createContext } from 'react'
import './css/03-communication.css'
class ItemDet extends Component {
  constructor() {
    super()
    this.state = {
      info: ''
    }
  }
  render () {
    return (
      <GlobalMsg.Consumer>
        {
          (value) => {
            return (<div className='itemDet'>{value.info}</div>)
          }
        }
      </GlobalMsg.Consumer>
    )
  }
}

class ItemList extends Component {
  render () {
    return (
      <GlobalMsg.Consumer>
        {
          (value) => {
            return (<div onClick={() => {
              value.chang(this.props.info)
              console.log(value)
            }} >{this.props.name}</div>)
          }
        }
      </GlobalMsg.Consumer>
    )
  }
}


const GlobalMsg = createContext()

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
        <GlobalMsg.Provider value={{
          info: this.state.info,
          chang: (value) => {
            this.setState({
              info: value
            })
          }
        }}>
          {this.state.list.map((item, index) => <ItemList {...item} key={index} ></ItemList>)}
          <ItemDet></ItemDet>
        </GlobalMsg.Provider>

      </div>
    )
  }
}
