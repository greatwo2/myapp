import React from 'react';
import Axios from 'axios'
import { Card, NavBar, Icon } from 'antd-mobile';

class Order extends
    React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderList: ["1","2","3"],
        };
    }

    componentDidMount() {
        console.log("123"); 
        Axios.post('/order/getMyOrder',{uTel:""}).then((res) => {
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    renderCard = (order) => {
        // console.log("123"); 
        return this.state.orderList.map((item, index) => {
            // item['key'] = index ;
            return (<Card>
                <Card.Header
                    title={item}
                    // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>this is extra</span>}
                />
                <Card.Body>
                    <div>{item}</div>
                </Card.Body>
                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
            </Card>);
        })

        //     <Card>
        //   <Card.Header
        //     title="This is title"
        //     thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        //     extra={<span>this is extra</span>}
        //   />
        //   <Card.Body>
        //     <div>This is content of `Card`</div>
        //   </Card.Body>
        //   <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
        // </Card>
    }
    render() {
        return (
            <div>

                <NavBar
                    mode="light"
                    // icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >我的订单</NavBar>
                {this.renderCard('order')}

            </div>
        );
    }
}

export { Order as default };
