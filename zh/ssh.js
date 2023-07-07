
const args = {
  "user": {
    "name": "用户名",
    "required": true
  },
  "server": {
    "name": "服务器地址",
    "required": true
  },
  "-p": {
    "type": "string",
    "name": "端口号"
  },
  "-i": {
    "type": "string",
    "name": "密钥文件路径"
  },
  "-t": {
    "type": "check",
    "name": "强制分配伪终端"
  },
  "-v": {
    "type": "check",
    "name": "详细输出模式"
  },
  "-1": {
    "type": "check",
    "name": "强制使用协议版本1"
  },
  "-2": {
    "type": "check",
    "name": "强制使用协议版本2"
  },
  "-4": {
    "type": "check",
    "name": "强制仅使用IPv4地址"
  },
  "-6": {
    "type": "check",
    "name": "强制仅使用IPv6地址"
  },
  "-A": {
    "type": "check",
    "name": "打开身份验证代理连接"
  },
  "-a": {
    "type": "string",
    "name": "禁用身份验证代理连接"
  },
  "-b": {
    "type": "string",
    "name": "本地绑定地址"
  },
  "-C": {
    "type": "check",
    "name": "请求压缩所有数据"
  },
  "-c": {
    "type": "string",
    "name": "加密算法"
  },
  "-E": {
    "type": "string",
    "name": "日志文件"
  },
  "-e": {
    "type": "string",
    "name": "逃逸字符"
  },
  "-F": {
    "type": "string",
    "name": "配置文件"
  },
  "-f": {
    "type": "check",
    "name": "后台执行"
  },
  "-G": {
    "type": "check",
    "name": "仅执行连接"
  },
  "-g": {
    "type": "check",
    "name": "允许远程主机连接到本地转发的端口"
  },
  "-J": {
    "type": "string",
    "name": "跳跃主机"
  },
  "-K": {
    "type": "check",
    "name": "启用GSSAPI代理"
  },
  "-k": {
    "type": "check",
    "name": "禁用GSSAPI认证"
  },
  "-l": {
    "type": "string",
    "name": "登录用户名"
  },
  "-M": {
    "type": "check",
    "name": "发送保持活动消息"
  },
  "-m": {
    "type": "string",
    "name": "MAC算法"
  },
  "-N": {
    "type": "check",
    "name": "不执行远程命令"
  },
  "-n": {
    "type": "check",
    "name": "禁止stdin的交互"
  },
  "-O": {
    "type": "string",
    "name": "控制连接"
  },
  "-o": {
    "type": "string",
    "name": "配置选项"
  },
  "-Q": {
    "type": "string",
    "name": "查询指令"
  },
  "-S": {
    "type": "string",
    "name": "指定控制套接字"
  },
  "-s": {
    "type": "check",
    "name": "请求为安全连接分配终端"
  },
  "-T": {
    "type": "check",
    "name": "禁用分配伪终端"
  },
  "-V": {
    "type": "check",
    "name": "显示版本信息并退出"
  },
  "-W": {
    "type": "string",
    "name": "将标准输入传递到TCP套接字"
  },
  "-w": {
    "type": "string",
    "name": "设置保持活动消息的间隔时间"
  },
  "-X": {
    "type": "check",
    "name": "启用X11转发"
  },
  "-x": {
    "type": "check",
    "name": "禁用X11转发"
  },
  "-Y": {
    "type": "check",
    "name": "启用Trusted X11转发"
  },
  "-y": {
    "type": "check",
    "name": "启用信任X11转发"
  },
  "-Z": {
    "type": "check",
    "name": "启用SSH连接压缩"
  },
  "-z": {
    "type": "check",
    "name": "请求以ASCII格式传输压缩数据"
  }
}
  ;
module.exports = {
  name: 'ssh',
  desc: 'SSH是Secure Shell的缩写，是一种加密网络协议，用于在不安全的网络中安全地传输数据。它通常用于远程登录到另一个计算机，并执行命令。',
  usages: [
    {
      name: "登录服务器",
      form: { ...args },
      filter: (cmd, values) => cmd + ' ' + values.user + '@' + values.server
    },
    {
      name: "本地端口转发",
      desc: "通过本地指定端口访问登录的ssh服务器网域的任意地址",
      form: {
        localPort: {
          "name": "本地端口",
          "required": true
        },
        targetServer: {
          "name": "要访问的地址（ip或域名）",
          "required": true,
        },
        targetServerPort: {
          "name": "要访问的地址端口",
          "required": true
        },
        ...args
      },
      filter: (cmd, values) =>
        `${cmd} -L ${values.localPort}:${values.targetServer}:${values.targetServerPort} ${values.user}@${values.server}`
    },
    {
      name: "远程端口转发",
      desc: "通过ssh服务器指定端口访问本机网域的任意地址",
      form: {
        remotePort: {
          "name": "远程端口",
          "required": true
        },
        targetServer: {
          "name": "要访问的地址（ip或域名）",
          "required": true,
        },
        targetServerPort: {
          "name": "要访问的地址端口",
          "required": true
        },
        ...args
      },
      filter: (cmd, values) =>
        `${cmd} -R ${values.remotePort}:${values.targetServer}:${values.targetServerPort} ${values.user}@${values.server}`
    },
    {
      name: "动态端口转发",
      desc: "在本地指定端口与ssh服务器之间创建一个socks代理. 通过此代理，您可以访问ssh服务器可以访问的所有地址.",
      form: {
        '-D': {
          "name": "转发端口",
          "required": true
        },
        ...args
      },
      filter: (cmd, values) => cmd + ' ' + values.user + '@' + values.server
    },
  ],
};