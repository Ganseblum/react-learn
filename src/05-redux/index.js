import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Tabbar from './tabbar/tabbar.js'
import My from './tabbar/my.js'
import index from './tabbar/index.js'
import details from './tabbar/list.js'
import Login from './login.js'
import city from './tabbar/info/city.js'
import Info from './tabbar/info/info.js'
import store from './tabbar/redux/store.js'
import { useEffect } from 'react'
import { useState } from 'react'



const isLogin = () => {
  return localStorage.getItem('token')
}
function Index (props) {


  return (
    <div>
      <HashRouter>
        {props.children}
        <Switch>
          {/* <Route path="/my" ></Route> */}
          <Route path="/my" render={() => {
            return isLogin() ? <My></My> : <Redirect to='/login' />
          }}></Route>
          <Route path="/login" component={Login}></Route>

          <Route path="/index" component={index}></Route>
          <Route path="/info" component={Info}></Route>
          <Route path="/city" component={city}></Route>
          <Route path="/details" component={details}></Route>
          <Redirect from='/' to='/index' exact></Redirect>
        </Switch>
      </HashRouter>
    </div>
  )
}
export default function Indexs () {
  // var isShow = ''
  // useEffect(() => {
  //   return isShow
  // }, [isShow])
  // let isShow = ''
  // let [isShow] = useState(store.getState().show)
  // store.subscribe(() => {
  //   isShow = store.getState().show
  // })
  let [isShow, setisShow] = useState(store.getState().showReducer.show)
  useEffect(() => {
    store.subscribe(() => {
      setisShow(store.getState().showReducer.show)
    })
  }, [isShow])
  return (
    <div>
      <Index>
        {/* <Tabbar></Tabbar> */}
        {isShow
          ? <Tabbar></Tabbar> : ''}
      </Index>
    </div>
  )
}
