import React from 'react';
import { Row, Col } from 'antd';

function About() {
  return (
    <div className="container-fluid">
      <Row gutter={[16, 16]}>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
    </div>
  );
}

export default About;
