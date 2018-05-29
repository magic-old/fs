import { is } from '@magic/test'

import nfs from 'fs'

import { fs, promising } from '../src'

const isSync = k => k.endsWith('Sync')
const isStream = k => k.endsWith('Stream')

const isPromisified = fn => fn.toString().includes('createPromise') || is.promise(fn)

export default [
  { fn: Object.keys(nfs), expect: is.deep.eq(Object.keys(fs)), info: 'keys equal node.fs' },
  { fn: promising.every(p => isPromisified(fs[p])), expect: true, info: 'fns are promisified' },
]
