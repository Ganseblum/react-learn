import React from 'react'
import { useState } from 'react'
import { withRouter } from 'react-router-dom'

function Details (props) {
  console.log(props)
  const [state, setstate] = useState([
    {
      id: 1,
      name: 'aa'
    },
    {
      id: 2,
      name: 'bbb'
    },
    {
      id: 3,
      name: 'cccc'
    },
  ])
  const goDetInfo = (item) => {
    props.history.push(`/detInfo/${item}`)
  }

  return (
    <div>
      <ul>
        {
          state.map(item => <li key={item.id} onClick={() => {
            goDetInfo(item.id)
          }}>{item.name}</li>)
        }
      </ul>
    </div>
  )
}

export default withRouter(Details)