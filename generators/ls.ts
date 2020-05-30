import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'ls',
  description: {
    en: 'List files',
    'zh-CN': '列出文件',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  optionNameValueSeparator: '=',
  usages: [
    {
      name: ut.defaultUsageName,
      form:{
        controls: [
          {
            "name": {
              "en": "Path or pattern",
              "zh-CN": "路径或表达式",
            },
            "description": {
              "en": "Specify paths or filter by pattern.",
              "zh-CN": "指定路径或按表达式过滤."
            },
            type: 'string',
            "multiple": true,
          },
          {
            name: {en: 'Size', 'zh-CN': '文件大小'},
            type: 'check',
            multiple: true,
            items: [
              {
                "name": {
                  "en": "Show size",
                  'zh-CN': "显示文件大小"
                },
                "description": {
                  "en": "print the allocated size of each file, in blocks"
                },
                "cmd": [
                  "-s",
                  "--size"
                ]
              },
              {
                "name": {
                  "en": "Human readable",
                  "zh-CN": "易读的"
                },
                "cmd": [
                  "-h",
                  "--human-readable"
                ]
              },
              {
                "name": "1k=1000",
                "description": {
                  "en": "Use powers of 1000 not 1024"
                },
                "cmd": [
                  "--si"
                ]
              },

            ],
          },
          {
            name: {en: 'Sort', 'zh-CN': '排序'},
            type: 'check',
            multiple: true,
            items: [
              {
                "name": {
                  "en": "Reverse",
                  "zh-CN": "倒序"
                },
                "cmd": [
                  "-r",
                  "--reverse"
                ]
              },
              {
                "name": {
                  "en": "Sort by modification time",
                  "zh-CN": "按修改时间排序"
                },
                "cmd": [
                  "-t",
                ]
              },
              {
                "name": {
                  "en": "Sort by size",
                  "zh-CN": "按大小排序"
                },
                "description": {
                  "en": "Sort by file size, largest first",
                  "zh-CN": "按文件大小排序，最大的优先"
                },
                "cmd": [
                  "-S",
                ]
              },
              {
                "name": {
                  "en": "Sort by version",
                  "zh-CN": "按版本排序"
                },
                "description": {
                  "en": "Natural sort of (version) numbers within text"
                },
                "cmd": [
                  "-v",
                ]
              },
              {
                "name": {
                  "en": "Sort by extension",
                  "zh-CN": "按扩展排序"
                },
                "description": {
                  "en": "Sort alphabetically by entry extension"
                },
                "cmd": [
                  "-X",
                ]
              },
            ],
          },
          {
            ...common.others,
            items: [
              {
                "name": {
                  "en": "All", 'zh-CN': '全部',
                },
                "description": {
                  "en": "do not ignore entries starting with .",
                  "zh-CN": "不要忽略以.开头的, 即包含隐藏文件"
                },
                "cmd": [
                  "-a",
                  "--all"
                ]
              },
              {
                "name": {
                  "en": "almost-all",
                  "zh-CN": "几乎全部"
                },
                "description": {
                  "en": "do not list implied . and ..",
                  "zh-CN": "不要列出以..和.开头的"
                },
                "cmd": [
                  "-A",
                  "--almost-all"
                ]
              },
              {
                "name": {
                  "en": "Detail",
                  "zh-CN": "详细"
                },
                "description": {
                  "en": "Use a long listing format",
                  "zh-CN": "显示详细信息",
                },
                "cmd": [
                  "-l",
                ]
              },
              {
                "name": {
                  "en": "List subdirectories",
                  "zh-CN": "列出子目录"
                },
                "description": {
                  "en": "List subdirectories recursively",
                  "zh-CN": "递归列出子目录"
                },
                "cmd": [
                  "-R",
                  "--recursive"
                ]
              },
              {
                "name": {
                  "en": "Directory self",
                  "zh-CN": "目录本身"
                },
                "description": {
                  "en": "List directories themselves, not their contents",
                  "zh-CN": "显示目录本身，而不是目录子级"
                },
                "cmd": [
                  "-d",
                  "--directory"
                ]
              },
            ]
          }
        ],
        advanced: [
          {
            name: {en: 'Ignore', 'zh-CN': '忽略'},
            description: {
              en: 'Do not list implied entries matching shell PATTERN.',
              'zh-CN': '不列出匹配的条目.',
            },
            type: 'string',
            multiple: true,
            "cmd": [
              "-I",
              "--ignore"
            ]
          },
          {
            ...common.others,
            items: [
              {
                "name": {
                  "en": "Inode"
                },
                "description": {
                  "en": "print the index number of each file"
                },
                "cmd": [
                  "-i",
                  "--inode"
                ]
              },
            ]
          }
        ],
      }
    }
  ],
}

export default generatorInfo