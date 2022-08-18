import React, { useState, useEffect } from 'react'

const APP = () => {
  const [name, setname] = useState('xiaoming')
  useEffect(() => {
    setname(name.substring(0, 1).toUpperCase() + name.substring(1))
  }, [name])
  return (
    <div>
      <button onClick={() => { setname('dajiahao') }}>btn</button>
      {name}
    </div>
  )
}

export default APP
