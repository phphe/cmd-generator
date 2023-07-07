
const args = {
  "value": {
    "type": "string",
    "name": "文件路径",
    "required": true,
  },
  "num": {
    "name": "显示多少行",
  },
  "start": {
    "name": "从第几行开始显示",
  },
  "-d": {
    "type": "check",
    "name": "显示帮助信息"
  },
  "-e": {
    "type": "check",
    "name": "启用转义字符"
  },
  "-f": {
    "type": "check",
    "name": "忽略停止符"
  },
  "-g": {
    "type": "check",
    "name": "将停止符从 Ctrl-G 更改为 Ctrl-Q"
  },
  "-l": {
    "type": "string",
    "name": "设置页长（行数）"
  },
  "-p": {
    "type": "check",
    "name": "禁用清屏操作"
  },
  "-s": {
    "type": "check",
    "name": "压缩多个空行为一个空行"
  },
  "-u": {
    "type": "check",
    "name": "禁用下划线滚动"
  }
};
module.exports = {
  name: 'more',
  desc: 'more命令行是一个基于Unix和类Unix操作系统的命令行工具，它用于查看文本文件的内容。more命令行允许用户在终端窗口内分页显示文本文件的内容，以便用户能够按照自己的需求逐页或快速浏览整个文件。',
  usages: [
    {
      form: { ...args },
      filter: (cmd, values) => cmd + (values.num ? ' -' + values.num : '') + (values.start ? ' +' + values.start : '') + ' ' + values.value
    }
  ],
};