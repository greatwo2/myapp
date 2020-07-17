/**
 * Created by greatwo on 2020/7/13.
 */
import React from 'react'
import './Register.css'
import Axios from "../../Axios";
import { List, InputItem,Button,WhiteSpace,Card  } from 'antd-mobile';
import { createForm } from 'rc-form';

// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let moneyKeyboardWrapProps;
// if (isIPhone) {
//     moneyKeyboardWrapProps = {
//         onTouchStart: e => e.preventDefault(),
//     };
// }

class H5NumberInputExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone:'17396226557',
            password:'',
            name:'',
            email:'',
            display:true
        };
    }
    toggleForm=()=>{
        this.props.change()
    };
    register=()=>{
        Axios.post('/user/register',
            {
                "uTel": this.state.phone,
                "uPassword":this.state.password,
                "uName":this.state.name,
                "uEmail":this.state.email,
            }
        ).then((res) => {
            console.log(res);
            if (res.data.code === 200) {

                this.toggleForm()

            } else {
                // message.error(res.data.message);
            }

        })
    };
    phoneInput=(v) => {
        this.setState({
            phone:v
        },()=>{
            if(this.state.phone && this.state.password && this.state.name && this.state.email) {
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
            if(this.state.phone && this.state.password && this.state.name && this.state.email) {
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
    nameInput=(v) => {
        this.setState({
            name:v
        },()=>{
            if(this.state.phone && this.state.password && this.state.name && this.state.email) {
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

    render() {
        return (
            <div className="login">
                <Card full>
                    <Card.Header
                        title={<h3>注册</h3>}
                        // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<span onClick={this.toggleForm}>去登录</span>}
                    />
                    <Card.Body>
                        <List>
                            <InputItem
                                type="text"
                                placeholder="昵称"
                                clear
                                onChange={this.nameInput}
                            ></InputItem>

                            <InputItem
                                type="text"
                                placeholder="手机号码"
                                clear
                                onChange={this.phoneInput}
                            ></InputItem>
                            <InputItem
                                type="password"
                                placeholder="密码"
                                clear
                                onChange={this.pwdInput}
                            ></InputItem>

                                <InputItem
                                    type="email"
                                    placeholder="邮箱"
                                    clear
                                    onChange={this.emailInput}
                                ></InputItem>

                            <WhiteSpace size="xl" />

                            <Button disabled={this.state.display} onClick={this.register} size="larger" type="primary">注册</Button>



                        </List>
                    </Card.Body>
                    {/*<Card.Footer content="footer content" extra={<div>extra footer content</div>} />*/}
                </Card>

            </div>
        );
    }
}

const H5NumberInputExampleWrapper = createForm()(H5NumberInputExample);

export {H5NumberInputExampleWrapper as default}