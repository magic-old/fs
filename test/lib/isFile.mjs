import path from 'path'
import { isFile } from '../../src/lib'

const fixtures = path.join(process.cwd(), 'test', '.fixtures')
const subfile1 = path.join(fixtures, 'subfile_1')
const subfile111 = path.join(fixtures, 'subdir_1', 'subdir_1_1', 'subfile_1_1_1')
const subdir1 = path.join(fixtures, 'subdir_1')

export default [
  { fn: async () => await isFile(subfile1), expect: true },
  { fn: async () => await isFile(subfile111), expect: true },
  { fn: async () => await isFile(subdir1), expect: false },
  { fn: async () => await isFile(fixtures), expect: false },
]
