const config = {};

const wciRelease = () => {
  // 代码目录
  config.output = 'release';
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

module.exports = wciRelease;
