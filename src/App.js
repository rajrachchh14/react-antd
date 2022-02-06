import React from 'react';
// import Topbar from 'Topbar';
import { Layout, Menu, Breadcrumb } from 'antd';
import TopBars from './TopBars ';
import HeroSection from './HeroSection ';

import About from './About ';

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
          <About />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
