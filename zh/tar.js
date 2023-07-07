
const args = {
  "": {
    "name": "文件或目录路径",
    "required": true,
    "repeatable": true
  },
  "-f": {
    "type": "string",
    "name": "指定归档文件的名称或路径"
  },
  "-v": {
    "type": "check",
    "name": "显示详细的操作过程"
  },
  "-z": {
    "type": "check",
    "name": "通过gzip压缩或解压缩归档文件",
    "group": "compress format"
  },
  "-j": {
    "type": "check",
    "name": "通过bzip2压缩或解压缩归档文件",
    "group": "compress format"
  },
  "-J": {
    "type": "check",
    "name": "通过xz压缩或解压缩归档文件",
    "group": "compress format"
  },
  "-P": {
    "type": "check",
    "name": "保留绝对路径"
  },
  "-C": {
    "type": "string",
    "name": "切换到指定目录后执行操作"
  },
  "--exclude": {
    "type": "string",
    "name": "排除指定的文件或目录"
  }
}
  ;
module.exports = {
  name: 'tar',
  desc: 'tar 命令是一个用于在 Linux 和 Unix 操作系统中打包和压缩文件的命令行工具。它的名称是 "tape archive" 的缩写，因为它最初是用于在磁带上创建备份的。',
  usages: [
    {
      name: '创建新的归档文件',
      form: { ...args },
      optionsPartFilter: (cmd, values) => '-c ' + cmd,
    },
    {
      name: '添加文件到归档文件',
      form: { ...args },
      optionsPartFilter: (cmd, values) => '-r ' + cmd,
    },
    {
      name: '仅添加较新文件到归档文件',
      form: { ...args },
      optionsPartFilter: (cmd, values) => '-u ' + cmd,
    },
    {
      name: '显示归档文件内容',
      form: { ...args },
      optionsPartFilter: (cmd, values) => '-t ' + cmd,
      remove: [''],
    },
    {
      name: '从归档文件提取文件和目录',
      form: (() => {
        let r = { ...args }
        r[''].desc = '目标目录路径'
        return r
      })(),
      optionsPartFilter: (cmd, values) => '-x ' + cmd,
    },
    {
      name: '比较归档文件与文件系统之间的差异',
      form: (() => {
        let r = { ...args }
        r[''].desc = '目录路径'
        return r
      })(),
      optionsPartFilter: (cmd, values) => '-d ' + cmd,
    },
  ],
};