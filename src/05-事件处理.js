import React, {Component} from 'react'

class App extends Component{
	a = 100
	btn1(){
		console.log(2222)
	}
	btn2 = () =>{
		console.log(3333)
	}
	btn3(){
		console.log(44444)
	}
	
	btn4 (){
			console.log(this.a)
	}
		btn5= () => {
			console.log(this.a)
	}
	btn6(e){
		console.log(this.a)
	}
	
	render(){ 
		return(
		<>
		<input  placeholder="输入"/>
		<button onClick = { () => {console.log('1111')} }>1111</button>
		<button onClick = { this.btn1}>22222</button>
		<button onClick = { this.btn2}>33333</button> 
		<button onClick = { ()=>{this.btn3()} }>444444</button>
		<button onClick = { this.btn4.bind(this) }>55555</button>
		<button onClick = { this.btn5 }>66666</button>
		<button onClick = { ()=>  {this.btn6()} }>66666</button>
		</>
		)
	}
}
export default App