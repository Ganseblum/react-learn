import React, { useState } from 'react'
import { useCallback } from 'react'

const APP = () => {
  const [state, setstate] = useState(1)
  var count = 0

  const add = useCallback(() => {
    console.log(state)
  }, [state])

  return (
    <div>
      <button onClick={() => { setstate(state + 1); add() }}>add</button>
      {state}- {count}

    </div>
  )
}

export default APP
