const config = {};

const wciDev = () => {
  // 代码目录
  config.output = 'dev';
  // eslint校验
  config.eslint = true;
  // 请求接口
  config.apis = {
    api: {
      host: 'api',
      path: '',
    },
    redirect: {
      host: 'hostname',
      path: '',
    },
  };
  return {
    ...config,
  };
};

module.exports = wciDev;
