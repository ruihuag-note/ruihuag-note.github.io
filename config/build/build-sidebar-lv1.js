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
      children: [],
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
function genJSON2(path, index = 0) {
  const record = []
  toArray(fs.readdirSync(path, 'utf-8')).forEach((item) => {
    const newPath = path + '/' + item
    const name = item.replace('.md', '')
    const itemRecord = {
      name,
      children: [],
      content: '',
    }
    if (isDir(newPath)) {
      itemRecord.children = genJSON2(newPath, index + 1)
      delete itemRecord.content
    } else {
      delete itemRecord.children
      try {
        // console.log(newPath)
        const data = fs.readFileSync(newPath, 'utf8').toString()
        // console.log(data)
        itemRecord.content = data
        // itemRecord.content = data.replace(/\s/g, "")
        // itemRecord.content = data.replace(/[\s,.?!#`<>=/\\*:-"']/g, "")
      } catch (error) {
        console.log('Read File Error:', newPath)
      }
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
  path: genJSON('./', 0)
}
fs.writeFileSync('./sidebar.json', JSON.stringify(data))
// fs.writeFileSync('./sidebar.json', JSON.stringify(data, null, 2))

const data2 = {
  url: 'https://ruihuag-note.github.io/',
  reg: 'https://ruihuag-note.github.io/{root}/index.html#{path}',
  path: genJSON2('./', 0)
}
fs.writeFileSync('./sidebar.all.json', JSON.stringify(data2))
// fs.writeFileSync('./sidebar.all.json', JSON.stringify(data2, null, 2))
