import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'df',
  "description": {
    "en": "Display free disk space.",
    "zh-CN": "显示可用硬盘空间。"
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  related: ['df', 'du'],
  usages: [
    {
      name: ut.defaultUsageName,
      form:{
        controls: [
          {
            name: {en: 'Path', 'zh-CN': '路径'},
            description: {en: 'Show all if left blank. Example: /dev/sda1', 'zh-CN': '留空时显示所有. 例: /dev/sda1'},
            type: 'string',
            multiple: true,
          },
          {
            "name": {
              "en": "Block size"
            },
            "description": {
              "en": "scale sizes before printing them",
              'zh-CN': "大概是文件大小的单位",
            },
            type: 'select',
            "items": [
              "KB",
              "MB",
              "GB",
              "TB",
              "PB",
              "EB",
              "ZB",
              "YB",
              "K",
              "M",
              "G",
              "T",
              "P",
              "E",
              "Z",
              "Y"
            ],
            "cmd": [
              "-B",
              "--block-size"
            ]
          },
          {
            type: 'check',
            multiple: true,
            items: [
              {
                "name": {
                  "en": "Human readable",
                  "zh-CN": "易读的"
                },
                "description": {
                  "en": "Print sizes in human readable format (e.g., 1K 234M 2G)",
                  "zh-CN": "以人类可读的格式打印尺寸（例如1K 234M 2G）."
                },
                "cmd": [
                  "-h",
                  "--human-readable"
                ]
              },
              {
                "name": {
                  "en": "all",
                  "zh-CN": "所有"
                },
                "description": {
                  "en": "include pseudo, duplicate, inaccessible file systems",
                  "zh-CN": "包括伪文件系统、重复文件系统、无法访问的文件系统。"
                },
                "cmd": [
                  "-a",
                  "--all"
                ]
              },
              {
                "name": {
                  "en": "1k=1000",
                  "zh-CN": "1k=1000"
                },
                "description": {
                  "en": "print sizes in powers of 1000 (e.g., 1.1G)",
                  "zh-CN": "以1000为进制"
                },
                "cmd": [
                  "-H",
                  "--si"
                ]
              },
            ]
          }
        ],
        advanced: [
          {
            type: 'check',
            multiple: true,
            items: [
              {
                "name": {
                  "en": "inodes",
                  "zh-CN": "节点"
                },
                "description": {
                  "en": "list inode information instead of block usage",
                  "zh-CN": "列出节点信息，而不是块的使用情况"
                },
                "cmd": [
                  "-i",
                  "--inodes"
                ]
              },
              {
                "name": {
                  "en": "local",
                  "zh-CN": "本地"
                },
                "description": {
                  "en": "limit listing to local file systems",
                  "zh-CN": "只限于本地文件系统"
                },
                "cmd": [
                  "-l",
                  "--local"
                ]
              },
              {
                "name": {
                  "en": "No sync",
                  "zh-CN": "不同步"
                },
                "description": {
                  "en": "do not invoke sync before getting usage info (default)",
                  "zh-CN": "在获取使用信息之前不调用同步（默认情况下）。"
                },
                "cmd": [
                  null,
                  "--no-sync"
                ]
              },
              {
                "name": {
                  "en": "portability"
                },
                "description": {
                  "en": "use the POSIX output format",
                  "zh-CN": "使用POSIX输出格式"
                },
                "cmd": [
                  "-P",
                  "--portability"
                ]
              },
              {
                "name": {
                  "en": "sync",
                  "zh-CN": "同步"
                },
                "description": {
                  "en": "invoke sync before getting usage info",
                  "zh-CN": "在获取使用信息前调用同步"
                },
                "cmd": [
                  null,
                  "--sync"
                ]
              },
              {
                "name": {
                  "en": "total"
                },
                "description": {
                  "en": "elide all entries insignificant to available space, and produce a grand total"
                },
                "cmd": [
                  null,
                  "--total"
                ]
              },
              {
                "name": {
                  "en": "Print type",
                  "zh-CN": "打印类型"
                },
                "description": {
                  "en": "print file system type",
                  "zh-CN": "打印文件系统类型"
                },
                "cmd": [
                  "-T",
                  "--print-type"
                ]
              },
            ]
          },
          {
            "name": {
              "en": "type",
              "zh-CN": "类型"
            },
            "description": {
              "en": "limit listing to file systems of type.  The lsvfs command can be used to find out the types of file systems that are available on the system.",
              "zh-CN": "只限于类型为TYPE的文件系统. 可使用lsvfs命令查看此系统上支持的类型."
            },
            type: 'string',
            "cmd": [
              "-t",
              "--type"
            ]
          },
          {
            "name": {
              "en": "Exclude type",
              "zh-CN": "排除类型"
            },
            "description": {
              "en": "limit listing to file systems not of inputed type",
            },
            type: 'string',
            "cmd": [
              "-x",
              "--exclude-type"
            ]
          },
        ]
      }
    }
  ],
}

export default generatorInfo