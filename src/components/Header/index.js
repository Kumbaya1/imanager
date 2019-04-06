import React from 'react'
import './index.less'
export default class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <span>hi,</span>
                <span className="gap">稀饭</span>
                <span className="gap">退出</span>
            </div>
        )
    }
}