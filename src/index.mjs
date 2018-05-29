import nfs from 'fs'
import util from 'util'

import * as lib from './lib'

export {
  isDir,
  getDirs,
  isFile,
  getFiles,
} from './lib'

export const fs = nfs

Object.keys(lib).forEach(key => {
  fs[key] = lib[key]
})

export const promising = [
  'access',
  'exists',
  'readFile',
  'close',
  'open',
  'read',
  'write',
  'rename',
  'truncate',
  'ftruncate',
  'rmdir',
  'fdatasync',
  'fsync',
  'mkdir',
  'readdir',
  'fstat',
  'lstat',
  'stat',
  'readlink',
  'symlink',
  'link',
  'unlink',
  'fchmod',
  'chmod',
  'fchown',
  'chown',
  'utimes',
  'futimes',
  'writeFile',
  'appendFile',
  'mkdtemp',
  'copyFile',
]

promising.map(key => {
  fs[key] = util.promisify(nfs[key])
})

export default fs
