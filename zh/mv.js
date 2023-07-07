
const args = {
  "": {
    "type": "string",
    "name": "文件或目录路径",
    "required": true,
    "repeatable": true,
  },
  "target": {
    "type": "string",
    "name": "目标路径",
    "required": true
  },
  "-b": {
    "type": "check",
    "name": "备份文件，如果目标文件已存在，则先备份"
  },
  "-f": {
    "type": "check",
    "name": "强制移动文件，不提示任何信息"
  },
  "-i": {
    "type": "check",
    "name": "在移动已存在的目标文件之前先询问用户确认"
  },
  "-n": {
    "type": "check",
    "name": "不要覆盖已存在的目标文件"
  },
  "-u": {
    "type": "check",
    "name": "仅在源文件比目标文件新或者目标文件不存在时才进行移动操作"
  },
  "-v": {
    "type": "check",
    "name": "详细显示移动文件的操作信息"
  },
  "--help": {
    "type": "check",
    "name": "显示帮助信息"
  },
  "--version": {
    "type": "check",
    "name": "显示版本信息"
  }
};
module.exports = {
  name: 'mv',
  desc: 'mv命令是Linux/Unix操作系统中的一个重要命令。它的主要功能是将文件或目录从一个位置移动到另一个位置。除此之外，它还可以用于将文件或目录重命名。',
  usages: [
    {
      form: { ...args },
      filter: (cmd, values) => cmd + ' ' + values.target
    }
  ],
};