import React from 'react'
import './Login.css'
import Axios from "../../Axios";
import { List, InputItem,Button,WhiteSpace,Card  } from 'antd-mobile';
import { createForm } from 'rc-form';
import {inject, observer} from "mobx-react";
@inject('user')
@observer


class H5NumberInputExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone:'17396226557',
            password:'',
            display:true

        };
    }
    toggleForm=()=>{
        this.props.change()
    };
    login=()=>{

        Axios.post('/user/login',
            {
                "uTel": this.state.phone,
                "uPassword":this.state.password
            }
        ).then((res) => {
            console.log(res);
            if (res.data.code === 200) {

                this.props.user.login(res.data.userData);
                console.log(JSON.parse(sessionStorage.getItem('user')));
                this.props.history.push('/home')

            } else {
                // message.error(res.data.message);
            }

        })
    };
    userInput=(v) => {
        this.setState({
            phone:v
        },()=>{
            if(this.state.phone && this.state.password) {
                this.setState({
                    display: false
                });
            }else {
                this.setState({
                    display: true
                });
            }
        });
    };

    pwdInput=(v) => {
        this.setState({
            password:v
        },()=>{
            if(this.state.phone && this.state.password) {
                this.setState({
                    display: false
                });
            }else {
                this.setState({
                    display: true
                });
            }
        });
    };
    pwdBack=()=>{
        this.props.history.push('/pwdBack')
    };
    render() {
        return (
            <div className="login">
                <Card full>
                    <Card.Header
                        title={<h3>登录</h3>}
                        // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<span onClick={this.toggleForm}>去注册</span>}
                    />
                    <Card.Body>
                        <List>
                            <InputItem
                                type="text"
                                placeholder="手机号码"
                                clear
                                onChange={this.userInput}
                                defaultValue="17396226557"
                            ></InputItem>

                            <InputItem
                                type="password"
                                placeholder="密码"
                                clear
                                onChange={this.pwdInput}
                            ></InputItem>
                            <WhiteSpace size="sm" />
                            <a onClick={this.pwdBack} className="forgot">忘记密码?</a>
                            <WhiteSpace size="sm" />

                            <Button disabled={this.state.display} size="larger" type="primary" onClick={this.login}>登录</Button>

                        </List>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}

const H5NumberInputExampleWrapper = createForm()(H5NumberInputExample);

export {H5NumberInputExampleWrapper as default}