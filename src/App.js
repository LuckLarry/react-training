import React from 'react'
import {connect} from 'react-redux'
import {addGun,removeGun,removeGunAsync} from './index.redux'


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

const mapStateToProps = (state)=>{
	return {num:state}
}
const actionCreators = {addGun,removeGun,removeGunAsync}

App = connect(mapStateToProps,actionCreators)(App)
export default App