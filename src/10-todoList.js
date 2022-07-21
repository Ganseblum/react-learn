import React, {Component,createRef} from 'react'
import '../src/css/01-index.css'
class App extends Component{
	myRef = createRef()
	state={
		list:[
		{
			id:1,
			name:'zs'
		},
		{
			id:2,
			name:'sda'
		},
		{
			id:3,
			name:'哈哈'
		}
	]
	}
	btn(e){
		let newList = this.state.list.slice()
		
			newList.push({id:new Date().getTime(),name:e})
			console.log(newList)
			this.setState({
				list:newList
			})
			this.myRef.current.value = ''
	}
	btn2(id){
		let newList = this.state.list.slice()
		// newList.splice(id,1)
		newList = newList.filter(item => item.id != id)
		this.setState({
			list:newList
		})
	}
	render(){
		
		// var newList = this.state.list.map( (item,index) => <li key={item.id}> {item.name}<button onClick={ () => { this.btn2(index) }}>删除</button>  </li> )
		var newList = this.state.list.map( (item,index) => <li key={item.id}> <span dangerouslySetInnerHTML={{__html:item.name}}></span><button onClick={ () => { this.btn2(item.id) }}>删除</button>  </li> )
		return(
			<>
			<input  type="text" ref={this.myRef} />
			<button onClick={ () => { this.btn(this.myRef.current.value)  }}>增加</button>
			<ul>
				{newList}
			</ul>
			{ /*this.state.list.length == 0 ? <div>没有内容了</div> : null */}
			{/* this.state.list.length == 0 && <div>没有内容了aaa</div> */}
			<div className={ this.state.list.length == 0 ?'' : 'hidden' }>已经4145没有内容了</div>
			</>
		)
	}
}

export default App