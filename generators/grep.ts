import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'grep',
  description: {
    en: 'Search for PATTERN in each FILE.',
    'zh-CN': '在文件内容中搜索PATTERN.',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  related: [],
  usages: [
    {
      name: ut.defaultUsageName,
      form: {
        controls: [
          {
            name: 'PATTERN',
            type: 'string',
          },
          {
            name: {en: 'File or directory path', 'zh-CN': '文件或目录路径'},
            type: 'string',
            multiple: true,
          },
          {
            ...common.others,
            items: [
              {
                "name": {
                  "en": "Search directory recursively",
                  'zh-CN': "递归地搜索目录",
                },
                "cmd": ["-r","--recursive"]
              },
              {
                "name": {
                  "en": "Ignore case",
                  "zh-CN": "忽略大小写"
                },
                "description": {
                  "en": "Ignore case distinctions"
                },
                "cmd": [
                  "-i",
                  "--ignore-case"
                ]
              },
              {
                "name": {
                  "en": "word-regexp",
                  'zh-CN': '全词匹配',
                },
                "description": {
                  "en": "force PATTERN to match only whole words",
                  "zh-CN": "强制PATTERN匹配整个单词"
                },
                "cmd": [
                  "-w",
                  "--word-regexp"
                ]
              },
              {
                "name": {
                  "en": "line-regexp",
                  'zh-CN': '整行匹配',
                },
                "description": {
                  "en": "force PATTERN to match only whole lines",
                  "zh-CN": "强制PATTERN匹配整行"
                },
                "cmd": [
                  "-x",
                  "--line-regexp"
                ]
              },
              {
                name: {en: 'Line number', 'zh-CN': '输出行号'},
                cmd: ['-n', '--line-number'],
              }
            ],
          },
        ],
        advanced: [
          {
            name: {en: 'Include', 'zh-CN': '包含'},
            description: {
              en: 'search only files that matched',
              'zh-CN': '在匹配的文件中搜索',
            },
            cmd: ['--include'],
            type: "string",
            multiple: true,
          },
          {
            name: {en: 'Exclude', 'zh-CN': '排除'},
            description: {
              en: 'Skip files and directories matched',
              'zh-CN': '跳过匹配的文件和目录',
            },
            cmd: ['--exclude'],
            type: "string",
            multiple: true,
          },
          {
            name: {en: 'Exclude matched directory', 'zh-CN': '排除匹配的目录'},
            description: {
              en: 'Skip directories matched',
              'zh-CN': '仅跳过匹配的目录',
            },
            cmd: ['--exclude-dir'],
            type: "string",
            multiple: true,
          },
          {
            name: {en: 'PATTERN type', 'zh-CN': 'PATTERN类型'},
            type: "check",
            items: [
              {
                "name": {
                  "en": "extended regexp",
                  'zh-CN': '扩展的正则表达式',
                },
                "description": {
                  "en": "PATTERN is an extended regular expression",
                  "zh-CN": "PATTERN是一个扩展的正则表达式"
                },
                "cmd": [
                  "-E",
                  "--extended-regexp"
                ]
              },
              {
                "name": {
                  "en": "fixed-strings",
                  'zh-CN': '固定字符串'
                },
                "description": {
                  "en": "PATTERN is a set of newline-separated strings",
                  'zh-CN': "PATTERN是一组用换行符分隔的字符串",
                },
                "cmd": [
                  "-F",
                  "--fixed-strings"
                ]
              },
              {
                "name": {
                  "en": "basic-regexp",
                  'zh-CN': "基本的正则表达式(默认)",
                },
                "description": {
                  "en": "PATTERN is a basic regular expression (default)",
                  "zh-CN": "PATTERN是一个基本的正则表达式（缺省）。"
                },
                "cmd": [
                  "-G",
                  "--basic-regexp"
                ]
              },
              {
                "name": {
                  "en": "perl-regexp",
                  "zh-CN": "Perl正则表达式"
                },
                "description": {
                  "en": "PATTERN is a Perl regular expression",
                  "zh-CN": "PATTERN 是Perl 正则表达式"
                },
                "cmd": [
                  "-P",
                  "--perl-regexp"
                ]
              },
            ],
          },
          {
            "name": {
              "en": "how to handle directories",
              'zh-CN': '处理目录'
            },
            "description": {
              "en": "how to handle directories; ACTION is 'read', 'recurse', or 'skip'",
              'zh-CN': "如何处理目录, 可输入'read', 'recurse', or 'skip'",
            },
            type: 'string',
            "cmd": [
              "-d",
              "--directories"
            ],
          },
          {
            "name": {
              "en": "how to handle devices, FIFOs and sockets; ACTION is 'read' or 'skip'"
            },
            type: 'string',
            "cmd": [
              "-D",
              "--devices"
            ]
          },
          {
            ...common.others,
            items: [
              {
                name: {en: 'Invert match', 'zh-CN': '反转'},
                description: {
                  en: 'select non-matching lines',
                  'zh-CN': '选择未匹配的行',
                },
                cmd: ['-v', '--invert-match']
              },
              {
                name: {en: 'With filename', 'zh-CN': '输出文件名'},
                cmd: ['-H', '--with-filename']
              },
              {
                name: {en: 'No filename', 'zh-CN': '不输出文件名'},
                cmd: ['-h', '--no-filename']
              },
              {
                name: {en: 'Show only the matched part', 'zh-CN': '仅显示匹配的部分'},
                cmd: ['-o', '--only-matching']
              },
              {
                name: {en: 'Suppress all normal output', 'zh-CN': '啥也不输出'},
                cmd: ['-q', '--quiet', '--silent']
              },
              {
                "name": {
                  "en": "Search directory recursively, but follow all symlinks"
                },
                "cmd": [
                  "-R",
                  "--dereference-recursive"
                ]
              },
              {
                "name": {
                  "en": "print only names of FILEs with no selected lines"
                },
                "cmd": [
                  "-L",
                  "--files-without-match"
                ]
              },
              {
                "name": {
                  "en": "print only names of FILEs with selected lines"
                },
                "cmd": [
                  "-l",
                  "--files-with-matches"
                ]
              },
              {
                "name": {
                  "en": "print only a count of selected lines per FILE"
                },
                "cmd": [
                  "-c",
                  "--count"
                ]
              },
              {
                "name": {
                  "en": "make tabs line up (if needed)"
                },
                "cmd": [
                  "-T",
                  "--initial-tab"
                ]
              },
              {
                "name": {
                  "en": "print 0 byte after FILE name"
                },
                "cmd": [
                  "-Z",
                  "--null"
                ]
              },
              {
                "name": {
                  "en": "do not strip CR characters at EOL (MSDOS/Windows)"
                },
                "cmd": [
                  "-U",
                  "--binary"
                ]
              }
            ],
          }
        ],
      }
    }
  ],
}

export default generatorInfo