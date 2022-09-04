import React, { useContext } from 'react'
import { createContext } from 'react'
const globalContext = createContext()

export default function App () {

  return (
    <globalContext.Provider value={
      {
        info1: 'aaa',
        info2: 'bbb',
      }
    }>
      <Child1></Child1>
      <Child2></Child2>
    </globalContext.Provider >
  )
}


function Child1 () {
  const value = useContext(globalContext)
  return (
    <div>{value.info1}</div>
  )
}


function Child2 () {
  const value = useContext(globalContext)

  return (
    <div>{value.info2}</div>
  )
}