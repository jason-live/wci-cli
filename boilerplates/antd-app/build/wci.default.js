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
  config.name = 'name';
  // 打包结构
  config.libs = {
    antd: [
      'antd',
    ],
    vender: [
      'react',
      'react-dom',
      'axios',
      'classnames',
      'prop-types',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-thunk',
      'moment',
    ],
  };
  return {
    ...config,
  };
};

module.exports = wciDefault;
