import React from 'react'
import { withRouter } from 'react-router-dom'

function login (props) {
  const go = () => {
    console.log(22)
    localStorage.setItem('token', '123')
    props.history.push('/my')
  }
  return (
    <button onClick={() => {
      go()
    }}>login</button>
  )
}
export default withRouter(login)