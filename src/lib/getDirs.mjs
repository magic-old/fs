import path from 'path'

import fs from '..'

export const getDirs =
  async (dir, recursive = false) => {
    if (await fs.isFile(dir)) {
      return []
    }

    const files = await fs.readdir(dir)
    let collected = []
    await Promise.all(files.map(async file => {
      const filePath = path.join(dir, file)

      if (await fs.isDir(filePath)) {
        collected.push(filePath)

        if (recursive) {
          const dirs = await getDirs(filePath)
          dirs.map(dir => collected.push(dir))
        }
      }
    }))

    return collected
  }

export default getDirs
