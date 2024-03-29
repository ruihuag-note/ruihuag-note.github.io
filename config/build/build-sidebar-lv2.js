const fs = require('fs')
const { toArray, isDir } = require('./util')

// 通过模板生成对应模块的入口文件index.html
// const map = {}
function write(path, index = 0, lv = 0) {
  const indexSpaces = new Array(index).fill('  ').join('')
  const dirs = toArray(fs.readdirSync(path, 'utf-8'))
    .map((item) => {
      if (index === 0 && lv === 0) {
        try {
          const _path = path + item + '/index.html'
          const __index__html = fs.readFileSync('./config/index.html')
          fs.writeFileSync(
            _path,
            __index__html
              .toString()
              .replace(
                '__ruihuag__website__name__',
                `__ruihuag__website__${item}__`
              )
          )
          const data = write(path + item, 0, 1) || ''
          // if (!item || typeof data !== 'string') {
          if (!item) {
            return
          }
          // console.log(path, item, data)
          // map[item] = data
          fs.writeFileSync(
            `./${item}/_sidebar.md`,
            (Array.isArray(data) ? data.join('') : data).replaceAll(`](${item}/`, '](')
            // data.toString().replaceAll(`](${item}/`, '](')
          )
        } catch (error) {
          console.error(error)
        }
        return
      }
      const newPath = path + '/' + item
      const isDirStatus = isDir(newPath)
      const _newPath = newPath.replace('./', '')
      let nextContent = ''
      const newDirs = isDirStatus
        ? toArray(fs.readdirSync(newPath, 'utf-8'))
        : []
      const nextLvHasIndexMd = newDirs.includes('index.md')
      let content = item

      if (nextLvHasIndexMd) {
        content = `[${item}](${_newPath}/index.md)`
      } else if (content.indexOf('.md') > -1) {
        content = `[${content
          .replace('.md', '')
          .replace('index', 'home')}](${_newPath})`
      }

      if (isDirStatus) {
        const data = write(newPath, index + 1)
        nextContent = data.join('')
      }
      return `${indexSpaces}* ${content}\n${nextContent}`
    })
    .filter(Boolean)

  // return dirs.join('')
  return dirs
}
console.log('lv2 running start...')
write('./', 0)
console.log('lv2 running end...')
// console.log(map)
