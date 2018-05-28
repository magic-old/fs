import { is } from '@magic/test'

import nfs from 'fs'

import fs from '../src'

export default [
  { fn: Object.keys(nfs), expect: is.deep.eq(Object.keys(fs)), info: 'keys equal node.fs' },
  { fn: Object.values(nfs), expect: t => !is.fn(t) || is.fn(t.then), info: 'funcs are promises' },
]
