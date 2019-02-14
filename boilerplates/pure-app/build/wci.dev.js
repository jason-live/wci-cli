const config = {};

const wciDev = () => {
  // 代码目录
  config.output = 'dev';
  // eslint校验
  config.eslint = true;
  // 请求接口
  config.apis = {
    api: {
      host: 'http://fly.fuliaoyi.com',
      path: '',
    },
    redirect: {
      host: 'http://127.0.0.1:8032',
      path: '',
    },
  };
  return {
    ...config,
  };
};

module.exports = wciDev;
