
const args = {
  "": {
    "type": "string",
    "name": "文件或目录路径",
  },
  "-f": {
    "type": "check",
    "name": "强制删除文件或目录，不提示用户确认"
  },
  "-i": {
    "type": "check",
    "name": "交互式删除文件或目录，用户需要逐个确认"
  },
  "-r": {
    "type": "check",
    "name": "递归删除目录及其内容"
  },
  "-v": {
    "type": "check",
    "name": "显示删除的文件或目录"
  }
};
module.exports = {
  name: 'rm',
  desc: 'rm 命令用于删除文件或目录',
  usages: [
    {
      form: { ...args },
    }
  ],
};