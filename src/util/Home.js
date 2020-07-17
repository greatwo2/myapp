import React from 'react'
import { TabBar } from 'antd-mobile';
import Index from '../pages/Index/Index';
import Notice from '../pages/Notice/Notice';
import Cart from '../pages/ShopCart/Cart';
import Order from '../pages/Order/Order';
import My from '../pages/UserInfo/My';
import { HomeOutlined,NotificationOutlined,UserOutlined,ShoppingCartOutlined } from '@ant-design/icons';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 1,
            hidden: false,
            fullScreen: true,
        };
    }
//渲染组件
    renderContent(pageText) {
        if(pageText=='index'){
            return (
                <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                    <Index history={this.props.history}></Index>
                </div>
            );
        }else if(pageText=='notice'){
            return (
                <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                    <Notice history={this.props.history}></Notice>
                </div>
            );
        }else if(pageText=='cart'){
            return (
                <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                    <Cart history={this.props.history}></Cart>
                </div>
            );
        }else if(pageText=='Order'){
            return (
                <div style={{ backgroundColor: 'white', height: '100%' }}>
                    <Order history={this.props.history}></Order>
                </div>
            );
        }else if(pageText=='my'){
            return (
                <div style={{ backgroundColor: 'white', height: '100%' }}>
                    <My history={this.props.history}></My>
                </div>
            );
        }


    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="Life"
                        icon={<HomeOutlined style={{
                            fontSize:'22px'
                             }}
                        />
                        }
                        selectedIcon={<HomeOutlined style={{
                            fontSize:'22px'
                             }}
                        />
                        }
                        selected={this.state.selectedTab === 1}

                        onPress={() => {
                            this.setState({
                                selectedTab: 1,
                            });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent('index')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<NotificationOutlined style={{
                            fontSize:'22px'
                        }}
                        />
                        }
                        selectedIcon={<NotificationOutlined style={{
                            fontSize:'22px'
                        }}
                        />
                        }
                        title="公告"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 2}
                        onPress={() => {
                            this.setState({
                                selectedTab: 2,
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('notice')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<ShoppingCartOutlined style={{
                            fontSize:'22px'
                        }}
                        />
                        }
                        selectedIcon={<ShoppingCartOutlined style={{
                            fontSize:'22px'
                        }}
                        />
                        }
                        title="购物车"
                        key="Friend"
                        badge={1}
                        selected={this.state.selectedTab === 3}
                        onPress={() => {
                            this.setState({
                                selectedTab: 3,
                            });
                        }}
                    >
                        {this.renderContent('cart')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<ShoppingCartOutlined style={{
                            fontSize:'22px'
                        }}
                        />
                        }
                        selectedIcon={<ShoppingCartOutlined style={{
                            fontSize:'22px'
                        }}
                        />
                        }
                        title="订单"
                        key="Order"
                        badge={1}
                        selected={this.state.selectedTab === 4}
                        onPress={() => {
                            this.setState({
                                selectedTab: 4,
                            });
                        }}
                    >
                        {this.renderContent('Order')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<UserOutlined style={{
                            fontSize:'22px'
                        }}
                        />
                        }
                        selectedIcon={<UserOutlined style={{
                            fontSize:'22px'
                        }}
                        />
                        }
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 5}
                        onPress={() => {
                            this.setState({
                                selectedTab: 5,
                            });
                        }}
                    >
                        {this.renderContent('my')}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export {Home as default}