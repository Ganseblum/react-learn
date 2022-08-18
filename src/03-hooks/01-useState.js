import React, { useState } from 'react'

const APP = () => {
  const [name, setName] = useState('xiaoming')
  return (
    <div>
      <button onClick={() => { setName('大明') }}>改变名字</button>
      {name}
    </div>
  )
}

export default APP
