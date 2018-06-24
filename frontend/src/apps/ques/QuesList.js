import React from 'react';
import { Card, Col, Row } from 'antd';


class QuesList extends React.Component{
  render(){
    return(
    <div>
      <p style={{ margin: '16px 0' }}>当前可用的问卷:</p>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="问卷1" bordered={false}>问卷描述</Card>
          </Col>
          <Col span={8}>
            <Card title="问卷2" bordered={false}>问卷描述</Card>
          </Col>
          <Col span={8}>
            <Card title="问卷3" bordered={false}>问卷描述</Card>
          </Col>
        </Row>
      </div>
      </div>
    );
  };
}

export default QuesList;