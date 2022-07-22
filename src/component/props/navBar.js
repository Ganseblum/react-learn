import React, { Component } from 'react'

import Proptypes from 'prop-types'

export default class NavBar extends Component {

  render () {
    let { name, leftShow } = this.props
    return (
      <div style={{ marginTop: '100px' }}>

        {leftShow && <button>返回</button>}
        导航--{name}
        < button > 更多</ button>
      </div>

    )
  }
}
NavBar.propTypes = {
  name: Proptypes.string,
  leftShow: Proptypes.bool
}

NavBar.defaultProps = {
  name: '测试',
  leftShow: 'left'
}
