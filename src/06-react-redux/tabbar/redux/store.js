import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import cityReducer from './reducer/cityReducer.js'
import showReducer from './reducer/showReducer.js'
import listReducer from './reducer/listReducer.js'
import reduxThunk from 'redux-thunk'
import redexPromise from 'redux-promise'

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',// 储存的标识名
  storage, // 储存方式
  whitelist: ['listReducer'] //白名单 模块参与缓存
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = (combineReducers({ cityReducer, showReducer, listReducer }))
const persistedReducer = persistReducer(persistConfig, reducer)



const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(reduxThunk, redexPromise)),)

// 生成持久化sore
let persistor = persistStore(store)


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



export { store, persistor } 