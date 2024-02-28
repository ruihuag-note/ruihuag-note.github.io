const { exec } = require('child_process')

exec('node config/build/build-sidebar-lv1.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`执行命令时出错: ${error}`)
    return
  }
  console.log(`命令输出: ${stdout}`)
})

exec('node config/build/build-sidebar-lv2.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`执行命令时出错: ${error}`)
    return
  }
  console.log(`命令输出: ${stdout}`)
})
