## magic-fs

magic filesystem utilities

[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]

**
  uses magicjs (.mjs) files without compilation.
  always use latest node version.
**

##### Promisified
all callbacked fs functions are now util.promisify()'ed
and can be used in async functions

for a full list if promisified functions see
[index.mjs](https://github.com/magic/fs/blob/master/src/index.mjs)
```javascript
import fs from '@magic/fs'

const test = async () => {
  if(await fs.exists('/path')) {
    const content = await fs.readFile('/path')
    return content
  }
}
```

#### Additional Helper Functions:

##### isFile
test if a pathname is a file (stats.isFile)
```javascript
  const isAFile = await fs.isFile('/test/path')
```

##### isDir
test if a pathname is a dir (stats.isDir)
```javascript
  const isADir = await fs.isDir('/test/path')
```

[travis-image]: https://img.shields.io/travis/jaeh/node-zopfli-es/master.svg?label=Linux%20build
[travis-url]: https://travis-ci.org/jaeh/node-zopfli-es
[appveyor-image]: https://img.shields.io/appveyor/ci/jaeh/node-zopfli-es/master.svg?label=Windows%20build
[appveyor-url]: https://ci.appveyor.com/project/jaeh/node-zopfli-es/branch/master
