import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {
  quiet:  {
    name: {en: 'Quiet mode', 'zh-CN': '静默模式'},
    "description": {
      "en": "Quiet mode.  Causes most warning and diagnostic messages to be suppressed."
    },
    "cmd": [
      "-q"
    ]
  },
  ipv4: {
    "name": {
      "en": "IPv4"
    },
    "description": {
      en: 'Use IPv4',
      "zh-CN": "只使用IPv4寻址"
    },
    "cmd": [
      "-4",
    ]
  },
  ipv6: {
    "name": {
      "en": "IPv6"
    },
    "description": {
      en: 'Use IPv6',
      "zh-CN": "只使用IPv6寻址"
    },
    "cmd": [
      "-6",
    ]
  },
  verbose: {
    name: {en: 'Verbose mode', 'zh-CN': '详细模式'},
    "description": {
      "en": "Verbose mode. Print	debugging messages. Multiple -v options increase the verbosity. The maximum is 3.",
      "zh-CN": "显示详细输出. 多个-v选项提高详细程度, 最多3个."
    },
    "cmd": [
      "-v",
    ]
  },
  compress: {
    "name": {
      "en": "Compress",
      "zh-CN": "压缩"
    },
    "description": {
      en: "Compression is desirable on modem lines and other slow connections, but will only slow down things on fast networks.",
      "zh-CN": "在调制解调器线路和其他慢速连接上需要压缩, 但会减慢快速网络上的速度."
    },
    "cmd": [
      "-C",
    ]
  },
  x11: {
    "name": {
      "en": "Enables X11 forwarding. This can also be specified on a per-host basis in a\tconfiguration file."
    },
    "cmd": [
      "-X"
    ]
  },
  trustedX11: {
    "name": {
      "en": "Enables trusted X11 forwarding. Trusted X11 forwardings are not subjected to the X11 SECURITY extension controls."
    },
    "cmd": [
      "-Y"
    ]
  },
  syslog: {
    "name": {
      "en": "Send log information using\tthe syslog(3) system module.  By default this information is sent to stderr."
    },
    "cmd": [
      "-y"
    ]
  },
  noShell: {
    "name": {
      "en": "Do not execute a remote command.",
      "zh-CN": "只连接, 不执行远程命令."
    },
    "description": {
      "en": "Do not execute a remote command. This is useful for just forwarding ports (protocol version 2 only).",
      "zh-CN": "只连接, 不执行远程命令. 端口转发时使用."
    },
    "cmd": [
      "-N",
    ]
  },
  noTTY: {
    "name": {
      "en": "Disable TTY",
      "zh-CN": "不分配TTY"
    },
    "description": {
      "en": "Disable pseudo-tty allocation.",
      "zh-CN": "不为这个连接分配TTY"
    },
    "cmd": [
      "-T",
    ]
  },
  background: {
    name: {en: 'Backgroud', 'zh-CN': '后台运行'},
    "description": {
      "en": "Requests ssh to go to background just before command execution.",
      "zh-CN": "SSH连接成功后，转入后台运行. 之后只能用kill命令去杀掉进程."
    },
    "cmd": [
      "-f",
    ]
  },
}

const controls: ut.controlsObject = {
  server: {
    name: {en: 'Server', 'zh-CN': '服务器'},
    description: {
      en: 'Format: user@host, user can be omitted if same with local. Example: ubuntu@1.2.3.4, 1.2.3.4',
      'zh-CN': '格式: 用户@服务器地址. 用户为空代表使用本地用户名. 例如: ubuntu@1.2.3.4, 1.2.3.4',
    },
    type: 'string',
  },
  port: {
    "name": {
      "en": "Port",
      "zh-CN": "端口"
    },
    "description": {
      "en": "Optional. default 22",
      "zh-CN": "可选. 默认22"
    },
    "cmd": [
      "-p",
    ],
    type: 'string',
  },
  identityFile: {
    "name": {
      "en": "Login with identity file",
      "zh-CN": "使用密钥文件登录"
    },
    "description": {
      "en": "Optional. Selects a file from which the identity (private key) for RSA or DSA authentication is read. The default is ~/.ssh/identity for protocol version 1, and ~/.ssh/id_rsa and ~/.ssh/id_dsa for protocol version 2. Identity files may also be specified on a per-host basis in the configuration file. It is possible to have multiple -i options (and multiple identities specified in configuration files).",
      "zh-CN": "可选. 选择用于RSA或DSA认证的身份（私钥）文件。对于协议版本1，默认为 ~/.ssh/identity，对于协议版本2，默认为 ~/.ssh/id_rsa 和 ~/.ssh/id_dsa。身份文件也可以在配置文件中以每个主机为单位指定。可以有多个 -i 选项（也可以在配置文件中指定多个身份文件）。"
    },
    type: 'string',
    multiple: true,
    "cmd": [
      "-i",
    ]
  },
  logFile: {
    "name": {
      "en": "Append debug logs to log_file instead of standard error."
    },
    type: 'string',
    "cmd": [
      "-E"
    ]
  },
}

const generatorInfo:Generator = {
  name: 'ssh',
  description: {
    en: 'Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network. Typical applications include remote command-line, login, and remote command execution, but any network service can be secured with SSH.',
    'zh-CN': 'SSH（Secure Shell）是一种加密的网络协议，用于在不安全的网络上安全地操作网络服务，典型的应用包括远程命令行、登录、远程命令执行等，但任何网络服务都可以用SSH来安全地执行。',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  related: ["ssh-keygen","sshfs","ssh-agent","ssh-keyscan","sshpass","sshuttle","ssh","autossh","ssh-add","logwatch","ssh-copy-id", 'autossh'],
  usages: [
    {
      name: {en: 'Only login', 'zh-CN': '仅登录'},
      form:{
        controls: [
          controls.server,
          {
            ...common.others,
            items: [
              items.verbose,
              items.verbose,
              items.verbose,
              items.quiet,
              items.compress,
            ],
          },
          controls.port,
          controls.identityFile,
        ],
        advanced: [
          {
            type: 'check',
            multiple: true,
            items: [
              items.ipv4,
              items.ipv6,
              items.x11,
              items.trustedX11,
              items.syslog,
            ],
          },
          controls.logFile,
        ],
      }
    },
    {
      "name": {
        "en": "Local forwarding",
        "zh-CN": "本地端口转发"
      },
      "description": {
        "en": "Access the local port allows you to access the port of another host. Example: access localhost:8080, actual access: remotehost:80",
        "zh-CN": "访问本机端口可以访问另一台机器的端口. 例: 访问localhost:8080, 实际访问: 远程主机:80"
      },
      form: {
        controls: [
          {
            type: 'mixed',
            multiple: true,
            cmd: ['-L'],
            hideLabel: true,
            controls: [
              {
                "name": {
                  "en": "Local port",
                  "zh-CN": "本地端口"
                },
                type: 'string',
              },
              {
                "name": {
                  "en": "Target host",
                  "zh-CN": "目标服务器"
                },
                "description": {
                  "en": "Please don't change if target is same with the ssh server.",
                  "zh-CN": "如果目标服务器是ssh服务器, 请勿修改."
                },
                defaultValue: '127.0.0.1',
                type: 'string',
              },
              {
                "name": {
                  "en": "Target port",
                  "zh-CN": "目标端口"
                },
                type: 'string',
              },
            ],
            getCmd: info => {
              const values = <ut.MixedMultipleControlValue>info.control.value
              return values.filter(value => value.find(v => v)).map(value => `-L ${value[0]}:${value[1]}:${value[2]}`).join(' ')
            },
          },
          controls.server,
          {
            ...common.others,
            items: [
              {...items.noShell, defaultValue: true},
              {...items.noTTY, defaultValue: true},
              {...items.background, defaultValue: true},
              items.verbose,
              items.verbose,
              items.verbose,
              items.quiet,
              items.compress,
            ],
          },
          controls.port,
          controls.identityFile,
        ],
        advanced: [
          {
            type: 'check',
            multiple: true,
            items: [
              items.ipv4,
              items.ipv6,
              items.syslog,
            ],
          },
          controls.logFile,
        ],
      }
    },
    {
      "name": {
        "en": "Remote forwarding",
        "zh-CN": "远程端口转发"
      },
      "description": {
        "en": "A request forwarded to the ssh server is sent to the localhost or to another host that can access it locally. Example: access: ssh server:81, actual access: localhost:80.",
        "zh-CN": "转发到ssh服务器的请求到本机或本机能访问的其他主机. 例: 访问: ssh服务器:81, 实际访问: localhost:80."
      },
      form: {
        controls: [
          {
            type: 'mixed',
            multiple: true,
            cmd: ['-R'],
            hideLabel: true,
            controls: [
              {
                "name": {
                  "en": "SSH server port",
                  "zh-CN": "SSH服务器端口"
                },
                type: 'string',
              },
              {
                "name": {
                  "en": "Target host",
                  "zh-CN": "目标服务器"
                },
                "description": {
                  "en": "Please don't change if target is local.",
                  "zh-CN": "如果目标服务器本机, 请勿修改."
                },
                defaultValue: '127.0.0.1',
                type: 'string',
              },
              {
                "name": {
                  "en": "Target port",
                  "zh-CN": "目标端口"
                },
                type: 'string',
              },
            ],
            getCmd: info => {
              const values = <ut.MixedMultipleControlValue>info.control.value
              return values.filter(value => value.find(v => v)).map(value => `-R ${value[0]}:${value[1]}:${value[2]}`).join(' ')
            },
          },
          controls.server,
          {
            ...common.others,
            items: [
              {...items.noShell, defaultValue: true},
              {...items.noTTY, defaultValue: true},
              {...items.background, defaultValue: true},
              items.verbose,
              items.verbose,
              items.verbose,
              items.quiet,
              items.compress,
            ],
          },
          controls.port,
          controls.identityFile,
        ],
        advanced: [
          {
            type: 'check',
            multiple: true,
            items: [
              items.ipv4,
              items.ipv6,
              items.syslog,
            ],
          },
          controls.logFile,
        ],
      }
    },
    {
      "name": {
        "en": "Dynamic Port Forwarding",
        "zh-CN": "动态端口转发"
      },
      "description": {
        "en": "The local machine binds a port A. Configure a socks proxy to: local:port A. All traffic to the socks proxy will be sent to the ssh server.",
        "zh-CN": "本机绑定一个端口A. 配置socks代理到: 本机:端口A. socks代理的流量都将发送到ssh服务器."
      },
      form: {
        controls: [
          {
            "name": {
              "en": "Dynamic forwarding port",
              "zh-CN": "动态转发端口"
            },
            "description": {
              "en": "socks proxy proxy port",
              "zh-CN": "socks代理端口"
            },
            type: 'string',
            "cmd": [
              "-D",
            ]
          },
          controls.server,
          {
            ...common.others,
            items: [
              {...items.noShell, defaultValue: true},
              {...items.noTTY, defaultValue: true},
              {...items.background, defaultValue: true},
              items.verbose,
              items.verbose,
              items.verbose,
              items.quiet,
              items.compress,
            ],
          },
          controls.port,
          controls.identityFile,
        ],
        advanced: [
          {
            type: 'check',
            multiple: true,
            items: [
              items.ipv4,
              items.ipv6,
              items.syslog,
            ],
          },
          controls.logFile,
        ],
      }
    }
  ],
}

export default generatorInfo