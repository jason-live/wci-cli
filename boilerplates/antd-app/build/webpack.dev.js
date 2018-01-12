const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const { config, util } = require('./webpack.config');
const configuration = require('./config');
const theme = require('../app/scripts/util/theme');

const {
  getStyleLoader,
  getPostCssLoader,
  getLessLoader,
  getCssLoader,
} = util;

const {
  PROJECT_HOSTNAME,
  DEV_PORT,
  DEV_API,
  PROJECT_DEV_SRC,
  APP_INDEX,
  PROJECT_PATH,
  ISESLINT,
  VERSION,
} = configuration;

/**
 * set srouce-map, use debug
 * @type {String}
 */
config.devtool = 'cheap-module-eval-source-map';

/**
 * set develop entry
 * 1. use webpack-dev-hot
 * @type {Array}
 */
config.entry = [
  'webpack/hot/dev-server',
  `webpack-dev-server/client?http://${PROJECT_HOSTNAME}:${DEV_PORT}`,
  path.resolve(PROJECT_PATH, `${APP_INDEX}/`),
];

/**
 * set develop output
 * @type {Object}
 */
config.output = {
  filename: 'js/bundle.js',
  path: path.resolve(PROJECT_PATH, PROJECT_DEV_SRC),
  publicPath: `http://${PROJECT_HOSTNAME}:${DEV_PORT}/`,
};

/**
 * [if description]
 * @param  {[type]} ISESLINT [description]
 * @return {[type]}          [description]
 */
if (ISESLINT) {
  config.module.rules[0].use.push({
    loader: 'eslint-loader',
  });
}

/**
 * set develop antd styles-loader
 * @type {RegExp}
 */
config.module.rules.push({
  test: /\.less/,
  include: path.resolve(PROJECT_PATH, 'node_modules/antd'),
  use: [getStyleLoader(), getCssLoader('antd'), getLessLoader('antd', theme)],
});

/**
 * set develop app styles-loader
 * @type {RegExp}
 */
config.module.rules.push({
  test: /\.less/,
  include: path.resolve(PROJECT_PATH, PROJECT_DEV_SRC),
  use: [getStyleLoader(), getCssLoader('app'), getPostCssLoader('app'), getLessLoader('app')],
});

config.module.rules.push({
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {},
    },
  ],
});


config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development'),
  'process.env.API': JSON.stringify(DEV_API),
  'process.env.V': JSON.stringify(VERSION),
}));
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new OpenBrowserPlugin({
  url: `http://${PROJECT_HOSTNAME}:${DEV_PORT}`,
}));

module.exports = config;
