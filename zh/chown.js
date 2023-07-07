
const args = {
  "value": {
    "type": "string",
    "name": "文件或目录路径",
    "required": true
  },
  "owner": {
    "type": "string",
    "name": "拥有者",
    "required": true,
  },
  "group": {
    "type": "string",
    "name": "拥有者用户组",
    "required": true,
  },
  "-c": {
    "type": "check",
    "name": "使用详细模式"
  },
  "-f": {
    "type": "check",
    "name": "强制更改文件和目录的所有权"
  },
  "-h": {
    "type": "check",
    "name": "修复符号链接的目标"
  },
  "-R": {
    "type": "check",
    "name": "递归更改文件和目录的所有权"
  },
  "--help": {
    "type": "check",
    "name": "显示帮助信息"
  }
};
module.exports = {
  name: 'chown',
  desc: 'chown 命令用于更改文件或目录的所有者。',
  usages: [
    {
      form: {
        ...args
      },
      filter: (cmd, vlaues) => cmd + ' ' + vlaues.owner + ':' + vlaues.group + ' ' + vlaues.value
    }
  ],
};