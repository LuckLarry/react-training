import React from 'react'
import Logo from '../../component/logo/logo'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'

 class Register extends React.Component{
 	 constructor(props){
 		super(props);
 		this.register = this.register.bind(this)
 	}

 	register(){
 		this.props.history.push('/register')
 	}
 	render(){
 		return (
 			<div>
 				<Logo/>
 				<h2>我是登录页</h2>
 				<WingBlank>
 					<List>
 						<InputItem>用户</InputItem>
 						<WhiteSpace/>
 						<InputItem>密码</InputItem>
 					</List>
 					<WhiteSpace/>
 					<Button type='primary'>登录</Button>
 					<WhiteSpace/>
 					<Button onClick={this.register} type='primary'>注册</Button>
 				</WingBlank>
 			</div>
 		)
 	}
 }


 export default Register