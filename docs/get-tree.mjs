import fs from 'fs/promises'
import path from 'path'

const ig = ['node_modules', '.config', '.git', 'bg', '.assets', '.docs', '.demo']

async function readDirectory(dir) {
  const db = {}
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
            child: await traverse(fullPath),
          })
        } else {
          if (/\.md$/.test(file)) {
            const content = await (
              await fs.readFile(fullPath, 'utf-8')
            ).replace(/\s+/g, '')
            db[fullPath] = content

            results.push({
              dir: false,
              file: true,
              name: file,
              path: fullPath,
            })
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
    return results
  }

  const depth1 = await traverse(dir)

  return [
    {
      name: dir,
      dir: true,
      file: false,
      child: depth1
    },
    db,
  ]
}

readDirectory('./').then(([files, db]) => {

  // fs.writeFile('./tree.json', JSON.stringify(files, null, 2)),
  fs.writeFile('./.assets/tree.json', JSON.stringify(files))
  fs.writeFile('./.assets/db.json', JSON.stringify(db))
})
