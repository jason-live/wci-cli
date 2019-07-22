import axios from 'axios';
import { notification } from 'antd';

axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.withCredentials = true;

const logger = (path, desc, data) => {
  console.log(`${new Date().toLocaleString()}【 API=${path} 】【${desc}：】`, data);
};

const request = async (options = { method: 'GET', data: {} }) => {
  if (process.env.NODE_ENV === 'development') {
    logger(options.url, '接口请求', options.data);
  }
  try {
    const { status, data } = await axios({
      baseURL: options.host,
      url: options.url || '/',
      data: options.data || {},
      params: options.params || {},
      method: options.method.toUpperCase(),
      timeout: 15 * 1000,
      withCredentials: true,
    });
    if (status === 200) {
      return data.data;
    }
    notification.destroy();
    notification.error({
      message: data.des,
      description: `${data.code} - ${data.msg}`,
    });
    return null;
  } catch (error) {
    const { response } = error;
    if (response) {
      const { status, data } = response;
      notification.destroy();
      notification.error({
        message: status,
        description: `${data.message}`,
      });
    } else {
      notification.destroy();
      notification.error({
        message: '网络异常',
        description: '网络异常, 请稍后再试',
      });
    }
    return null;
  }
};

const log = () => { };

export {
  request,
  log,
};
