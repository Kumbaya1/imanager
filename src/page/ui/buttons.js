import React from 'react';
import { Card, Button ,Radio} from 'antd'
import './ui.less'
export default class Buttons extends React.Component {
    state = {
        loading: true,
        size: 'default'
    }
    closeLoading = () => {
        this.setState({
            loading: false
        })
    }
    enterLoading = () => {
        this.setState({
            loading: true
        })
    }
    handleChangeSize = (e) => {
        this.setState({
            size: e.target.value
        });
    }
    render() {
        return (
            <div style={{padding:'30px'}}>
                <Card title="基本按钮" className="button-wrap">
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </Card>
                <Card title="loading按钮" className="button-wrap">
                    <Button type="primary" loading={this.state.loading}>
                        Loading
                    </Button>
                    <Button type="primary" size="small" loading={this.state.loading}>
                        Loading
                    </Button>
                    <Button type="primary" shape="circle" loading={this.state.loading} />

                    <Button type="primary" onClick={this.enterLoading}>
                        start loading!
                    </Button>
                    <Button type="primary" icon="poweroff" onClick={this.closeLoading}>
                        close loading!
                    </Button>
                </Card>
                <Card title="按钮尺寸" className="button-wrap">
                    <Button type="primary" size={this.state.size}>Primary</Button>
                    <Button size={this.state.size}>Normal</Button>
                    <Button type="dashed" size={this.state.size}>Dashed</Button>
                    <Button type="danger" size={this.state.size}>Danger</Button>
                    <Radio.Group  value={this.state.size} onChange={this.handleChangeSize}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                </Card>

            </div>
        )
    }
}