/**
 * Created by greatwo on 2020/7/13.
 */
import React from 'react'
import './main.css'
import Login from './Login'
import Register from './Register'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            LorR:true,

        };
    }
    change=()=>{
        this.setState({
            LorR:!this.state.LorR
        })
    };
    render() {
        return (
            <div className="Form">
                {this.state.LorR?<Login history={this.props.history} change={this.change}/>:<Register history={this.props.history} change={this.change}/>}

            </div>
        )
    }
}


export {Index as default}