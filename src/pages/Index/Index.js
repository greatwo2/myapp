import React from 'react';
import { SearchBar, Grid, Button, WhiteSpace, WingBlank, Tabs, Carousel } from 'antd-mobile';
import "./Index.css"

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

const GridExample = () => (
    <div>
        <div className="sub-title">Always square grid item </div>
        <Grid data={data} activeStyle={false} />


        <div className="sub-title">ColumnNum=3 </div>
        <Grid data={data} columnNum={3} />
    </div>
);
class Index extends
    React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: ['1', '2', '3'],
            imgHeight: 176,
        };
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                imgSrc: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    renderContent = tab => {
        // console.log(tab);
        // console.log(123);
        switch (tab.key) {
            case 'index':
                return (<div>
                    {/* <p>Content of {tab.title}</p> */}
                    {/* <GridExample /> */}
                    {/* 我是首页 */}
                    {/* <WingBlank> */}
                        <Carousel
                            autoplay
                            infinite
                            swiping
                            dots={true}
                        >
                            {this.state.imgSrc.map(val => (
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            ))}
                        </Carousel>
                        <br/>
                    {/* </WingBlank> */}
                        
                        
                    <GridExample />

                </div>);
                break;
            case 'saloon':
                return (<div>
                    <GridExample />
                </div>);
                break;
            case 'bedroom':
                return (<div>
                    <GridExample />
                </div>);
                break;
            case 'restaurant':
                return (<div>
                    <GridExample />
                </div>);
                break;
            case 'resbook':
                return (<div>
                    <GridExample />
                </div>);
                break;
        }
        // return (<div>
        //     <p>Content of {tab.title}</p>
        // </div>);
    }

    render() {
        const tabs = [
            {
                title: '首页',
                key: 'index',
                // data:{}
            },
            {
                title: '客厅',
                key: 'saloon'
            },
            {
                title: '卧室',
                key: 'bedroom'
            },
            {
                title: '餐厅',
                key: 'restaurant'
            },
            {
                title: '书房',
                key: 'resbook'
            }
        ];
        // const data = 
        return (
            <div  style={{ padding: '10px 10px' }}>
                <SearchBar placeholder="Search" maxLength={8} />
                <WhiteSpace />

                <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                    {this.renderContent}

                </Tabs>
                <WhiteSpace />

            </div>
        );
    }
}

export { Index as default };
