
const args = {
  "": {
    "name": "搜索路径",
    "required": true,
  },
  "-H": {
    "type": "check",
    "name": "包括符号链接在内的文件"
  },
  "-L": {
    "type": "check",
    "name": "解析符号链接所指向的文件"
  },
  "-P": {
    "type": "check",
    "name": "不解析符号链接所指向的文件"
  },
  "-D": {
    "type": "check",
    "name": "跟随传入的文件进行深度优先搜索"
  },
  "-O": {
    "type": "check",
    "name": "按文件名以字典顺序进行排序"
  },
  "-name": {
    "type": "string",
    "name": "根据文件名进行搜索"
  },
  "-iname": {
    "type": "string",
    "name": "不区分大小写地根据文件名进行搜索"
  },
  "-type": {
    "type": "string",
    "name": "根据文件类型进行搜索"
  },
  "-size": {
    "type": "string",
    "name": "根据文件大小进行搜索"
  },
  "-mtime": {
    "type": "string",
    "name": "根据文件修改时间进行搜索"
  },
  "-mmin": {
    "type": "string",
    "name": "根据文件修改时间（分钟）进行搜索"
  },
  "-newer": {
    "type": "string",
    "name": "搜索修改时间较新的文件"
  },
  "-exec": {
    "type": "string",
    "name": "执行指定的命令"
  },
  "-ok": {
    "type": "string",
    "name": "类似于 -exec，但在执行命令前会询问用户"
  },
  "-print": {
    "type": "check",
    "name": "将搜索结果输出到标准输出"
  },
  "-fprint": {
    "type": "string",
    "name": "将搜索结果输出到指定文件"
  }
}
  ;
module.exports = {
  name: 'find',
  desc: 'find 命令用于在指定目录下查找文件或目录。它提供了多种参数，可根据不同的条件来查找文件或目录。',
  noMergeOptions: true,
  usages: [
    {
      form: { ...args },
    }
  ],
};