import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {
  noDereference: {
    "name": {
      "en": "No dereference"
    },
    "description": {
      "en": "treat link target as a normal file if it is a symbolic link to a directory"
    },
    "cmd": [
      "-n",
      "--no-dereference"
    ]
  },
  relative: {
    "name": {
      "en": "Relative",
      "zh-CN": "相对路径"
    },
    "description": {
      "en": "Create symbolic links relative to link location",
      "zh-CN": "创建相对于链接位置的软链接"
    },
    "cmd": [
      "-r",
      "--relative"
    ]
  },
  verbose: {
    "name": {
      "en": "Print name of each linked file",
      'zh-CN': "输出每个链接文件名",
    },
    "cmd": [
      "-v",
      "--verbose"
    ]
  },
  force: {
    "name": {
      "en": "force",
      "zh-CN": "强制"
    },
    "description": {
      "en": "remove existing destination files",
      "zh-CN": "删除现有目标文件"
    },
    "cmd": [
      "-f",
      "--force"
    ]
  },
  interactive: {
    "name": {
      "en": "interactive",
      "zh-CN": "总是询问"
    },
    "description": {
      "en": "prompt whether to remove destinations",
      "zh-CN": "删除时询问"
    },
    "cmd": [
      "-i",
      "--interactive"
    ]
  },
}

const controls: ut.controlsObject = {
  targetDirectory: {
    "name": {
      "en": "Target directory",
      "zh-CN": "目标目录"
    },
    "description": {
      "en": "specify the DIRECTORY in which to create the links. Blank is current directory.",
      "zh-CN": "指定要创建链接的目录. 留空代表当前目录."
    },
    type: 'string',
    "cmd": [
      "-t",
      "--target-directory"
    ]
  },
}

const generatorInfo:Generator = {
  name: 'ln',
  description: {
    en: 'Create hard links, symbolic links.',
    'zh-CN': '创建硬链接，软链接(符号链接).',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  usages: [
    {
      name: {en: 'Create single hard link', 'zh-CN': '创建单个硬链接'},
      form:{
        controls: [
          {...common.fileOrDir},
          {
            name: {en: 'Link path', 'zh-CN': '链接路径'},
            description: {
              en: 'Where the created link file be storaged.',
              'zh-CN': '将要创建的链接文件存放的路径',
            },
            type: 'string',
          },
          {
            ...common.others,
            items: [
              items.force,
              items.interactive,
            ],
          }
        ],
        advanced: [
          {
            type: 'check',
            multiple: true,
            items: [
              items.noDereference,
            ]
          }
        ],
      }
    },
    {
      name: {en: 'Create multiple hard links', 'zh-CN': '创建多个硬链接'},
      description: {
        en: 'Create multiple links in one directory. The link name will be same with target',
        'zh-CN': '在指定的一个目录内创建多个链接. 链接名将会和链接目标一样.',
      },
      form:{
        controls: [
          {...common.fileOrDir, multiple: true},
          controls.targetDirectory,
          {
            ...common.others,
            items: [
              items.force,
              items.interactive,
              items.verbose,
            ],
          }
        ],
        advanced: [
          {
            type: 'check',
            multiple: true,
            items: [
              items.noDereference,
            ]
          }
        ],
      }
    },
    {
      name: {en: 'Create single symbolic link', 'zh-CN': '创建单个软链接'},
      cmd: ['-s', '--symbolic'],
      form:{
        controls: [
          {...common.fileOrDir},
          {
            name: {en: 'Link path', 'zh-CN': '链接路径'},
            description: {
              en: 'Where the created link file be storaged.',
              'zh-CN': '将要创建的链接文件存放的路径.',
            },
            type: 'string',
          },
          {
            ...common.others,
            items: [
              {...items.relative, defaultValue: true},
              items.force,
              items.interactive,
            ],
          }
        ],
        advanced: [
          {
            type: 'check',
            multiple: true,
            items: [
              items.noDereference,
            ]
          }
        ],
      }
    },
    {
      name: {en: 'Create multiple symbolic links', 'zh-CN': '创建多个软链接'},
      cmd: ['-s', '--symbolic'],
      description: {
        en: 'Create multiple links in one directory. The link name will be same with target',
        'zh-CN': '在指定的一个目录内创建多个链接. 链接名将会和链接目标一样.',
      },
      form:{
        controls: [
          {...common.fileOrDir, multiple: true},
          controls.targetDirectory,
          {
            ...common.others,
            items: [
              {...items.relative, defaultValue: true},
              items.force,
              items.interactive,
              items.verbose,
            ],
          }
        ],
        advanced: [
          {
            type: 'check',
            multiple: true,
            items: [
              items.noDereference,
            ]
          }
        ],
      }
    },
  ],
}

export default generatorInfo