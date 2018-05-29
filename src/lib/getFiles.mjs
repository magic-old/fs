import path from 'path'

import fs from '../index'

export const getFiles =
  async (dir, recursive = false) => {
    const entries = await fs.readdir(dir)
    return await Promise.all(entries.map(async file => {
      const filePath = path.join(dir, file)
      if (recursive && await fs.isDir(filePath)) {
        return await getFiles(filePath, recursive)
      } else if (await fs.isFile(filePath)) {
        return filePath
      }
    })).then(entries => entries.filter(a => a))
  }

export default getFiles
