const theme = require('./app/scripts/util/theme');

const rules = [{
  test: /\.less/,
  packageName: 'node_modules/antd',
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
}];

exports.rules = rules;
