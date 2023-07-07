
const args = {
  "-b": {
    "type": "check",
    "name": "以字节为单位显示内存使用情况",
    "group": "unit",
  },
  "-k": {
    "type": "check",
    "name": "以千字节为单位显示内存使用情况",
    "group": "unit",
  },
  "-m": {
    "type": "check",
    "name": "以兆字节为单位显示内存使用情况",
    "group": "unit",
  },
  "-g": {
    "type": "check",
    "name": "以吉字节为单位显示内存使用情况",
    "group": "unit",
  },
  "-t": {
    "type": "check",
    "name": "以字节为单位显示内存使用情况，并在总计行中显示总量",
    "group": "unit",
  },
  "-s": {
    "type": "string",
    "name": "每N秒刷新一次"
  },
  "-V": {
    "type": "check",
    "name": "显示版本信息并退出"
  },
  "-h": {
    "type": "check",
    "name": "显示帮助信息并退出"
  }
}
  ;
module.exports = {
  name: 'free',
  desc: 'free命令用于显示系统的空闲和已用内存情况。',
  usages: [
    {
      form: { ...args },
    }
  ],
};