import React from 'react'
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatarselector/avatarselector'


class BossInfo extends  React.Component{

    constructor(props){
        super(props)
        this.state={
            title:''
        }

    }

    onChange(key,val){
        this.setState({[key]:val})
    }
    render(){
        return (
            <div>
                <NavBar mode="dark">Boos完善信息页面</NavBar>
                <AvatarSelector selectAvatar={(imagename)=>{
                    this.setState({imagename:imagename})
                }}></AvatarSelector>
                <InputItem onChange={(v)=>this.onChange('title',v)}>
                    招聘
                </InputItem>
                <InputItem onChange={(v)=>this.onChange('company',v)}>
                    公司名称
                </InputItem>
                <InputItem onChange={(v)=>this.onChange('money',v)}>
                    职位薪资
                </InputItem>
                <TextareaItem title='职位要求' rows={3} autoHeight={true} onChange={(v)=>this.onChange('desc',v)}>

                </TextareaItem>

                <Button type='primary'>保存</Button>
            </div>
        )
    }
}

export default BossInfo