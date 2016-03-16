import fs from 'fs';
import async from 'async';
import path from 'path';

const noop = () => {};

export const isDir =
  (file, cb = noop) => {
    fs.stat(file, (err, stats) => {
      if (err) {
        throw err;
      }

      cb(!err && stats.isDirectory());
    });
  };

export const isFile =
  (file, cb = noop) => {
    fs.stat(file, (err, stats) => {
      if (err) {
        throw err;
      }

      cb((!err && stats.isFile()));
    });
  };

export const filterSubDirectories =
  (files, cb = noop) => {
    async.filter(files, isDir, hosts => {
      cb(null, hosts);
    });
  };

export const filterSubFiles =
  (files, cb = noop) => {
    async.filter(files, isFile, hosts => {
      cb(null, hosts);
    });
  };

export const findSubDirectories =
  (dir, cb = noop) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        throw err;
      }

      files = Object.keys(files).map(
        (key) =>
          path.join(dir, files[key])
      );

      filterSubDirectories(files, cb);
    });
  };

export const findSubFiles =
  (dir, cb = noop) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        throw err;
      }

      files = Object.keys(files).map(
        key =>
          path.join(dir, files[key])
      );

      filterSubFiles(files, cb);
    });
  };
