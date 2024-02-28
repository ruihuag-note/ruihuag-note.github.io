const { exec } = require('child_process')
const errorCallback = (error, stdout, stderr) => {
  if (error) {
    console.error(`执行命令时出错: ${error}`)
    return
  }
  console.log(`命令输出: ${stdout}`)
}
console.log('Running Version before...')
exec('node config/build/update-version.js', errorCallback)


