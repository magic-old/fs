import path from 'path'

import fs from '..'

export const getFiles =
  async (dir = process.cwd(), recursive = false) => {
    if (await fs.isFile(dir)) {
      return [dir]
    }

    const files = await fs.readdir(dir)
    let collected = []
    await Promise.all(files.map(async file => {
      const filePath = path.join(dir, file)

      if (recursive && await fs.isDir(filePath)) {
        const dirs = await getFiles(filePath, recursive)
        dirs.forEach(dir => collected.push(dir))
      } else if (await fs.isFile(filePath)) {
        collected.push(filePath)
      }
    }))

    return collected
  }

export default getFiles
