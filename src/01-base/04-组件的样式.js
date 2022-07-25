import React, {Component} from 'react'
import '../src/css/01-index.css'

export default class App extends Component{
	render(){
		var myNamr = 'aaa'
		var obj = {
			background:'yellow'
		}
		return(
			<div>
				{10 + 20}
				{myNamr}
				<div style={obj}>1111111</div>
				<div style={{backgroundColor:'red'}}>22</div>
				<div className="active">333333333333333333333333</div>
			</div>
		)
	}
}