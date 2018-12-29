import React, {Component} from 'react';
import './App.css';
import {Layout, Menu, Breadcrumb, Avatar, Select, Badge, Button, Icon,} from 'antd';

const {SubMenu} = Menu;
const Option = Select.Option;
const {Header, Content, Sider} = Layout;

class App extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Layout class="yuyg-layout">
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        onClick={this.handleClick}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1"><Icon type="database"/><span>数据</span></Menu.Item>
                        <Menu.Item key="2"><Icon type="area-chart"/><span>展示</span></Menu.Item>
                        <Menu.Item key="3"><Icon type="tool"/><span>设计器</span></Menu.Item>
                        <Menu.Item key="4"><Icon type="setting"/><span>系统设置</span></Menu.Item>
                        <Menu.Item key="5"><Icon type="book"/><span>我的空间</span></Menu.Item>
                    </Menu>
                    <div className="right-toolbar">
                        <Select
                            showSearch
                            style={{width: 200}}
                            placeholder="Select a module"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="bi">bi设计器</Option>
                            <Option value="ready">数据准备</Option>
                            <Option value="ci">数据采集</Option>
                            <Option value="track">数据跟踪</Option>
                            <Option value="process">流程</Option>
                            <Option value="etl">ETL</Option>
                            <Option value="favio">我的收藏</Option>
                            <Option value="permission">权限管理</Option>
                            <Option value="log">系统日志</Option>
                            <Option value="recycle">回收站</Option>
                        </Select>
                        <Button className='yuyg-skin' icon="skin" size={64} ghost></Button>
                        <span className="user-message" style={{marginRight: 24}}>
                          <Badge count={1}><Avatar size={28} shape="square" icon="user"/></Badge>
                        </span>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} style={{background: '#fff'}} trigger={null} collapsible
                           collapsed={this.state.collapsed}>
                        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
                              style={{height: '100%', borderRight: 0}}>
                            <SubMenu key="sub1" title={<span><Icon type="user"/><span>图表分析</span></span>}>
                                <Menu.Item key="1">2018年财务报告</Menu.Item>
                                <Menu.Item key="2">2018年湖北省各个地区销售额</Menu.Item>
                                <Menu.Item key="3">2018年湖北省税务审核报表</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop"/><span>表格分析</span></span>}>
                                <Menu.Item key="5">财务报告详情表</Menu.Item>
                                <Menu.Item key="6">各地区销售指标</Menu.Item>
                                <Menu.Item key="7">各月份商品销售价格</Menu.Item>
                                <Menu.Item key="8">员工销售业绩排名</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification"/><span>行业分析</span></span>}>
                                <Menu.Item key="9">各类型商品不同地区销售额度</Menu.Item>
                                <Menu.Item key="10">未来各地区销售额走势分析</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <div style={{display: 'flex'}}>
                            <Icon
                                 className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <Content style={{
                            background: '#fff', padding: 24, margin: 0, minHeight: 280,
                        }}
                        >
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}


export default App;
