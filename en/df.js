const args = {
  "": {
    "type": "string",
    "name": "路径",
    "required": true,
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
    "name": "显示所有文件和目录（包括隐藏文件/目录）的磁盘使用情况"
  },
  "-b": {
    "type": "check",
    "name": "以 512 字节为单位显示磁盘块的使用情况"
  },
  "-h": {
    "type": "check",
    "name": "以易读格式（GB，MB，KB）显示磁盘使用情况"
  },
  "-i": {
    "type": "check",
    "name": "显示磁盘 inode 的使用情况而不是块的使用情况"
  },
  "-k": {
    "type": "check",
    "name": "以 1024 字节为单位显示磁盘块的使用情况"
  },
  "-l": {
    "type": "check",
    "name": "显示本地文件系统的信息"
  },
  "-n": {
    "type": "check",
    "name": "在输出中不换行"
  },
  "-P": {
    "type": "check",
    "name": "不要通过 symlink 跟踪文件"
  },
  "-T": {
    "type": "check",
    "name": "显示文件系统的类型"
  },
  "-t": {
    "type": "check",
    "name": "显示文件系统的类型"
  },
  "-x": {
    "type": "check",
    "name": "显示本地文件系统的信息"
  }
};
module.exports = {
  name: 'df',
  desc: 'Displays a report of the file system disk space utilization.',
  usages: [
    {
      form: { ...args },
    }
  ],
};
