import React from 'react'
import {Grid,List} from 'antd-mobile'

class AvatarSelector extends  React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'.
        split(',').map(v=>({icon:require(`../img/${v}.png`),text:v}))
        const gridHeader = this.state.icon?
            (<div>
            <span>已选择头像</span>
            <img style={{width:20}} src={this.state.icon}/>
            </div>):<div>请选择头像</div>
        return (
            <div>
                <List renderHeader={()=>gridHeader}>
                    <Grid onClick={ele=>{
                        this.setState(ele)
                        this.props.selectAvatar(ele.text)
                    }} data={avatarList} columnNum={5}/>
                </List>
            </div>
        )
    }
}

export default AvatarSelector