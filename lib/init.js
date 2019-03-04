'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _vinylFs = require('vinyl-fs');

var _vinylFs2 = _interopRequireDefault(_vinylFs);

var _fs = require('fs');

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

var _emptyDir = require('empty-dir');

var _leftPad = require('left-pad');

var _leftPad2 = _interopRequireDefault(_leftPad);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function info(type, message) {
  console.log(_chalk2.default.green.bold((0, _leftPad2.default)(type, 12)) + '  ' + message);
}

function error(message) {
  console.error(_chalk2.default.red(message));
}

function success(message) {
  console.error(_chalk2.default.green(message));
}

function init(_ref) {
  var isAntd = _ref.isAntd,
      type = _ref.type,
      install = _ref.install;

  var appName = isAntd ? type : 'pure-app';
  var cwd = (0, _path.join)(__dirname, '../boilerplates', appName);
  var dest = process.cwd();
  var projectName = (0, _path.basename)(dest);

  console.log('Creating a new Wci app in ' + dest + '.');
  console.log();

  _vinylFs2.default.src(['**/*', '!node_modules/**/*'], { cwd: cwd, cwdbase: true, dot: true }).pipe(template(dest, cwd)).pipe(_vinylFs2.default.dest(dest)).on('end', function () {
    info('rename', 'gitignore -> .gitignore');
    (0, _fs.renameSync)((0, _path.join)(dest, 'gitignore'), (0, _path.join)(dest, '.gitignore'));
    if (install) {
      info('run', 'npm install');
      require('./install')(printSuccess);
    } else {
      printSuccess();
    }
  }).resume();

  function printSuccess() {
    success('\n      Success! Created ' + projectName + ' at ' + dest + '.\n\n      Inside that directory, you can run several commands:\n        * npm start: Starts the development server.\n        * npm run dist: Bundles the app into dist for production.\n\n      We suggest that you begin by typing:\n        cd ' + dest + '\n        npm start\n\n      Happy hacking!');
  }
}

function template(dest, cwd) {
  return _through2.default.obj(function (file, enc, cb) {
    if (!file.stat.isFile()) {
      return cb();
    }

    info('create', file.path.replace(cwd + '/', ''));
    this.push(file);
    cb();
  });
}

exports.default = init;
module.exports = exports['default'];