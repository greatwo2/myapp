/**
 * Created by greatwo on 2020/7/13.
 */
import React from 'react'
import '../Login/main.css'
import Email from './Email'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="Form">
                <Email history={this.props.history} change={this.change}/>

            </div>
        )
    }
}


export {Index as default}