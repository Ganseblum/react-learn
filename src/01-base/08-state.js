import React, { Component } from 'react'

class App extends Component {
	state = {
		text: '测试收藏',
		isShow: true,
		num: 0
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

	add () {
		// this.setState({
		// 	num: this.state.num + 1
		// }, () => {
		// 	console.log(this.state.num)
		// })
		// this.setState((state) => ({
		// 	num: state.num + 1
		// }))
		// this.setState((state) => ({
		// 	num: state.num + 1
		// }))
		this.setState(function (state) {
			return {
				num: state.num + 1
			}
		})
	}

	btn2 () {
		this.add()
		this.add()
		this.add()
	}

	render () {
		return (
			<>
				<div>{this.state.isShow ? '收藏' : '取消收藏'}</div>
				<button onClick={() => { this.btn() }}>点击一下</button>

				<div> {this.state.num}</div>
				<button onClick={() => { this.btn2() }}>+3</button>

			</>
		)
	}
}





export default App