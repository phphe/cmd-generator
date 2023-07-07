
const args = {
  "source": {
    "name": "源文件或目录路径",
    "required": true
  },
  "target": {
    "name": "目标路径",
    "required": true
  },
  "user": {
    "name": "用户名",
    "required": true
  },
  "server": {
    "name": "服务器地址",
    "required": true
  },
  "-P": {
    "type": "string",
    "name": "指定远程主机的端口号"
  },
  "-i": {
    "type": "string",
    "name": "指定身份验证文件的路径"
  },
  "-r": {
    "type": "check",
    "name": "递归地复制目录和其内容"
  },
  "-p": {
    "type": "check",
    "name": "保留源文件的修改时间、访问时间和访问权限"
  },
  "-q": {
    "type": "check",
    "name": "启用安静模式，减少输出信息"
  },
  "-r": {
    "type": "check",
    "name": "递归地复制目录和其内容"
  },
  "-v": {
    "type": "check",
    "name": "详细输出模式，显示 SCP 的调试信息"
  },
  "-c": {
    "type": "check",
    "name": "使用压缩"
  },
  "-l": {
    "type": "string",
    "name": "限制带宽，以每秒传输的字节数为单位"
  },
  "-F": {
    "type": "string",
    "name": "指定 SSH 配置文件的路径"
  },
  "-o": {
    "type": "string",
    "name": "指定额外的 SSH 配置选项"
  },
  "-4": {
    "type": "check",
    "name": "强制使用 IPv4 地址"
  },
  "-6": {
    "type": "check",
    "name": "强制使用 IPv6 地址"
  },
  "-S": {
    "type": "string",
    "name": "指定用于控制连接的套接字"
  },
  "-B": {
    "type": "check",
    "name": "使用批处理模式（传输多个文件）"
  }
};
module.exports = {
  name: 'scp',
  desc: 'SCP命令是一个用于在Linux和Unix系统之间进行安全文件传输的命令。它使用SSH协议来加密和传输文件。以下是SCP命令的所有参数。',
  usages: [
    {
      name: "复制本地文件或文件夹到远程",
      form: { ...args },
      filter: (cmd, values) => `${cmd} ${values.source} ${values.user}@${values.server}:${values.target}`
    },
    {
      name: "复制远程文件或文件夹到本地",
      form: { ...args },
      filter: (cmd, values) => `${cmd} ${values.user}@${values.server}:${values.source} ${values.target}`
    },
  ],
};