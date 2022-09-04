import React from 'react'

export default function detInfo (props) {
  console.log(props.match.params.myid)
  return (
    <div>detInfo--{props.match.params.myid}</div>
  )
}
