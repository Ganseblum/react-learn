import React from "react"
// import ReactDom from 'react-dom'

// 01-base
// import App from '../src/01-base/01-class组件'
// import App from '../src/01-base/02-函数式组件'
// import App from '../src/01-base/03-组件嵌套'
// import App from '../src/01-base/04-组件的样式'
// import App from '../src/01-base/05-事件处理'
// import App from '../src/01-base/06-传递参数'
// import App from '../src/01-base/07-ref'
// import App from '../src/01-base/08-state'
// import App from '../src/01-base/09-循环渲染'
// import App from '../src/01-base/10-todoList'
// import App from '../src/01-base/11-卖座选项卡'
// import App from '../src/01-base/12-betterScroll'
// import App from '../src/01-base/13-props'
// import App from '../src/01-base/14-非受控组件'
// import App from '../src/01-base/15-受控组件'
// import App from '../src/01-base/16-受控搜索'
// import App from '../src/01-base/17-受控todolist'

// 02-advanced
// import App from '../src/02-advanced/01-子传父.js'
// import App from './02-advanced/02-受控选项卡.js'
// import App from './02-advanced/03-父子通信版-表单域组件.js'
import App from './04-advanced/04-ref版-表单域组件.js'







// ReactDom.render(<App />,document.getElementById('root'))

import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)