import React, { Component } from 'react'
import { HashRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom'
import index from './tabbar/index.js'
import My from './tabbar/my.js'
import Login from './login.js'
import Details from './tabbar/details.js'
import notFound from './notFound.js'
import detInfo from './tabbar/detInfo.js'

import './css/index.css'
const isLogin =
  function isLogin () {
    return localStorage.getItem('token')
  }

export default class app extends Component {
  render () {
    return (
      <div>
        <HashRouter>
          <NavLink to='/index' activeClassName='active'>index</NavLink>
          <br></br>
          <NavLink to='/my' activeClassName='active'>my</NavLink>
          <br></br>
          <NavLink to='/details' activeClassName='active'>details</NavLink>
          {/* {this.props.children} */}
          <Switch>
            <Route path='/index' component={index}></Route>
            <Route path='/my' component={My}></Route>

            <Route path='/Details' render={() => {
              return isLogin ? <Details /> : <Redirect to='/Login' />
            }}></Route>
            <Route path="/detInfo/:myid" component={detInfo}></Route>
            <Route path='/Login' component={Login}></Route>
            <Redirect from='/' to='/index' exact></Redirect>
            <Route component={notFound}></Route>
          </Switch>

        </HashRouter>
      </div>
    )
  }
}
