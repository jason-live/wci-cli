import { request } from '../util/request';

// 获取字典
export const dic = ({ dicKey }) => request({
  url: `/api/v1/acm/key?key=${dicKey}`,
  method: 'GET',
});

// 获取品类
export const categorys = () => request({
  url: '/api/v1/categories',
  method: 'GET',
});
