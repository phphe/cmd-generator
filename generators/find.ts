import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'find',
  description: {
    en: 'Search for files in a directory hierarchy',
    'zh-CN': '在指定目录搜索文件.',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  related: [],
  usages: [
    {
      name: ut.defaultUsageName,
      form:{
        controls: [
          {
            name: {en: 'Directory', 'zh-CN': '目录'},
            description: {
              en: 'Search in the specified directory.',
              'zh-CN': '在指定目录搜索',
            },
            type: 'string',
            multiple: true,
            cmdPriority: 0,
          },
          {
            name: {en: 'By name', 'zh-CN': '匹配名称'},
            description: {en: 'Find by name. Can be pattern, example: *.txt', 'zh-CN': '按名称查找, 可以是pattern, 例: *.txt'},
            type: 'string',
            cmd: ['-name'],
            getCmd: info => `${info.cmd} "${info.control.value}"`
          },
          {
            name: {en: 'By name ignore case', 'zh-CN': '匹配名称忽略大小写'},
            type: 'string',
            cmd: ['-iname'],
            getCmd: info => `${info.cmd} "${info.control.value}"`
          },
          {
            name: {en: 'By path', 'zh-CN': '匹配路径'},
            type: 'string',
            cmd: ['-path'],
            getCmd: info => `${info.cmd} "${info.control.value}"`
          },
          {
            name: {en: 'By regex', 'zh-CN': '正则'},
            description: {
              en: 'Match whole path using regular expression.',
              'zh-CN': '使用标准正则匹配完整路径.'
            },
            type: 'string',
            cmd: ['-regex '],
            getCmd: info => `${info.cmd} "${info.control.value}"`
          },
          {
            name: {en: 'By regex ignore case', 'zh-CN': '正则忽略大小写'},
            description: {
              en: 'Match whole path using regular expression.',
              'zh-CN': '使用标准正则匹配完整路径.'
            },
            type: 'string',
            cmd: ['-iregex '],
            getCmd: info => `${info.cmd} "${info.control.value}"`
          },
          {
            name: {en: 'By type', 'zh-CN': '类型'},
            type: 'select',
            cmd: ['-type'],
            items: [
              {value: 'f', name: {en: 'regular file(f)', 'zh-CN': '普通文件(f)'}},
              {value: 'd', name: {en: 'directory(d)', 'zh-CN': '目录(d)'}},
              {value: 'l', name: {en: 'symbolic link(l)', 'zh-CN': '符号连接(l)'}},
              {value: 'b', name: {en: 'block special(b)', 'zh-CN': '块设备(b)'}},
              {value: 'c', name: {en: 'character special(c)'}},
              {value: 'p', name: {en: 'FIFO(p)'}},
              {value: 's', name: {en: 'socket(s)', 'zh-CN': '套接字(s)'}},
            ],
          },
          {
            ...common.others,
            items: [
              {
                name: {en: 'Match empty directory and file', 'zh-CN': '匹配空目录或文件'},
                cmd: ['-empty'],
              },
              {
                name: {en: 'Delete found', 'zh-CN': '删除找到的'},
                cmd: ['-delete'],
              },
            ]
          }
        ],
        advanced: [
          {
            name: {en: 'By permission', 'zh-CN': '匹配权限'},
            description: {
              en: 'Example: 777',
              'zh-CN': '例: 777',
            },
            type: 'string',
            cmd: ['-perm'],
          },
          {
            name: {en: 'By owner', 'zh-CN': '匹配文件拥有者'},
            type: 'string',
            cmd: ['-user'],
          },
          {
            name: {en: 'By group', 'zh-CN': '匹配用户组'},
            type: 'string',
            cmd: ['-group'],
          },
          {
            name: {en: 'Min depth', 'zh-CN': '最小深度'},
            type: 'string',
            cmd: ['-mindepth'],
          },
          {
            name: {en: 'Max depth', 'zh-CN': '大小深度'},
            type: 'string',
            cmd: ['-maxdepth'],
          },
          {
            type: 'document',
            description: {
              en: 
`Time units: s, m, h, d, w. They correspond to second, minute, hour, day, week.
You can add a positive or negative sign before the time. A positive sign means greater than this time. A negative sign means less than this time. No sign means just equal to this time. So if two times are added, one has a positive sign and one has a negative sign, it query a range. 
Example of time: 1h30m, -7d, +7d.`,
              'zh-CN': 
`时间单位: s, m, h, d, w. 对应着 秒, 分钟, 小时, 天, 周.
时间前可以添加正号或负号. 正号代表大于此时间. 负号代表小于此时间. 无符号代表刚好等于此时间. 所以如果添加了两个时间, 一个有正号, 一个有负号, 这代表查询一个范围.
例子: 1h30m, -7d, +7d.`,
            }
          },
          {
            name: {en: 'Last access time', 'zh-CN': '最近访问时间'},
            type: 'string',
            multiple: true,
            cmd: ['-atime'],
          },
          {
            name: {en: 'Last file modification time', 'zh-CN': '最近文件本身修改时间'},
            type: 'string',
            multiple: true,
            cmd: ['-mtime'],
          },
          {
            name: {en: 'Last file meta data modification time', 'zh-CN': '最近文件元数据修改时间'},
            description: {
              en: 'Such as permission',
              'zh-CN': '例如文件权限',
            },
            type: 'string',
            multiple: true,
            cmd: ['-ctime'],
          },
          {
            type: 'document',
            description: {
              en: 
`Size units: b, c, k, M, G, T, P. They correspond to 512-byte blocks, bytes, kilobytes, megabytes, gigabytes, terabytes, petabytes.
You can add a positive or negative sign before the size. A positive sign means greater than this size. A negative sign means less than this size. No sign means just equal to this size. So if two size are added, one has a positive sign and one has a negative sign, it query a range.
Example of time: 10k, -10k, +10k.`,
              'zh-CN': 
`文件尺寸单位: b, c, k, M, G, T, P. 对应着块（512字节）, 字节, KiB, MiB, GiB, TiB, PiB.
尺寸前可以添加正号或负号. 正号代表大于此值. 负号代表小于此值. 无符号代表刚好等于此值. 所以如果添加了两个值, 一个有正号, 一个有负号, 这代表查询一个范围.
例子: 10k, -10k, +10k.`,
            }
          },
          {
            name: {en: 'Size', 'zh-CN': '文件尺寸'},
            type: 'string',
            multiple: true,
            cmd: ['-size'],
          },
          {
            name: {en: 'Size', 'zh-CN': '文件尺寸'},
            type: 'string',
            cmd: ['-size'],
          },
          {
            name: {en: 'Execute other command after found', 'zh-CN': '执行其它命令'},
            description: {en: `If the
            string "{}" appears anywhere, it is replaced by the pathname of the current file.`},
            type: 'string',
            cmd: ['-exec'],
            getCmd: info => `${info.cmd} "${info.control.value}"`
          },
          {
            name: {en: 'Link', 'zh-CN': '链接'},
            description: {
              en: 'Find the hard link file of specified. If the option -L is specified, it finds symbolic link.',
              'zh-CN': '寻找指定文件的硬链接. 如果-L选项指定了, 则寻找软链接.',
            },
            type: 'string',
            cmd: ['-samefile'],
          },
          {
            ...common.others,
            items: [
              {
                name: {en: 'Belongs to an unknown user', 'zh-CN': '属于未知用户的'},
                cmd: ['-nouser'],
              },
              {
                name: {en: 'Belongs to an unknown group', 'zh-CN': '属于未知用户组的'},
                cmd: ['-nogroup'],
              },
              {
                name: {en: 'Symbolic link', 'zh-CN': '软链接'},
                cmd: ['-L'],
                description: {
                  en: `Cause the file information and file type returned for each symbolic link to be those of the file referenced by the link, not the link itself.  If the referenced file does not exist, the file information and type will be for the link itself.`
                }
              },
              {
                name: {en: 'Sparse'},
                cmd: ['-sparse'],
                description: {
                  en: `True if the current file is sparse, i.e. has fewer blocks allocated than expected based on its size in bytes. This might also match files that have been compressed by the filesystem.`
                }
              },
            ]
          }
        ]
      }
    }
  ],
}

export default generatorInfo