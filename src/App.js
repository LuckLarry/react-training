import React from 'react'
import { addGun } from './index.redux'


class App extends React.Component{

	render(){
		const store = this.props.store
		const num = store.getState()
		return (
				<div>
				<h1>有机枪{num}把</h1>
				<button onClick={()=>store.dispatch(addGun())}>申请武器</button>
				</div>
			)

	}
}


export default App