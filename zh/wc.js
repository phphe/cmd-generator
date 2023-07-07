
const args = {
  "": {
    "name": "文件路径",
    "required": true,
    "repeatable": true,
  },
  "-c": {
    "type": "check",
    "name": "只输出字节数"
  },
  "-l": {
    "type": "check",
    "name": "只输出行数"
  },
  "-w": {
    "type": "check",
    "name": "只输出词数"
  },
  "-L": {
    "type": "check",
    "name": "只输出最长行的长度"
  },
  "-m": {
    "type": "check",
    "name": "只输出字符数"
  },
  "-L": {
    "type": "check",
    "name": "只输出最长行的长度"
  },
  "--help": {
    "type": "check",
    "name": "显示帮助信息并退出"
  },
  "--version": {
    "type": "check",
    "name": "显示版本信息并退出"
  }
};
module.exports = {
  name: 'wc',
  desc: 'wc 命令是一个用于计算给定文件中字节数、字数、行数的命令行工具。',
  usages: [
    {
      form: { ...args },
    }
  ],
};