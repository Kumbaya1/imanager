import React from 'react';
import {Row,Col} from 'antd'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navleft from '../../components/Navleft'
export default class Admin extends React.Component{
    render(){
        return (
            <Row>
                <Col span={3}>
                    <Navleft>this is nam=vleft</Navleft>
                </Col>
                <Col span={21} style={{position:'relative',height:'100vh',overflow:'auto'}}>
                    <Header></Header>
                    {this.props.children}
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}