import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Form, Icon, Input, Button, message,
} from 'antd';
import styles from './LoginForm.less';

const FormItem = Form.Item;
const FormCreate = Form.create({});

@connect(({ passport, loading }) => ({
  ...passport,
  ...loading,
}))
@FormCreate
@withRouter
class LoginForm extends Component {
  static propTypes = {
    form: PropTypes.objectOf(PropTypes.any).isRequired,
    dispatch: PropTypes.func.isRequired,
    effects: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        if (!values.account) {
          message.destroy();
          message.error('请输入用户名');
        }
        if (!values.password) {
          message.destroy();
          message.error('请输入密码');
        }
        const signIn = await this.props.dispatch({
          type: 'passport/signIn',
          payload: {
            ...values,
          },
        });
        console.log(signIn);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { effects } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.LoginForm}>
        <FormItem>
          {getFieldDecorator('account', {})(<Input size="large" prefix={<Icon type="user" />} placeholder="用户名" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {})(<Input size="large" prefix={<Icon type="lock" />} type="password" placeholder="密码" />)}
        </FormItem>
        <Button
          size="large"
          htmlType="submit"
          disabled={effects['passport/signIn']}
        >
          登陆
        </Button>
      </Form>
    );
  }
}

export default LoginForm;
