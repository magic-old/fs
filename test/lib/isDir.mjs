import path from 'path'
import fs from '../../src'

const fixtures = path.join(process.cwd(), 'test', '.fixtures')
const subfile1 = path.join(fixtures, 'subfile_1')
const subfile111 = path.join(fixtures, 'subdir_1', 'subdir_1_1', 'subfile_1_1_1')
const subdir1 = path.join(fixtures, 'subdir_1')

export default [
  { fn: async () => await fs.isDir(subdir1), expect: true },
  { fn: async () => await fs.isDir(fixtures), expect: true },
  { fn: async () => await fs.isDir(subfile1), expect: false },
  { fn: async () => await fs.isDir(subfile111), expect: false },
]
