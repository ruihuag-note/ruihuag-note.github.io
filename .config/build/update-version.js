const fs = require('fs')
const path = require('path')

// 读取 package.json 文件
// const packagePath = path.join(__dirname, '../../../package.json')
const packagePath = path.join(__dirname, '../../package.json')
const packageData = require(packagePath)

// 修改版本号
// packageData.version = '1.2.3' // 将版本号修改为你想要的值
const { version } = packageData
const list = version.split('.')
const newVersion = list
  .map((item, i) => {
    if (i + 1 === list.length) {
      return Number(item) + 1
    }
    return item
  })
  .join('.')
// console.log(newVersion, version)
packageData.version = newVersion
// 将修改后的数据写入 package.json 文件
fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2));

console.log('版本号已修改成功！')
