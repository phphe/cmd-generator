
const args = {
  "": {
    "name": "程序名/命令名",
    "required": true
  },
  "-a": {
    "type": "check",
    "name": "显示所有符合条件的路径"
  },
  "-p": {
    "type": "check",
    "name": "显示所有符合条件的可执行文件的路径，用冒号分隔"
  },
  "-s": {
    "type": "check",
    "name": "仅显示符合条件的可执行文件的路径"
  },
  "-u": {
    "type": "check",
    "name": "显示与指定用户关联的可执行文件的路径"
  },
  "-V": {
    "type": "check",
    "name": "显示版本信息并退出"
  },
  "--help": {
    "type": "check",
    "name": "显示帮助信息并退出"
  }
};
module.exports = {
  name: 'which',
  desc: 'which 命令可以帮助用户查找可执行文件的路径。它会在环境变量 PATH 指定的路径中查找指定的命令或者文件名，并返回第一个找到的完整路径。',
  usages: [
    {
      form: { ...args },
    }
  ],
};