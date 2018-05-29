import { is, tryCatch } from '@magic/test'
import path from 'path'
import fs from '../../src'

const fixtures = path.join(process.cwd(), 'test', '.fixtures')
const subfile1 = path.join(fixtures, 'subfile_1')
const subfile111 = path.join(fixtures, 'subdir_1', 'subdir_1_1', 'subfile_1_1_1')
const subdir1 = path.join(fixtures, 'subdir_1')

export default [
  { fn: tryCatch(fs.getFiles, fixtures), expect: is.len.equal(1) },
  { fn: tryCatch(fs.getFiles), expect: is.len.equal(7), info: 'returns files in process.cwd without args' },
  { fn: tryCatch(fs.getFiles, fixtures), expect: is.deep.eq([subfile1]), info: 'returns correct' },
  { fn: tryCatch(fs.getFiles, fixtures, true), expect: is.len.equal(2), info: 'recursive works' },
]
