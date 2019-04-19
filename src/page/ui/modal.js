import React from 'react';
import { Card, Button, Modal } from 'antd'
import './ui.less'
export default class Modals extends React.Component {
    state = {
        visible: false
    }
    handleOk = () => {
        this.setState({
            visible: false
        })
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    openModal = () => {
        this.setState({
            visible: true
        })
    }
    handleOpenConfromModal = () => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Bla bla ...',
            okText: '确认',
            cancelText: '取消',
            onOk:()=>{
                console.log('点击了确认')
            }
        })
    }
    render() {
        return (
            <div style={{ padding: '30px' }}>
                <Card title="对话框" className="button-wrap">
                    <Button type="primary" onClick={this.openModal} >打开基本对话框</Button>
                    <br />
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        style={{top:20}}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </Card>
                <Card title="简单确认狂 confirm">
                    <Button type="primary" onClick={this.handleOpenConfromModal}>打开</Button>
                </Card>
            </div>
        )
    }
}