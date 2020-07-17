import React from 'react';
import './My.css';
import { MenuOutlined } from '@ant-design/icons';
import {inject, observer } from "mobx-react";
import { List,Grid,WhiteSpace,WingBlank  } from 'antd-mobile';


const data = [{
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `我的订单`,
},{
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `会员中心`,
},{
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `售后服务`,
},{
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `我的钱包`,
},{
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `我的收藏`,
},{
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `我的档案`,
},{
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `关于我们`,
},];

@inject('user')
@observer

class My extends
React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }
    toLogin=()=>{
        this.props.history.push({
            pathname: '/login',

        });
    };
    setting=()=>{
        this.props.history.push('/Info')
    };
    menu=(item,index)=>{
        console.log(item,index);
        if(item.text=="我的订单"){
            this.props.togglePage(2)
        }
    };
    render()
    {
        return (
            <div className="My">
                <div className="top">
                    {this.props.user.isLogin?<div className="headImg"><div><img width="80" height="80" src={this.props.user.user.uphoto} alt=""/></div><div>{this.props.user.user.uname}</div></div>:<div onClick={this.toLogin}>登录/注册></div>}
                    <MenuOutlined style={{
                        fontSize:'22px',
                        color:'white',
                        float:'right'
                    }}
                    onClick={this.setting}
                    />
                </div>
                <WhiteSpace size="xl" />
                <WingBlank>
                    <Grid data={data} columnNum={3} onClick={this.menu} />
                </WingBlank>

            </div>
        );
    }
}

export {My as default} ;
