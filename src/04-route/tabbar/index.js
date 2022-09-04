import React, { Component } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import hot from '../index/hot.js'
import tuijian from '../index/tuijian.js'
import notFound from '../notFound.js'
class Routes extends Component {
  render () {
    return (
      <div>
        <HashRouter>
          {this.props.children}
          <Switch>
            <Route path='/index/hot' component={hot}></Route>
            <Route path='/index/tuijian' component={tuijian}></Route>
            <Redirect from='/index' to='/index/hot' exact ></Redirect>
            <Route component={notFound}></Route>
          </Switch>
        </HashRouter>
      </div>

    )
  }
}
export default function Index (props) {
  // const go = (i) => {
  //   if (i === 1) {
  //     props.history.push({ pathname: '/index/hot', state: { id: 1 } })
  //   } else {
  //     props.history.push({ pathname: '/index/tuijian', query: { id: 2 } })
  //   }
  // }
  const list = [
    { id: 1, name: "热门" },
    { id: 2, name: "推荐" },
  ]
  const go = (i) => {
    if (i === 1) {
      props.history.push({ pathname: "/details", query: { id: 555 } })

    } else {
      props.history.push({ pathname: "/details", state: { id: 1 } })
    }
  }
  return (
    <Routes>
      {/* <p onClick={() => {
        go(1)
      }}>热门</p>
      <p onClick={() => {
        go(2)
      }}>推荐</p> */}
      {/* <NavLink to={{ pathname: '/index/hot', state: { id: 1 } }}>热门</NavLink> */}


      <ul>
        {list.map(item => <li key={item.id} onClick={() => { go(item.id) }}>{item.name}</li>)}
      </ul>
    </Routes>
  )
}
