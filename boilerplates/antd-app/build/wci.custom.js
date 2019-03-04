/* eslint-disable import/no-dynamic-require */
const projectDirectory = process.cwd();
const theme = require(`${projectDirectory}/app/scripts/util/theme`);

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
        javascriptEnabled: true,
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
        javascriptEnabled: true,
      },
    },
  ],
}];

exports.rules = rules;
