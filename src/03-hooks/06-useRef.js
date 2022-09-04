import React from 'react'
import { useState, useRef } from 'react'

const APP = () => {
  const [state, setstate] = useState(0)
  const myRef = useRef()
  // 存值，.current
  var count = useRef(0)

  // var count = 0
  const add = () => {
    setstate(state + 1)
    count.current++
  }
  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={() => { add(); console.log(myRef.current.value); count++ }}>+1</button>
      {state} -- {count.current}

    </div>
  )
}

export default APP
