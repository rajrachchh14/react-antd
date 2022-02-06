import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
// const { Header, Content, Footer } = Layout;

function TopBars() {
  // const {  Layout, Menu, Breadcrumb  } = antd;
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">{/* <i className="fa fa-eye"></i> */}</div>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">ONE</Menu.Item>
          <Menu.Item key="2">Two</Menu.Item>
        </Menu>

        {/* <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content> */}
        {/* <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </div>
    </div>
  );
}

export default TopBars;
