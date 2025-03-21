import fs from 'fs/promises'
import path from 'path'

const ig = ['node_modules', '.config', '.git', 'bg']

async function readDirectory(dir) {
  async function traverse(currentPath) {
    const results = []
    const files = await fs.readdir(currentPath)
    for (const file of files) {
      if (ig.includes(file)) continue
      try {
        const fullPath = path.join(currentPath, file)
        const stat = await fs.stat(fullPath)
        if (stat.isDirectory()) {
          results.push({
            name: file,
            children: await traverse(fullPath),
          })
        } else {
          results.push({
            name: file,
            path: fullPath,
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
    return results
  }

  return {
    name: dir,
    children: await traverse(dir),
  }
}

readDirectory('./').then((files) =>
  fs.writeFile('./toc.json', JSON.stringify(files, null, 2)),
)
