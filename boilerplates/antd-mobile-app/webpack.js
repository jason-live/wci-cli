const theme = require('./app/scripts/util/theme');

const rules = [{
  test: /\.less/,
  packageName: 'node_modules/antd-mobile',
  useDev: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'less-loader',
      options: {
        modifyVars: theme,
      },
    },
  ],
  useProd: [
    {
      loader: 'css-loader',
    },
    {
      loader: 'less-loader',
      options: {
        modifyVars: theme,
      },
    },
  ],
}, {
  test: /\.css/,
  packageName: 'node_modules/normalize.css',
  useDev: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
    }
  ],
  useProd: [
    {
      loader: 'css-loader',
    }
  ],
}];

exports.rules = rules;
