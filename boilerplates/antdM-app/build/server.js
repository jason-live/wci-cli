const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const configuration = require('./config');
const Console = require('console');

const {
  DEV_PORT,
  PROD_PORT,
  PROJECT_DEV_SRC,
  PROJECT_PROD_SRC,
  PROJECT_HOSTNAME,
} = configuration;

const isDeveloping = process.env.NODE_ENV === 'development';
const port = isDeveloping ? DEV_PORT : PROD_PORT;

let server;

const createServer = (compiler, listenPath) => {
  const o = new WebpackDevServer(webpack(compiler), {
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true,
    inline: true,
    compress: true,
    contentBase: `./${listenPath}`,
    stats: {
      colors: true,
    },
    headers: {
      'X-Custom-Foo': 'bar',
    },
  });
  return o;
};

if (isDeveloping) {
  Console.log('==> 开发环境开始启动...');
  server = createServer(require('./webpack.dev.js'), PROJECT_DEV_SRC);
} else {
  Console.log('==> 编译环境开始启动...');
  server = createServer(require('./webpack.prod.js'), PROJECT_PROD_SRC);
}

server.listen(port, PROJECT_HOSTNAME, (err) => {
  if (err) {
    Console.log(err);
  }
  Console.log(`==> The app is running at ${PROJECT_HOSTNAME}:${port}`);
  Console.log('==> 即将自动开启浏览器，请稍等...');
});
