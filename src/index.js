import React from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware,compose} from 'redux'
import  thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter,Route,Link, Redirect,Switch} from 'react-router-dom'

import reducers from './reducers'
import './config'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Dashboard from './component/dashboard/dashboard'

import './index.css'


const store = createStore(reducers,
	compose(applyMiddleware(thunk),window.devToolsExtension?window.devToolsExtension(): f=>f)
)
//boss genius me msg
//<Route component={Dashboard}/>当Route没有设置path，没有使用<Switch/>时就会所有的组件都显示
ReactDom.render(
	(<Provider store={ store} >
		<BrowserRouter>
			<div>

			<AuthRoute></AuthRoute>
			<Route path='/bossinfo' component={BossInfo}></Route>
			<Route path='/geniusinfo' component={GeniusInfo}></Route>
			<Route path='/login' component={Login}></Route>
			<Route path='/register' component={Register}></Route>
			<Route component={Dashboard}/>
			</div>
		</BrowserRouter>
    </Provider>),
	document.getElementById('root'))

