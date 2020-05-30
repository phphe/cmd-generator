import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {
  server: {
    description: {
      en: 'Blank represents local. Format: user@host, user can be omitted if same with local. Example: ubuntu@1.2.3.4, 1.2.3.4',
      'zh-CN': '空白代表本地. 格式: 用户@服务器地址. 用户为空代表使用本地用户名. 例如: ubuntu@1.2.3.4, 1.2.3.4',
    },
    type: 'string',
  },
}

const generatorInfo:Generator = {
  name: 'scp',
  description: {
    en: 'Secure copy (remote file copy program)',
    'zh-CN': '使用ssh传输文件.',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  usages: [
    {
      name: ut.defaultUsageName,
      form:{
        controls: [
          {
            id: 'sourceServer',
            ...controls.server,
            name: {en: 'From server', 'zh-CN': '传出的服务器'},
            ignoreValue: true,
          },
          {
            ...common.pathOrPattern, 
            name: {en: 'Source file path or pattern', 'zh-CN': '源文件路径或pattern'},
            multiple: true,
            getCmd: info => {
              const sourceServer = info.getControlByID('sourceServer')
              const paths = (<string[]>info.control.value).filter(v => v)
              let r = sourceServer.value || ''
              if (r) {
                r += `:"${paths.join(' ')}"`
              } else {
                r = paths.map(v => v.indexOf(' ') > -1 ? `"${v}"` : v).join(' ')
              }
              return <string>r
            },
          },
          {
            id: 'targetServer',
            ...controls.server,
            name: {en: 'To server', 'zh-CN': '传入的服务器'},
            ignoreValue: true,
          },
          {
            ...common.pathOrPattern, 
            name: {en: 'Target path', 'zh-CN': '目标路径'},
            getCmd: info => {
              const targetServer = info.getControlByID('targetServer')
              // @ts-ignore
              const targetPathValue = info.control.value.indexOf(' ') > -1 ? `"${info.control.value}"` : info.control.value
              let r = targetServer.value || ''
              if (r) {
                r += `:${targetPathValue}`
              } else {
                r = targetPathValue
              }
              return <string>r
            },
          },
          {
            ...common.others,
            items: [
              {
                "name": {
                  "en": "Recursively copy entire directories.",
                  "zh-CN": "递归复制目录"
                },
                "cmd": [
                  "-r",
                ]
              },
              {
                "name": {
                  "en": "Verbose",
                  "zh-CN": "显示详细输出"
                },
                "cmd": [
                  "-v",
                ]
              },
              {
                "name": {
                  "en": "Preserves modification times, access times, and modes from the original file.",
                  "zh-CN": "保留文件的修改时间，访问时间和访问权限."
                },
                "cmd": [
                  "-p",
                ]
              },
              {
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
              {
                "name": {
                  "en": "Quiet",
                  "zh-CN": "静默"
                },
                "description": {
                  "en": "Quiet mode: disables the progress meter as well as warning and diagnostic messages from ssh.",
                  "zh-CN": "不显示传输进度条, 警告和诊断消息"
                },
                "cmd": [
                  "-q",
                ]
              },
            ],
          },
          {
            name: {en: 'Port', 'zh-CN': '端口'},
            description: {
              en: 'Optional, default 22',
              'zh-CN':  '可选, 默认22',
            },
            type: 'string',
            cmd: ['-P'],
          },
          {
            name: {en: 'Login with identity file', 'zh-CN': '使用密钥文件登录'},
            description: {
              en: 'Optional. Identity file path',
              'zh-CN':  '可选. 密钥文件路径',
            },
            type: 'string',
            multiple: true,
            cmd: ['-i'],
          },
        ],
        advanced: [
          {
            type:'check',
            multiple: true,
            items: [
              {
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
              {
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
              {
                "name": {
                  "en": "Batch",
                  "zh-CN": "批处理"
                },
                "description": {
                  en: 'Selects batch mode (prevents asking for passwords or passphrases).',
                  "zh-CN": "使用批处理模式（传输过程中不询问传输口令或短语）"
                },
                "cmd": [
                  "-B",
                ]
              },
            ]
          }
        ]
      }
    }
  ],
}

export default generatorInfo