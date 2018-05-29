import {is} from '@magic/test'
import nfs from 'fs'
import util from 'util'

export const fs = nfs

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
