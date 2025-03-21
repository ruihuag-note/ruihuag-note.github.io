import fs from 'fs/promises'
import path from 'path'

const ig = ['node_modules', '.config', '.git', 'bg', '.assets', '.docs']

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
            dir: true,
            file: false,
            children: await traverse(fullPath),
          })
        } else {
          if (/\.md$/.test(file))
            results.push({
              dir: false,
              file: true,
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
    dir: true,
    file: false,
    children: await traverse(dir),
  }
}

readDirectory('./').then((files) =>
  fs.writeFile('./tree.json', JSON.stringify(files, null, 2)),
)
