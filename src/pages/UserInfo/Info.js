import React from 'react';
import { ImagePicker, Button, SegmentedControl } from 'antd-mobile';
import {inject, observer} from "mobx-react";
import Axios from "../../Axios";
const data = [];
@inject('user')
@observer
class Info extends
React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            files: data,
            multiple: false,
        };
    }
    onChange = (files, type, index) => {
        console.log(files[0]);
        this.setState({
            files,
        });
    };
    test=()=>{
        Axios.post('/user/modifyUserPhoto',
            {
                "imgData": this.state.files[0].url,
                "uTel":this.props.user.user.utel
            }
        ).then((res) => {
            console.log(res);
            if (res.data.code === 200) {

                this.props.user.login(res.data.userData);
                // message.success(res.data.message);

                // this.props.history.push('/home')

            } else {
                // message.error(res.data.message);
            }

        })
    };
    render()
    {
        return (
            <div>
                <ImagePicker
                    files={this.state.files}
                    onChange={this.onChange}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={this.state.files.length < 1}
                    capture="camera"
                />
                <Button onClick={this.test}></Button>
            </div>
        );
    }
}

export {Info as default} ;
