import React from 'react';
import { Card, Button } from 'antd'
export default class Buttons extends React.Component {
    render() {
        return (
            <div>
                <Card title="基本按钮" className="button-wrap">
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </Card>
            </div>
        )
    }
}