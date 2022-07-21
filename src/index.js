import React from "react"
// import ReactDom from 'react-dom'

// import App from '../src/01-class组件'
// import App from '../src/02-函数式组件'
// import App from '../src/03-组件嵌套'
// import App from '../src/04-组件的样式'
// import App from '../src/05-事件处理'
// import App from '../src/06-传递参数'
// import App from '../src/07-ref'
// import App from '../src/08-state'
// import App from '../src/09-循环渲染'
// import App from '../src/10-todoList'
import App from '../src/11-卖座选项卡'

// ReactDom.render(<App />,document.getElementById('root'))

import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)