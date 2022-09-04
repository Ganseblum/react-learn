import React from 'react'
import { useEffect } from 'react'
// import { useEffect } from 'react'
import { useState } from 'react'
import getList from './redux/actionCreator/listActionCreator.js'
import { store } from './redux/store.js'
import { connect } from 'react-redux'
function Details (props) {
  const [list] = useState([
    { id: 1, name: 'a' },
    { id: 2, name: 'bb' },
    { id: 3, name: 'ccc' },
  ])


  const [newList, setnewList] = useState(store.getState().listReducer.list
  )
  useEffect(() => {
    store.dispatch(getList())
    var unSubscribe = store.subscribe(() => {
      setnewList(store.getState().listReducer.list)
    })
    return () => {
      //取消订阅
      unSubscribe()
    }

  }, [])

  // console.log(newList)

  const go = (i) => {
    // console.log(props)
    props.history.push({ pathname: '/info', query: { id: i } })
  }
  return (
    <div>
      <ul>
        {
          list.map(item => <li key={item.id} onClick={() => { go(item.id) }}>{item.name}</li>)
        }
      </ul>

      <ul>
        {
          newList.map(item => <li key={item.id}>{item.title}</li>)
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}


export default connect(mapStateToProps)(Details)