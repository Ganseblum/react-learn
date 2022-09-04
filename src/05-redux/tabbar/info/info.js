import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { hide, show } from '../redux/actionCreator/tabbarAcionCreator.js'
import store from '../redux/store.js'
export default function Info (props) {
  useEffect(() => {
    store.dispatch(hide())
    return () => {
      store.dispatch(show())
    }
  }, [])
  const [list] = useState([
    '山东',
    '河南',
    '北京'
  ])
  const changCity = (index) => {
    store.dispatch({
      type: 'city',
      value: list[index]
    })
  }
  return (
    <div>info -- {props.location.query.id}

      <ul>
        {list.map((item, index) => <li onClick={() => {
          changCity(index)
        }} key={index}>{item}</li>)}
      </ul>
    </div>
  )
}
