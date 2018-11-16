import React from 'react'
import {connect} from 'react-redux'
import {addGun,removeGun,removeGunAsync} from './index.redux'

@connect(
	//要state什么属性放到props里
    (state)=>{return {num:state}},
	//要什么方法,放到props里面,方法自动执行
	{addGun,removeGun,removeGunAsync})
class App extends React.Component{

	render(){
		return (
				<div>
				<h1>有机枪{this.props.num}把</h1>
				<button onClick={()=>this.props.addGun()}>申请武器</button>
				<button onClick={()=>this.props.removeGun()}>上交武器</button>
				<button onClick={()=>this.props.removeGunAsync()}>延迟上交武器</button>
				</div>
			)

	}
}

export default App