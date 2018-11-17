import React from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware,compose} from 'redux'
import  thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter,Route,Link, Redirect,Switch} from 'react-router-dom'

import App from './App'
import { counter} from './index.redux'


const store = createStore(counter,
	compose(applyMiddleware(thunk),window.devToolsExtension?window.devToolsExtension(): f=>f)
)
function Erying(){
	return <h2>二营</h2>
}
function Qibinglian(){
	return <h2>骑兵连</h2>
}

class Test extends React.Component{
	render (){
		console.log(this.props)
		// this.props.history.push("/")
		return <h2>测试组件{this.props.match.params.location}</h2>
	}
}

ReactDom.render(
	(<Provider store={ store} >
		<BrowserRouter>
			<div>
				<ul>
					{/*点击对应的link调到匹配的<Route/> 去*/}
 					<li><Link to="/">一营</Link></li>
					<li><Link to="/erying">二营</Link></li>
					<li><Link to="/qibinglian">骑兵连</Link></li>
				</ul>
                {/*<Redirect to="/qibinglian"/>*/}
                {/*<Redirect to="/erying"/>//Redirect以最后一个为主*/}

				<Switch>
					{/*只渲染命中的第一个Router*/}
					<Route path="/" exact component={App}></Route>
                    <Route path="/erying" exact component={Erying}></Route>
                    <Route path="/qibinglian" exact component={Qibinglian}></Route>
                    <Route path="/:location" component={Test}/>
				</Switch>
			</div>
		</BrowserRouter>
    </Provider>),
	document.getElementById('root'))

