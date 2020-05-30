import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'du',
  description: {
    "en": "Summarize disk usage of the set of files, recursively for directories.",
    "zh-CN": "总结给定文件的磁盘使用情况。"
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  related: ['df', 'du'],
  usages: [
    {
      name: ut.defaultUsageName,
      form:{
        controls: [
          {
            ...common.pathOrPattern,
            multiple: true,
            description: {en: 'Show all children of current directory if left blank.', 'zh-CN': '留空时显示当前目录所有子级.'},
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
            "name": {
              "en": "Max depth",
              "zh-CN": "最大深度"
            },
            "description": {
              "en": "print the total for a directory (or file, with --all) only if it is N or fewer levels below the command line argument; --max-depth=0 is the same as  --summarize"
            },
            type: 'string',
            "cmd": [
              "-d",
              "--max-depth"
            ]
          },
          {
            type: 'check',
            multiple: true,
            items: [
              {
                "name": {
                  "en": "all",
                  "zh-CN": "所有"
                },
                "description": {
                  "en": "write counts for all files, not just directories",
                  "zh-CN": "统计所有文件，而不只是目录"
                },
                "cmd": [
                  "-a",
                  "--all"
                ]
              },
              {
                "name": {
                  "en": "Human readable",
                  "zh-CN": "易读的"
                },
                "description": {
                  "en": "print sizes in human readable format (e.g., 1K 234M 2G)",
                },
                "cmd": [
                  "-h",
                  "--human-readable"
                ]
              },
              {
                "name": {
                  "en": "total",
                  "zh-CN": "总计"
                },
                "description": {
                  "en": "produce a grand total"
                },
                "cmd": [
                  "-c",
                  "--total"
                ]
              },
              {
                "name": {
                  "en": "1k=1000",
                  "zh-CN": "1k=1000"
                },
                "description": {
                  "en": "like -h, but use powers of 1000 not 1024",
                  "zh-CN": "就像-h一样，但是1000而不是1024"
                },
                "cmd": [
                  "--si"
                ]
              },
            ],
          }
        ],
        advanced: [
          {
            type: 'check',
            multiple: true,
            items: [
              {
                "name": {
                  "en": "end each output line with NUL, not newline",
                },
                "cmd": [
                  "-0",
                  "--null"
                ]
              },
              {
                "name": {
                  "en": "Apparent size"
                },
                "description": {
                  "en": "print apparent sizes, rather than disk usage; although the apparent size is usually smaller, it may be larger due to holes in ('sparse') files, internal fragmentation, indirect blocks, and the like"
                },
                "cmd": [
                  "--apparent-size"
                ]
              },
              {
                "name": {
                  "en": "dereference-args"
                },
                "description": {
                  "en": "dereference only symlinks that are listed on the command line",
                  "zh-CN": "仅对命令行中列出的符号链接进行引用。"
                },
                "cmd": [
                  "-D",
                  "--dereference-args"
                ]
              },
              {
                "name": {
                  "en": "inodes",
                  "zh-CN": "节点"
                },
                "description": {
                  "en": "list inode usage information instead of block usage",
                  "zh-CN": "列出节点(inode)使用信息，而不是块使用信息"
                },
                "cmd": [
                  "--inodes"
                ]
              },
              {
                "name": {
                  "en": "dereference"
                },
                "description": {
                  "en": "dereference all symbolic links"
                },
                "cmd": [
                  "-L",
                  "--dereference"
                ]
              },
              {
                "name": {
                  "en": "count-links"
                },
                "description": {
                  "en": "count sizes many times if hard linked"
                },
                "cmd": [
                  "-l",
                  "--count-links"
                ]
              },
              {
                "name": {
                  "en": "no-dereference"
                },
                "description": {
                  "en": "don't follow any symbolic links (this is the default)",
                  "zh-CN": "不遵循任何符号链接(默认)。"
                },
                "cmd": [
                  "-P",
                  "--no-dereference"
                ]
              },
              {
                "name": {
                  "en": "separate-dirs",
                  "zh-CN": "分隔目录"
                },
                "description": {
                  "en": "for directories do not include size of subdirectories",
                  "zh-CN": "目录不包括子目录的大小。"
                },
                "cmd": [
                  "-S",
                  "--separate-dirs"
                ]
              },
              {
                "name": {
                  "en": "summarize",
                  "zh-CN": "概括"
                },
                "description": {
                  "en": "display only a total for each argument"
                },
                "cmd": [
                  "-s",
                  "--summarize"
                ]
              },
              {
                "name": {
                  "en": "one-file-system"
                },
                "description": {
                  "en": "skip directories on different file systems"
                },
                "cmd": [
                  "-x",
                  "--one-file-system"
                ]
              },
            ],
          },
          {
            "name": {
              "en": "Threshold",
              "zh-CN": "阈值"
            },
            "description": {
              "en": "exclude entries smaller than value if positive, or entries greater than value if negative",
              "zh-CN": "如果是正数，则排除小于输入值的，如果是负数，则排除大于值的。"
            },
            type: 'string',
            "cmd": [
              "-t",
              "--threshold"
            ]
          },
          {
            "name": {
              "en": "Time",
              "zh-CN": "时间"
            },
            "description": {
              "en": "show time as WORD instead of modification time: atime, access, use, ctime or status"
            },
            type: 'select',
            "items": [
              "atime",
              "access",
              "use",
              "ctime",
              "status"
            ],
            "cmd": [
              "--time"
            ]
          },
          {
            "name": {
              "en": "Time style",
              "zh-CN": "时间格式"
            },
            "description": {
              "en": "show times using STYLE, which can be: full-iso, long-iso, iso, or +FORMAT; FORMAT is interpreted like in 'date'",
            },
            type: 'string',
            "cmd": [
              "--time-style"
            ]
          },
          {
            "name": {
              "en": "Exclude",
              "zh-CN": "排除"
            },
            "description": {
              "en": "Exclude files that match pattern",
              "zh-CN": "剔除符合PATTERN的文件"
            },
            type: 'string',
            "multiple": true,
            "cmd": [
              "--exclude"
            ]
          },
          {
            "name": {
              "en": "Exclude from file",
              "zh-CN": "从文件中排除"
            },
            "description": {
              "en": "exclude files that match any pattern in file",
              "zh-CN": "指定一个包含pattern的文件. 剔除符合该文件中任何pattern的文件"
            },
            type: 'string',
            "cmd": [
              "-X",
              "--exclude-from"
            ]
          },
        ],
      }
    }
  ],
}

export default generatorInfo