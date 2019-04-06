import React from 'react'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import menuList from './../../config/menulist';
import './index.less'

console.log(menuList)
const SubMenu = Menu.SubMenu;
export default class Navleft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MenuItems: []
        }

    }
    componentWillMount() {
        const Menu = this.formatMenuList(menuList);
        this.setState({
            MenuItems: Menu
        })
    }
    formatMenuList(data) {
        return data.map(item => {
            if (item.children) {
                return (
                    <SubMenu title={item.name} key={item.key}>
                        {this.formatMenuList(item.children)}
                    </SubMenu>)
            } else {
                return (<Menu.Item key={item.key}>
                    <NavLink to={item.key}>{item.name}</NavLink>
                </Menu.Item>
                )
            }
        })
    }
    render() {
        return (
            <div className="nav-container">
                <div className="logo">
                    <img src="/images/if_brother_3231124.png" alt="logo" className="logo-img" />
                    <h1 className="nav-title">imoocmanager</h1>
                </div>
                <Menu theme="dark">
                    {this.state.MenuItems}
                </Menu>
            </div>

        )
    }
}