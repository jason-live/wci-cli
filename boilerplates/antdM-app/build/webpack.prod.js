const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { config, util } = require('./webpack.config');
const configuration = require('./config');
const theme = require('../app/scripts/util/theme');

const {
  getPostCssLoader,
  getLessLoader,
  getCssLoader,
} = util;

const {
  PROJECT_PATH,
  PROJECT_DEV_SRC,
  PROJECT_PROD_SRC,
  PROD_API,
  PROJECT_INDEX,
  VENDOR,
  VERSION,
} = configuration;

const cversion = process.env.v || '';

const extractApp = new ExtractTextPlugin(`css/app.${VERSION}${cversion}.[hash:8].css`);
const extractAntd = new ExtractTextPlugin(`css/lib.${VERSION}${cversion}.[hash:8].css`);

config.devtool = 'cheap-module-source-map';

/**
 * [entry description]
 * @type {Object}
 */
config.entry = {
  app: path.resolve(PROJECT_PATH, `${PROJECT_INDEX}/`),
  vendor: VENDOR,
};

/**
 * [output description]
 * @type {Object}
 */
config.output = {
  filename: `js/[name].${VERSION}${cversion}.[chunkHash:8].js`,
  path: path.resolve(PROJECT_PATH, PROJECT_PROD_SRC),
  publicPath: '/',
};

/**
 * [loader description]
 * @type {String}
 */
config.module.rules[0].use.push({
  loader: 'eslint-loader',
});

/**
 * [test description]
 * @type {RegExp}
 */
config.module.rules.push({
  test: /\.less/,
  include: path.resolve(PROJECT_PATH, 'node_modules/antd'),
  use: extractAntd.extract([getCssLoader('antd'), getLessLoader('antd', theme)]),
});

/**
 * set develop antd styles-loader
 * @type {RegExp}
 */
config.module.rules.push({
  test: /\.css/,
  include: path.resolve(PROJECT_PATH, 'node_modules/normalize.css'),
  use: [getCssLoader('app')],
});

/**
 * [test description]
 * @type {RegExp}
 */
config.module.rules.push({
  test: /\.less/,
  include: path.resolve(PROJECT_PATH, PROJECT_DEV_SRC),
  use: extractApp.extract([getCssLoader('app'), getPostCssLoader('app'), getLessLoader('app')]),
});

config.module.rules.push({
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'assets/[name].[ext]?[hash:8]',
      },
    },
  ],
});

/**
 * [__DEV__ description]
 * @type {[type]}
 */
config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
  'process.env.API': JSON.stringify(PROD_API),
  'process.env.V': JSON.stringify(`${VERSION}${cversion}`),
}));

config.plugins.push(extractAntd);
config.plugins.push(extractApp);
config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
  names: ['vendor', 'manifest'],
  minChunks: Infinity,
}));

module.exports = config;
