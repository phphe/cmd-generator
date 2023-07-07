
const args = {
  "": {
    "type": "string",
    "name": "文件或目录路径",
  },
  "-h": {
    "type": "check",
    "name": "以人类可读的格式显示文件的大小。"
  },
  "-B": {
    "type": "select",
    "name": "以指定的块大小显示",
    "options": [
      { "value": "KB", "name": "KB" },
      { "value": "MB", "name": "MB" },
      { "value": "GB", "name": "GB" },
      { "value": "TB", "name": "TB" },
      { "value": "PB", "name": "PB" },
      { "value": "EB", "name": "EB" },
      { "value": "ZB", "name": "ZB" },
      { "value": "YB", "name": "YB" },
      { "value": "K", "name": "K" },
      { "value": "M", "name": "M" },
      { "value": "G", "name": "G" },
      { "value": "T", "name": "T" },
      { "value": "P", "name": "P" },
      { "value": "E", "name": "E" },
      { "value": "Z", "name": "Z" },
      { "value": "Y", "name": "Y" }
    ],
  },
  "-a": {
    "type": "check",
    "name": "打印所有文件和目录，包括隐藏的文件。"
  },
  "-b": {
    "type": "check",
    "name": "以字节为单位显示文件的大小。"
  },
  "-c": {
    "type": "check",
    "name": "显示目录的总大小。"
  },
  "-d": {
    "type": "string",
    "name": "设置要显示的目录的深度。"
  },
  "-k": {
    "type": "check",
    "name": "以千字节为单位显示文件的大小。"
  },
  "-L": {
    "type": "check",
    "name": "跟随符号链接。"
  },
  "-s": {
    "type": "check",
    "name": "仅显示每个目录的总大小。"
  }
};
module.exports = {
  name: 'du',
  desc: 'du命令是Linux/Unix系统下的一个常用命令，用于查看目录或文件所占用的磁盘空间。',
  usages: [
    {
      form: { ...args },
    }
  ],
};