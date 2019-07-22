import { request } from '../../util/request';

const { saasApi } = process.env.MODULE;
const { host } = saasApi;

/**
 * 登陆
 * @param {*} data
 */
export const signIn = data => request({
  url: '/oper/account/sign-in',
  method: 'POST',
  data,
  host,
});

/**
 * 登出
 * @param {*} data
 */
export const signOut = data => request({
  url: '/oper/account/sign-out',
  method: 'POST',
  data,
  host,
});
