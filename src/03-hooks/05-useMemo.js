import React, { useState } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'

const APP = () => {
  const [state, setstate] = useState(1)
	const [time, settime] = useState('')
	const [dark, setDark] = useState(true)
  var count = 0
	
	const add = ( () =>{
			console.log(state);
	}, state)
	
  // 场景2:每次组件更新会重新执行，内部的引用类型变量会重新创建，这会导致使用到引用类型变量的组件重新渲染，使用useMemo来让每次的变量相同
    const themeStyle = useMemo(() => {
        return {
            background: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])
	
  return (
    <div>
      <button onClick={() => { setstate(state + 1) ;add()}}>dd</button>
      {state}- {count}
			 <button onClick={() => {
			                setDark(!dark)
			            }}>change theme
			            </button>
			
			  <p style={themeStyle}>123</p>
    </div>
  )
}

export default APP
