import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

@withRouter
class AuthRoute extends React.Component{
	componentDidMount(){
		//获取用户信息
		axios.get('/user/info').then(res=>{
			const publicList = ['/login','/register']
			const pathname = this.props.location.pathname
			if(publicList.indexOf(pathname)>-1){
				return null
			}
			if(res.status==200){
				if(res.data.code==0){

				}else{
					 this.props.history.push('/login')
					console.log(this.props.history)
				}
				console.log(res.data)
			}
		})
	}
	render(){
		return <h2></h2>
	}
}

export default AuthRoute