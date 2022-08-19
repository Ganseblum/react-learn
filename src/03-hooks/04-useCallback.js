import React, { useState } from 'react'
import { useCallback } from 'react'

const APP = () => {
  const [state, setstate] = useState(1)
	const [time, settime] = useState(1)
  var count = 0
	
	

 //  const add = useCallback(() => {
 //    console.log(state)
	// 	count = count +1
	// 	console.log(count); //count一直加一，但是因为time一直不变，count指向老的count
 //  }, [time])
	
	
	
	const add = useCallback(() => {
	  console.log(state)
		count = count +1
		console.log(count); //永远是一，只要state更新就会导致函数和引用类型的变量会创建新的（指向新的引用）
	}, [state])
	
	
	
	

  return (
    <div>
      <button onClick={() => { setstate(state + 1); add() }}>add</button>
      {state}- {count}
    </div>
  )
}

export default APP
