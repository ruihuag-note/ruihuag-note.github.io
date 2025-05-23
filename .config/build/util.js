const fs = require('fs')

const ignoreDir = [
	'_modules_.js','.npmignore',
	'.git', '.gitignore', '.vscode',
	'.nojekyll', '.prettierrc', 'sidebar.all.json',
	'blog', 'config',
	'index.html',
	'home.html',
	'package.json',
	'sidebar.json',
	'Pending.md','log.md',
	'push.bat', 'README.md',
	'temp-note.md', '_sidebar.md',
	'.assets', 'bar.md', '.keep', 'blog', 'pnpm-lock.yaml',
]

function toArray(params, ignore = ignoreDir) {
	if (Array.isArray(params)) return params.filter(i => {
		if (i.indexOf('.assets') > -1) return false
		if (i.indexOf('.jpg') > -1) return false
		return !ignore.includes(i)
	})
	return [params].filter(Boolean)
}


function isDir(url) {
	return fs.lstatSync(url).isDirectory();// true || false 判断是不是文件夹
}

module.exports = { toArray, isDir }