
const args = {
  "": {
    "type": "string",
    "name": "文件或目录路径或表达式",
    "required": true,
  },
  "-a": {
    "type": "check",
    "name": "显示所有文件和目录，包括隐藏文件和目录。"
  },
  "-l": {
    "type": "check",
    "name": "以长格式显示文件和目录的详细信息。"
  },
  "-h": {
    "type": "check",
    "name": "以人类可读的格式显示文件和目录的大小。"
  },
  "-r": {
    "type": "check",
    "name": "以相反的顺序显示文件和目录。"
  },
  "-t": {
    "type": "check",
    "name": "按修改时间排序并显示文件和目录。"
  },
  "-S": {
    "type": "check",
    "name": "按文件大小排序并显示文件和目录。"
  },
  "-R": {
    "type": "check",
    "name": "递归地显示所有子目录的内容。"
  },
  "-d": {
    "type": "check",
    "name": "显示目录本身，而不是目录的内容。"
  },
  "-F": {
    "type": "check",
    "name": "在文件名后面添加一个字符，以指示文件的类型。"
  },
  "-i": {
    "type": "check",
    "name": "显示文件和目录的iNode号码。"
  },
  "-s": {
    "type": "check",
    "name": "显示文件和目录的大小（以块为单位）。"
  },
  "-u": {
    "type": "check",
    "name": "以访问时间排序并显示文件和目录。"
  },
  "-c": {
    "type": "check",
    "name": "以更改时间排序并显示文件和目录。"
  },
  "-m": {
    "type": "check",
    "name": "用逗号分隔文件和目录的名称。"
  },
  "-1": {
    "type": "check",
    "name": "每行只显示一个文件或目录。"
  },
  "--help": {
    "type": "check",
    "name": "显示命令的帮助信息。"
  }
};
module.exports = {
  name: 'ls',
  desc: 'ls是一个常用的命令行指令，用于显示目录中的内容列表。它还可以显示文件和目录的详细信息，如文件类型、访问权限、所有者等。',
  usages: [
    {
      form: { ...args },
    }
  ],
};