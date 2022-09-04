import React from 'react'

export default function login (props) {
  // const setItem = () => {
  //   props.history.push('/Details')


  // }
  return (
    <button onClick={() => {
      localStorage.setItem('token', '123')
      console.log(21)
      props.history.push('/Details')
      // setItem()
    }}>login</button>
  )
}
