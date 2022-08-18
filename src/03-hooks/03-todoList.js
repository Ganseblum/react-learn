import React, { useState } from 'react'

const App = () => {
  const [state, setstate] = useState('')
  const [List, setList] = useState(['123', 'abc', '哈哈'])
  const del = (index) => {
    List.splice(index, 1)
    setList([...List])
  }
  const add = (e) => {
    setList([...List, state])
    setstate('')
  }

  return (
    <div>
      <input type="text" onChange={(e) => { setstate(e.target.value) }} value={state} />
      <button onClick={(e) => add(e)} >add</button>
      {List.map((item, index) => <div key={index} >{item}  <button onClick={() => del(index)}>del</button> </div>)}
    </div>
  )
}

export default App
