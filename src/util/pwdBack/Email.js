/**
 * Created by greatwo on 2020/7/16.
 */
import React from 'react'
import '../Login/Register.css'
import Axios from "../../Axios";
import { List, InputItem,Button,WhiteSpace,Card  } from 'antd-mobile';
import { createForm } from 'rc-form';



class H5NumberInputExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone:'',
            display:true,
            email:'',
            password:'',
            code:'',
            codeText:'验证码',
            emailText:'邮箱',
            code_disabled:false,
            code_loading:false

        };
    }
    sendCode=()=>{
        Axios.post('/user/updatePwd',
            {
                "emailCode": this.state.code,
                "emailTime": Date.parse(new Date()),
                "uTel": this.state.phone,
                "uNewPassword": this.state.password,
            }
        ).then((res) => {
            console.log(res);
            if (res.data.code === 200) {
                this.countDown();
                this.props.history.push('/login')
            } else {
                // message.error(res.data.message);
            }
        });
    };
    pwdInput=(v) => {
        this.setState({
            password:v
        },()=>{
            if(this.state.password) {
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
    userInput=(v) => {
        this.setState({
            phone:v
        },()=>{
            if(this.state.password) {
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
    emailInput=(v) => {
        this.setState({
            email:v
        },()=>{
            if(this.state.code) {
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
    codeInput=(v) => {
        this.setState({
            code:v
        },()=>{
            if(this.state.code) {
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
    codeGet=()=>{
        if(this.state.email) {
            this.setState({
                codeText:'发送中',
                code_disabled:true,
                code_loading:true
            });

            Axios.post('/user/sendMail',
                {
                    "toUser": this.state.email
                }
            ).then((res) => {
                console.log(res);
                if (res.data.code === 200) {
                    this.countDown()
                } else {
                    // message.error(res.data.message);
                }
            });
        }else {
            this.setState({
                emailText:'邮箱不能为空！'
            });
        }
    };
    countDown=()=>{
        let timer = null;
        let sec = 30;
        this.setState({
            codeText:`${sec}S`,
            code_disabled:true,
            code_loading:false
        });
        timer=setInterval(()=>{
            sec--;
            if(sec<=0){
                this.setState({
                    codeText:'重新获取',
                    code_disabled:false
                });
                clearInterval(timer);
                return false
            }
            this.setState({
                codeText:`${sec}S`
            });
        },1000)
    };
    back=()=>{
        this.props.history.push('/login')
    };
    render() {
        return (
            <div className="login">
                <Card full>
                    <Card.Header
                        title={<h3>找回密码</h3>}
                        // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<span onClick={this.back}>返回登录</span>}
                    />
                    <Card.Body>
                        <List>
                            <InputItem
                                type="text"
                                placeholder="手机号码"
                                clear
                                onChange={this.userInput}
                            ></InputItem>
                            <div className="float">
                                <InputItem
                                    className="email"
                                    type="email"
                                    placeholder={this.state.emailText}
                                    clear
                                    onBlur={this.emailInput}
                                ></InputItem>
                                <Button loading={this.state.code_loading} disabled={this.state.code_disabled} onClick={this.codeGet} className="emailBtn" size="larger" inline type="primary">{this.state.codeText}</Button>
                            </div>
                            <InputItem
                                type="number"
                                placeholder="验证码"
                                clear
                                onChange={this.codeInput}
                            ></InputItem>
                            <InputItem
                                type="password"
                                placeholder="新密码"
                                clear
                                onChange={this.pwdInput}
                            ></InputItem>
                            <WhiteSpace size="xl" />

                            <Button disabled={this.state.display} size="larger" type="primary" onClick={this.sendCode}>设置新密码</Button>

                        </List>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}

const H5NumberInputExampleWrapper = createForm()(H5NumberInputExample);

export {H5NumberInputExampleWrapper as default}