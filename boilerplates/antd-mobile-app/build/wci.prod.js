const config = {};

const wciProd = () => {
  // 代码目录
  config.output = 'dist';
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

module.exports = wciProd;
