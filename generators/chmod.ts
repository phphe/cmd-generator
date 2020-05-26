import { Generator, common } from "../utils";
import * as ut from "../utils";

const items = {
  verbose: {
    name: {
      en: 'output a diagnostic for every file processed',
      'zh-CN': '显示每个文件的变更信息',
    },
    cmd: ['-v', '--verbose'],
  },
  changes: {
    name: {
      en: 'output a diagnostic for every file processed, only display changed',
      'zh-CN': '显示每个文件的变更信息, 仅显示有改变的',
    },
    cmd: ['-c', '--changes'],
  },
  silent: {
    name: {
      en: 'suppress most error messages',
      'zh-CN': '禁止显示大多数错误消息',
    },
    cmd: ['-f', '--silent', '--quiet'],
  },
}

const generatorInfo:Generator = {
  name: 'chmod',
  description: {
    en: 'Change the permissions of a file or directory.',
    'zh-CN': '改变文件或目录权限.',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  related: ['chown'],
  usages: [
    {
      name: {en: 'Change permissions', 'zh-CN': '改变权限'},
      form: {
        controls: [
          {...common.fileOrDir, multiple: true, cmdPriority: 2},
          {
            name: {en: 'Mode', 'zh-CN': '权限状态'},
            type: 'mixed',
            multiple: true,
            getCmd: (info) => (<ut.MixedMultipleControlValue>info.control.value)
              .filter(oneGroupValue => oneGroupValue.every(value => value && value.length > 0))
              // @ts-ignore
              .map(oneGroupValue => oneGroupValue.map(value => value.join ? value.join('') : value).join('')).join(','),
            cmdPriority: 1,
            controls: [
              {
                "type": "select",
                "items": [
                  {
                    "value": "u",
                    "name": {
                      "en": "file owner(u)",
                      "zh-CN": "文件拥有者(u)"
                    }
                  },
                  {
                    "value": "g",
                    "name": {
                      "en": "members of the file's group(g)",
                      "zh-CN": "文件群组用户(g)"
                    }
                  },
                  {
                    "value": "o",
                    "name": {
                      "en": "other users(o)",
                      "zh-CN": "其他用户(o)"
                    }
                  },
                  {
                    "value": "a",
                    "name": {
                      "en": "all users(a)",
                      "zh-CN": "所有用户(a)"
                    }
                  }
                ]
              },
              {
                "type": "select",
                "items": [
                  {
                    "value": "+",
                    "name": {
                      "en": "add(+)",
                      "zh-CN": "增加(+)"
                    }
                  },
                  {
                    "value": "-",
                    "name": {
                      "en": "remove(-)",
                      "zh-CN": "删除(-)"
                    }
                  },
                  {
                    "value": "=",
                    "name": {
                      "en": "allow only(=)",
                      "zh-CN": "仅允许(=)"
                    }
                  }
                ]
              },
              {
                "type": "select",
                "multiple": true,
                "items": [
                  {
                    "value": "r",
                    "name": {
                      "en": "read(r)",
                      "zh-CN": "读(r)"
                    }
                  },
                  {
                    "value": "w",
                    "name": {
                      "en": "write(w)",
                      "zh-CN": "写(w)"
                    }
                  },
                  {
                    "value": "x",
                    "name": {
                      "en": "execute(x)",
                      "zh-CN": "执行(x)"
                    }
                  }
                ]
              }
            ],
          },
          {
            ...common.others,
            items: [
              {
                name: {en: 'Change files and directories recursively', 'zh-CN': '递归地更改文件和目录'},
                cmd: ['-R', '--recursive'],
              },
              items.silent,
            ],
          },
          {
            ...common.others,
            multiple: false,
            items: [
              {...items.verbose, defaultValue: true},
              {...items.changes},
            ]
          },
        ],
      }
    },
    {
      name: {en: 'Copy permissions', 'zh-CN': '克隆权限'},
      description: {
        en: 'Copy permissions from one file or directory to others.',
        'zh-CN': '克隆一个文件或目录的权限到其它文件或目录.',
      },
      form: {
        controls: [
          {...common.fileOrDir, multiple: true, cmdPriority: 2},
          {
            name: {en: 'Copy from', 'zh-CN': '目标文件/目录'},
            type: 'string',
            cmd: ['--reference'],
          },
          {
            ...common.others,
            items: [
              {
                name: {en: 'Change files and directories recursively', 'zh-CN': '递归地更改文件和目录'},
                cmd: ['-R', '--recursive'],
              },
              items.silent,
            ],
          },
          {
            ...common.others,
            multiple: false,
            items: [
              {...items.verbose, defaultValue: true},
              {...items.changes},
            ]
          },
        ],
      }
    },
  ],
}

export default generatorInfo