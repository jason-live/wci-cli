const config = {};

const wciDefault = () => {
  // 代码目录
  config.src = 'app';
  // 本地域名
  config.hostname = '127.0.0.1';
  // 本地端口
  config.port = '8032';
  // 入口文件
  config.index = `${config.src}/index.js`;
  // 项目名称
  config.name = '☁️☁️';
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

module.exports = wciDefault;
