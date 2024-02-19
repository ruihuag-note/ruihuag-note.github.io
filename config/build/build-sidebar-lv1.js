const fs = require('fs')
const { toArray, isDir } = require('./util')

// 生成 _sidebar.md 文件
function write(path, index = 0) {
  const indexSpaces = new Array(index).fill('  ').join('')
  const dirs = toArray(fs.readdirSync(path, 'utf-8')).map((item) => {
    const newPath = path + '/' + item
    let content = item
    if (content.indexOf('.md') > -1) {
      content = `[${content.replace('.md', '')}](${newPath.replace('./', '')})`
    }

    const nextContent = isDir(newPath) ? write(newPath, index + 1) : ''

    return `${indexSpaces}* ${content}\n${nextContent}`
  })
  return dirs.join('')
}

function genJSON(path, index = 0) {
  const record = []
  toArray(fs.readdirSync(path, 'utf-8')).forEach((item) => {
    const newPath = path + '/' + item
    const name = item.replace('.md', '')
    const itemRecord = {
      name,
      children: []
    }
    if (isDir(newPath)) {
      itemRecord.children = genJSON(newPath, index + 1)
    } else {
      delete itemRecord.children
    }
    record.push(itemRecord)
  })
  return record
}

const res = write('./', 0)

fs.writeFileSync('./_sidebar.md', res)
const data = {
  url: 'https://ruihuag-note.github.io/',
  reg: 'https://ruihuag-note.github.io/{root}/index.html#{path}',
  path: genJSON('./', 0),
}
fs.writeFileSync('./_sidebar.json', JSON.stringify(data))
// fs.writeFileSync('./_sidebar.json', JSON.stringify(data, null, 2))
