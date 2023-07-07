
const args = {
  "": {
    "type": "string",
    "name": "搜索表达式",
  },
  "-A": {
    "type": "check",
    "name": "只搜索可执行文件，忽略其他类型的文件"
  },
  "-c": {
    "type": "check",
    "name": "只打印命中结果的数量"
  },
  "-d": {
    "type": "string",
    "name": "指定数据库文件的位置"
  },
  "-e": {
    "type": "string",
    "name": "指定要搜索的文件名（支持正则表达式）"
  },
  "-i": {
    "type": "check",
    "name": "忽略大小写"
  },
  "-l": {
    "type": "check",
    "name": "只输出文件名，不输出行号"
  },
  "-n": {
    "type": "string",
    "name": "限制匹配结果的数量"
  },
  "-P": {
    "type": "check",
    "name": "不跟随符号链接"
  },
  "-r": {
    "type": "string",
    "name": "使用正则表达式匹配文件和目录"
  },
  "-s": {
    "type": "check",
    "name": "安静模式，不输出错误信息"
  },
  "-S": {
    "type": "check",
    "name": "不搜索子目录"
  },
  "-w": {
    "type": "check",
    "name": "只搜索完全匹配的文件名或单词"
  },
  "-x": {
    "type": "check",
    "name": "只搜索完全匹配的文件名"
  }
};
module.exports = {
  name: 'locate',
  desc: 'locate命令是Linux操作系统中的一个命令行工具，用于在系统中查找文件。该命令会在指定的目录中搜索文件名，如果找到，则返回文件路径。',
  usages: [
    {
      form: { ...args },
    }
  ],
};