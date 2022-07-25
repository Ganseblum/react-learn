import React, {Component} from 'react'

class App extends Component {
	state={
		list:['aaa','bbbbb','v']
	}
	render(){
		var newList = this.state.list.map((item,index)=> <li key={index}>{item}</li>)
		return(
		<ul>
			{
				// this.state.list.map(item => <li>{item}</li>)
				newList
			}
		</ul>
		)
	}
}
export default App