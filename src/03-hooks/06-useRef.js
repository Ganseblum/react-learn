import React, { useState } from 'react'

const APP = () => {
  const [state, setstate] = useState(1)


 
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
