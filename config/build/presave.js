const { exec } = require('child_process')

console.log('Running lv1 before')
exec('node config/build/build-sidebar-lv1.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`执行命令时出错: ${error}`)
    return
  }
  console.log(`命令输出: ${stdout}`)
})

console.log('Running lv2 before')
exec('node config/build/build-sidebar-lv2.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`执行命令时出错: ${error}`)
    return
  }
  console.log(`命令输出: ${stdout}`)
})

