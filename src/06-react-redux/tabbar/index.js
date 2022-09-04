import React from 'react'
import { HashRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom'
import hot from './index/hot.js'
import tuijian from './index/tuijian.js'
// import store from './redux/store.js'
import { connect } from 'react-redux'



function Index (props) {


  return (
    <div>
      <div>
        {props.city}

      </div>
      <HashRouter>
        {/* <NavLink to='/index/hot'>热门</NavLink> */}
        <NavLink to={{ pathname: "/index/hot", query: { id: 2121 } }}>热门</NavLink>
        <NavLink to={{ pathname: "/index/tuijian", state: { id: 2121 } }}>推荐</NavLink>

        <Switch>
          <Route path='/index/hot' component={hot}></Route>
          <Route path='/index/tuijian' component={tuijian}></Route>
          <Redirect from='/index' to='/index/hot'></Redirect>
        </Switch>
      </HashRouter >
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    city: state.cityReducer.city
  }
}

export default connect(mapStateToProps)(Index)

