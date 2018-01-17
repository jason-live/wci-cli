import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { demo } from '../actions/demo.action';
import logo from '../../assets/images/wci_logo.png';
import styles from './demo.less';

const { Header, Content } = Layout;

@connect(
  state => ({
    demoData: state.demo.demoData,
  }),
  {
    demo,
  },
)
class Demo extends Component {
  static propTypes = {
    demo: PropTypes.func.isRequired,
    demoData: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  componentWillMount() {
    this.props.demo({
      title: 'Hello wci',
      content: 'A Webpack Continuous integration for React、Ant Design',
    });
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <img className={styles.logo} src={logo} alt="logo" />
        </Header>
        <Content>
          <div className={styles.demo}>
            <div className={styles.name}>
              {this.props.demoData.title}
            </div>
            <div>{this.props.demoData.content}</div>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Demo;
