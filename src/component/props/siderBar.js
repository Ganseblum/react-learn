import React from 'react'

const SiderBar = (props) => {
  console.log(props)
  let { position } = props
  var left = {
    position: 'fixed',
    background: 'yellow',
    left: 0
  }
  var right = {
    position: 'fixed',
    background: 'red',
    right: 0
  }

  var style = position === 'left' ? { ...left } : { ...right }

  return (
    <div>
      {/* <ul style={{ position: 'fixed', [position]: '0px' }}> */}
      <ul style={style}>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
      </ul>
    </div>
  )
}

export default SiderBar
