import React from 'react'
import axios from 'axios'
import {Card,WingBlank,WhiteSpace} from 'antd-mobile'
import {connect} from  'react-redux'
import {getUserList} from "../../redux/chatuser.redux";

@connect(
    state=>state.chatuser,
    {getUserList}
)
class Boss extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        this.props.getUserList('genius')
    }

    render(){
        console.log("res.data.data",this.state.data)
        const Header = Card.Header
        const Body = Card.Body
        return (
            <div>
                <WingBlank>
                    {this.props.userlist.map(v=>(
                        <Card key={v._id}>
                            <Header title={v.user} thumb={require(`../img/boy.png`)} extra={<span>{v.title}</span>}/>
                            <Body>{v.doc.split('\n').map(v=(
                                <div key={v}>{v}</div>
                            ))}</Body>
                        </Card>
                    ))}
                    <WhiteSpace/>
                </WingBlank>
            </div>
        )
    }
}

export default Boss