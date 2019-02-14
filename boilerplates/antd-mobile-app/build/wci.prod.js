const config = {};

const wciProd = () => {
  // 代码目录
  config.output = 'dist';
  // 请求接口
  config.apis = {
    api: {
      host: 'https://erpapi.fuliaoyi.com:9051',
      path: '',
    },
    redirect: {
      host: 'https://bss.fuliaoyi.com',
      path: '',
    },
  };
  return {
    ...config,
  };
};

module.exports = wciProd;
