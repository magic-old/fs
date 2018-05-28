import fs from '../'

export const isFile =
  async file =>
    await fs.stat(file).then(s => s.isFile())

export default isFile
