import React, {Component, createRef} from 'react'

class App extends Component{
	myRef = createRef()
	btn(value){
		console.log(value)
	}
	render(){
		
		return(
		<>
		<input type="text" ref={this.myRef} />
		<button onClick={ () => { this.btn(this.myRef.current.value) } }>ref</button>
		</>
		)
		
	}
}

export default App