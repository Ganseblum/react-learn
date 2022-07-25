import React, { Component } from 'react'

class App extends Component {
	state = {
		text: '测试收藏',
		isShow: true
	}
	btn () {
		this.setState({
			isShow: !this.state.isShow
		})
		if (this.state.isShow) {
			console.log('收藏了')
		}
		if (!this.state.isShow) {
			console.log('取消收藏了')
		}
	}
	render () {
		return (
			<>
				<div>{this.state.isShow ? '收藏' : '取消收藏'}</div>
				<button onClick={() => { this.btn() }}>点击一下</button>
			</>
		)
	}
}

export default App