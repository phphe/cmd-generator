import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'locate',
  description: {
    en: 'Search for entries in a mlocate database.',
    'zh-CN': '查找符合条件的文档, 相比于find, 它有一个数据表.',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  related: ['find', 'which'],
  usages: [
    {
      name: ut.defaultUsageName,
      form:{
        controls: [
          {
            ...common.pathOrPattern,
            multiple: true,
          },
          {
            ...common.others,
            items: [
              {
                "name": {
                  "en": "Must match all patterns",
                  "zh-CN": "全部匹配"
                },
                "description": {
                  "en": "Only print entries that match all patterns",
                  "zh-CN": "只打印符合所有模式的条目"
                },
                "cmd": [
                  "-A",
                  "--all"
                ]
              },
              {
                "name": {
                  "en": "Basename"
                },
                "description": {
                  "en": "match only the base name of path names"
                },
                "cmd": [
                  "-b",
                  "--basename"
                ]
              },
              {
                "name": {
                  "en": "Count",
                  "zh-CN": "计数"
                },
                "description": {
                  "en": "only print number of found entries",
                  "zh-CN": "仅打印找到的数量",
                },
                "cmd": [
                  "-c",
                  "--count"
                ]
              },
              {
                "name": {
                  "en": "existing",
                  "zh-CN": "存在的"
                },
                "description": {
                  "en": "only print entries for currently existing files"
                },
                "cmd": [
                  "-e",
                  "--existing"
                ]
              },
              {
                "name": {
                  "en": "follow"
                },
                "description": {
                  "en": "follow trailing symbolic links when checking file existence (default)"
                },
                "cmd": [
                  "-L",
                  "--follow"
                ]
              },
              {
                "name": {
                  "en": "ignore case",
                  "zh-CN": "忽略大小写"
                },
                "description": {
                  "en": "ignore case distinctions when matching patterns",
                  "zh-CN": "匹配模式时忽略了大小写的区别"
                },
                "cmd": [
                  "-i",
                  "--ignore-case"
                ]
              },
              {
                "name": {
                  "en": "ignore spaces",
                  "zh-CN": "忽略空格"
                },
                "description": {
                  "en": "ignore punctuation and spaces when matching patterns"
                },
                "cmd": [
                  "-p",
                  "--ignore-spaces"
                ]
              },
              {
                "name": {
                  "en": "transliterate"
                },
                "description": {
                  "en": "ignore accents using iconv transliteration when matching patterns"
                },
                "cmd": [
                  "-t",
                  "--transliterate"
                ]
              },
              {
                "name": {
                  "en": "mmap"
                },
                "description": {
                  "en": "ignored, for backward compatibility"
                },
                "cmd": [
                  "-m",
                  "--mmap"
                ]
              },
              {
                "name": {
                  "en": "nofollow"
                },
                "description": {
                  "en": " don't follow trailing symbolic links when checking file existence"
                },
                "cmd": [
                  "-P",
                  "--nofollow",
                  '-H'
                ]
              },
              {
                "name": {
                  "en": "null"
                },
                "description": {
                  "en": "separate entries with NUL on output"
                },
                "cmd": [
                  "-0",
                  "--null"
                ]
              },
              {
                "name": {
                  "en": "statistics",
                  "zh-CN": "统计"
                },
                "description": {
                  "en": "don't search for entries, print statistics about each used database"
                },
                "cmd": [
                  "-S",
                  "--statistics"
                ]
              },
              {
                "name": {
                  "en": "quiet",
                  "zh-CN": "静默"
                },
                "description": {
                  "en": "report no error messages about reading databases"
                },
                "cmd": [
                  "-q",
                  "--quiet"
                ]
              },
              {
                "name": {
                  "en": "regex"
                },
                "description": {
                  "en": "patterns are extended regexps"
                },
                "cmd": [
                  null,
                  "--regex"
                ]
              },
              {
                "name": {
                  "en": "stdio"
                },
                "description": {
                  "en": "ignored, for backward compatibility"
                },
                "cmd": [
                  "-s",
                  "--stdio"
                ]
              },
              {
                "name": {
                  "en": "wholename"
                },
                "description": {
                  "en": "match whole path name (default)",
                  "zh-CN": "匹配全路径名"
                },
                "cmd": [
                  "-w",
                  "--wholename"
                ]
              },
            ],
          },
          {
            "name": {
              "en": "limit output quantity",
              "zh-CN": "限制输出数量"
            },
            "description": {
              "en": "limit output (or counting) to LIMIT entries",
            },
            type: 'string',
            "cmd": [
              "-l",
              "--limit",
              '-n'
            ]
          },
        ],
        advanced: [
          {
            "name": {
              "en": "regexp"
            },
            "description": {
              "en": "search for basic regexp REGEXP instead of patterns"
            },
            type: 'string',
            "cmd": [
              "-r",
              "--regexp"
            ]
          },
          {
            "name": {
              "en": "database",
              "zh-CN": "数据库"
            },
            "description": {
              "en": "use DBPATH instead of default database (which is /var/lib/mlocate/mlocate.db)"
            },
            type: 'string',
            "cmd": [
              "-d",
              "--database"
            ]
          },
        ],
      }
    }
  ],
}

export default generatorInfo