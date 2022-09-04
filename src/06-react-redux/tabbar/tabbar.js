import React from 'react'

// import my from './my.js'
// import index from './index.js'
// import details from './details.js'
import style from './css/tabbar.module.css'
import { NavLink } from 'react-router-dom'

export default function Tabbar () {
  return (
    <div>
      <ul className={style.list}>
        <li>
          <NavLink to='/index'>首页</NavLink>
        </li>
        <li>
          <NavLink to='/details'>列表</NavLink>
        </li>
        <li>
          <NavLink to='/my'>我的</NavLink>
        </li>
      </ul>
    </div>
  )
}
