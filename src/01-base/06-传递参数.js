import React, {Component} from 'react'

class App extends Component {
	btn(e,msg){
		console.log(e,msg)
	}
	b = 222
	render(){
		var a = 100
		return(
		<>
		<button onClick={(evt)=>{ this.btn(evt,a) }}>点击传参a</button>
		<button onClick={(evt)=>{ this.btn(evt,this.b) }}>点击传参b</button>
		</>
		)
	}
}

export default App