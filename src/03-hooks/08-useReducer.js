import React, { useContext, useReducer, createContext } from 'react'



const reducer = (prevState, action) => {
  let newState = { ...prevState }

  switch (action.type) {
    case 'a':
      newState.a = action.a
      return newState
    case 'b':
      newState.b = action.b
      return newState
    default:
      return prevState
  }
}


const intialState = {
  a: '1111',
  b: '2222',
}
const globalContext = createContext()


export default function App () {
  // const [state, setstate] = useContext
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <globalContext.Provider value={{
      state,
      dispatch
    }}>
      <Child3></Child3>
      <Child1></Child1>
      <Child2></Child2>

    </globalContext.Provider>
  )
}






function Child1 () {
  const { state } = useContext(globalContext)
  return (
    <div>{state.a} -- 00</div>
  )
}


function Child2 () {
  const { state } = useContext(globalContext)

  return (
    <div>{state.b} -- 00</div>
  )
}

function Child3 () {
  const { dispatch } = useContext(globalContext)
  return (
    <div>     <button onClick={() => {
      dispatch({
        type: 'a',
        a: 'aaaaaaaa'
      })
    }}>11</button>
      <button onClick={() => {
        dispatch({
          type: 'b',
          b: 'bbbbb'
        })
      }}>22</button></div>
  )
}