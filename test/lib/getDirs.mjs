import { is, tryCatch } from '@magic/test'
import path from 'path'
import fs from '../../src'

const fixtures = path.join(process.cwd(), 'test', '.fixtures')
const subfile1 = path.join(fixtures, 'subfile_1')
const subfile111 = path.join(fixtures, 'subdir_1', 'subdir_1_1', 'subfile_1_1_1')
const subdir1 = path.join(fixtures, 'subdir_1')

export default [
  { fn: tryCatch(fs.getDirs, fixtures), expect: is.len.eq(1), info: 'returns array with dirs' },
  { fn: tryCatch(fs.getDirs, fixtures), expect: is.deep.eq([subdir1]), info: 'returns correct' },
  { fn: tryCatch(fs.getDirs, fixtures, true), expect: is.len.eq(2), info: 'recursive works' },
]
