'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findSubFiles = exports.findSubDirectories = exports.filterSubFiles = exports.filterSubDirectories = exports.isFile = exports.isDir = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var isDir = exports.isDir = function isDir(file) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];

  _fs2.default.stat(file, function (err, stats) {
    if (err) {
      throw err;
    }

    cb(!err && stats.isDirectory());
  });
};

var isFile = exports.isFile = function isFile(file) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];

  _fs2.default.stat(file, function (err, stats) {
    if (err) {
      throw err;
    }

    cb(!err && stats.isFile());
  });
};

var filterSubDirectories = exports.filterSubDirectories = function filterSubDirectories(files) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];

  _async2.default.filter(files, isDir, function (hosts) {
    cb(null, hosts);
  });
};

var filterSubFiles = exports.filterSubFiles = function filterSubFiles(files) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];

  _async2.default.filter(files, isFile, function (hosts) {
    cb(null, hosts);
  });
};

var findSubDirectories = exports.findSubDirectories = function findSubDirectories(dir) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];

  _fs2.default.readdir(dir, function (err, files) {
    if (err) {
      throw err;
    }

    files = Object.keys(files).map(function (key) {
      return _path2.default.join(dir, files[key]);
    });

    filterSubDirectories(files, cb);
  });
};

var findSubFiles = exports.findSubFiles = function findSubFiles(dir) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];

  _fs2.default.readdir(dir, function (err, files) {
    if (err) {
      throw err;
    }

    files = Object.keys(files).map(function (key) {
      return _path2.default.join(dir, files[key]);
    });

    filterSubFiles(files, cb);
  });
};

//# sourceMappingURL=index.js.map