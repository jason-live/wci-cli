import React from 'react';
import { Layout } from 'antd';
import logo from '../../assets/images/wci_logo.png';
import styles from './demo.less';

const { Header, Content } = Layout;

function Demo() {
  return (
    <Layout className="layout">
      <Header>
        <img className={styles.logo} src={logo} alt="logo" />
      </Header>
      <Content>
        <div className={styles.demo}>
          <div className={styles.name}>
            Hello wci
          </div>
          <div>A Webpack Continuous integration for React、Ant Design</div>
        </div>
      </Content>
    </Layout>
  );
}

export default Demo;
