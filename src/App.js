import React from 'react';
// import Topbar from 'Topbar';
import { Layout, Menu, Breadcrumb } from 'antd';
import TopBars from './TopBars ';
import HeroSection from './HeroSection ';

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div>
      <Layout className="mainLayout">
        <Header>
          <TopBars />
        </Header>

        <Content>
          <HeroSection />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
