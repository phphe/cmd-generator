
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
  "-r": {
    "type": "check",
    "name": "递归复制目录及其内容。"
  },
  "-a": {
    "type": "check",
    "name": "复制文件和目录时保留所有的属性，包括所有者、组、权限等等。"
  },
  "-b": {
    "type": "check",
    "name": "若文件已存在，则为其创建备份。"
  },
  "-f": {
    "type": "check",
    "name": "强制复制，若目标文件已存在则直接覆盖。"
  },
  "-i": {
    "type": "check",
    "name": "交互式复制，在覆盖目标文件前提示用户进行确认。"
  },
  "-l": {
    "type": "check",
    "name": "当复制符号链接文件时，复制链接文件本身，而非文件内容。"
  },
  "-n": {
    "type": "check",
    "name": "若目标文件已存在，则不进行复制操作。"
  },
  "-p": {
    "type": "check",
    "name": "保留源文件的属性，包括所有者、组、时间等等。"
  },
  "-s": {
    "type": "check",
    "name": "创建符号链接文件，而非复制文件。"
  },
  "-u": {
    "type": "check",
    "name": "若目标文件已存在，只复制比目标文件新或者不存在的文件。"
  },
  "-v": {
    "type": "check",
    "name": "显示复制进度信息。"
  },
  "-x": {
    "type": "check",
    "name": "不跨越文件系统复制，即只在同一个文件系统下复制。"
  },
  "--help": {
    "type": "check",
    "name": "显示命令帮助信息。"
  },
  "--version": {
    "type": "check",
    "name": "显示命令版本信息。"
  }
}
  ;
module.exports = {
  name: 'cp',
  desc: '命令行 cp 是一个用于在 Linux 和 Unix 系统中复制文件和目录的命令行工具。它可以将一个文件或者目录从一个位置复制到另一个位置，同时还可以给复制的文件或目录重命名、修改权限等。',
  usages: [
    {
      form: { ...args },
      filter: (cmd, values) => cmd + ' ' + values.target
    }
  ],
};