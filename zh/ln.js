
const args = {
  "": {
    "type": "string",
    "name": "文件或目录路径",
    "required": true
  },
  "path": {
    "type": "string",
    "name": "链接路径",
    "required": true
  },
  "-s": {
    "type": "check",
    "name": "创建符号链接而不是硬链接"
  },
  "-f": {
    "type": "check",
    "name": "强制执行操作而不提示用户进行确认"
  },
  "-i": {
    "type": "check",
    "name": "在覆盖现有文件时提示用户进行确认"
  },
  "-n": {
    "type": "check",
    "name": "将符号链接视为常规文件或目录而不会进行解引用"
  },
  "-r": {
    "type": "check",
    "name": "创建相对符号链接"
  },
  "-v": {
    "type": "check",
    "name": "详细输出操作的信息"
  },
  "-t": {
    "type": "string",
    "name": "指定目标目录"
  },
  "-T": {
    "type": "check",
    "name": "将要创建的符号链接视为指向目录本身，而不是目录中的文件"
  },
  "-h": {
    "type": "check",
    "name": "显示命令帮助信息"
  },
  "-V": {
    "type": "check",
    "name": "显示命令版本信息"
  }
}
  ;
module.exports = {
  name: 'ln',
  desc: 'ln命令用于创建硬链接和符号链接。硬链接指向同一文件的另一个副本，而符号链接指向另一个文件或目录。',
  usages: [
    {
      form: { ...args },
      filter: (cmd, values) => cmd + ' ' + values.path
    }
  ],
};