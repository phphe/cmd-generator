
const args = {
  "": {
    "name": "搜索表达式",
    "required": true,
  },
  "path": {
    "name": "文件或目录",
    "required": true,
  },
  "--exclude": {
    "name": "排除路径",
    "repeatable": true,
  },
  "-a": {
    "type": "check",
    "name": "将二进制文件作为文本文件进行搜索。"
  },
  "-b": {
    "type": "check",
    "name": "在每一行前输出字节偏移量。"
  },
  "-c": {
    "type": "check",
    "name": "只输出匹配的行数。"
  },
  "-E": {
    "type": "check",
    "name": "使用扩展正则表达式进行匹配。"
  },
  "-F": {
    "type": "check",
    "name": "将搜索的字符串作为固定字符，而不是正则表达式。"
  },
  "-G": {
    "type": "check",
    "name": "使用基本正则表达式进行匹配。"
  },
  "-h": {
    "type": "check",
    "name": "不输出文件名。"
  },
  "-i": {
    "type": "check",
    "name": "忽略大小写。"
  },
  "-l": {
    "type": "check",
    "name": "只输出包含匹配字符串的文件名。"
  },
  "-m": {
    "type": "string",
    "name": "只输出前几行的匹配结果。"
  },
  "-n": {
    "type": "check",
    "name": "在每一行前输出行号。"
  },
  "-q": {
    "type": "check",
    "name": "静默模式，不输出任何信息。"
  },
  "-s": {
    "type": "check",
    "name": "静默模式，不显示错误信息。"
  },
  "-v": {
    "type": "check",
    "name": "显示不包含匹配字符串的行。"
  },
  "-w": {
    "type": "check",
    "name": "只匹配整个单词，而不是字符串的一部分。"
  },
  "-x": {
    "type": "check",
    "name": "只匹配整行，而不是字符串的一部分。"
  }
}
  ;
module.exports = {
  name: 'grep',
  desc: 'grep 是一个常用的命令行工具，用于在文件中查找匹配的文本内容并输出。',
  usages: [
    {
      form: { ...args },
      filter: (cmd, values) => cmd + ' ' + values.path
    }
  ],
};