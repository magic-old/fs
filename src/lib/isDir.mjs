import fs from '..'

export const isDir =
  async file =>
    await fs.stat(file).then(s => s.isDirectory())

export default isDir
