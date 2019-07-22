import React, { Component } from 'react';
import LoginForm from './form/LoginForm';
import styles from './SignIn.less';
import logo from '../../../assets/images/logo.png';

class Login extends Component {
  static propTypes = {
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className={styles.Login}>
        <div className={styles.content}>
          <div className={styles.top}>
            <img src={logo} alt="logo" />
            <div className={styles.name}>辅料易 xxx 系统</div>
            <h3>登陆 v1.0.0</h3>
          </div>
          <div className={styles.form}>
            <LoginForm />
          </div>
        </div>
        <div className={styles.copyright}>
          <div>
            ©辅料易™ 2018~2019
          </div>
          <div>
            沪ICP备16036612号
          </div>
          <div>
            上海饰的网络科技有限公司 版权所有
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
