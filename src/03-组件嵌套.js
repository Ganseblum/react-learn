import React, { Component} from "react"


class Child extends Component{
	render(){
		return <div>11111</div>
	}
}

class NavBar extends Component{
	render(){
		return <div>navBar<Child></Child></div>
	}
}


function Content(){
	return <div>content</div>
}

const TabBar = () => {
	return <div>tabBar</div>
}

export default class App extends Component{
	render(){
		return(
		<>
		<NavBar></NavBar>
		<Content></Content>
		<TabBar></TabBar>
		</>

		)
	}
}


