const config = {};

const wciRelease = () => {
  // 代码目录
  config.output = 'release';
  // 请求接口
  config.apis = {
    api: {
      host: 'http://tfly.fuliaoyi.com',
      path: '',
    },
    redirect: {
      host: 'https://bss-fly.fuliaoyi.com',
      path: '',
    },
  };
  return {
    ...config,
  };
};

module.exports = wciRelease;
