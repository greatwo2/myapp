import React from 'react';
import './My.css';
import { MenuOutlined } from '@ant-design/icons';

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

    };
    render()
    {
        return (
            <div>
                <div className="top">
                    <div onClick={this.toLogin}>登录/注册></div>
                    <MenuOutlined style={{
                        fontSize:'22px',
                        color:'white',
                        float:'right'
                    }}
                    onClick={this.setting}
                    />
                </div>
            </div>
        );
    }
}

export {My as default} ;
