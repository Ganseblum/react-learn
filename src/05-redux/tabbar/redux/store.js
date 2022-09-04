import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import cityReducer from './reducer/cityReducer.js'
import showReducer from './reducer/showReducer.js'
import listReducer from './reducer/listReducer.js'
import reduxThunk from 'redux-thunk'
import redexPromise from 'redux-promise'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = (combineReducers({ cityReducer, showReducer, listReducer }))



const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk, redexPromise)),)


// 原理
// function storeY (reducer) {
//   var list = []
//   var state = reducer()
//   function subscribe (callback) {
//     list.push(callback)
//   }
//   function dispatch (action) {
//     state = reducer(state, action)
//     for (var i in list) {
//       list[i] && list[i]()
//     }
//   }

//   function getState () {
//     return state
//   }

//   return { subscribe, dispatch, getState }
// }



export default store