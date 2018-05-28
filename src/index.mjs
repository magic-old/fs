import nfs from 'fs'
import util from 'util'

export const fs = {}

Object.entries(nfs).forEach(([key, val]) => {
  if (typeof val === 'function') {
    fs[key] = util.promisify(nfs[key])
  } else {
    fs[key] = nfs[key]
  }
})

export default fs
