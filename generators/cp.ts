import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'cp',
  description: {
    en: 'Copy files or group of files or directory',
    'zh-CN': '复制单个或多个文件或目录',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  related: ['mv', 'rm'],
  usages: [
    {
      name: ut.defaultUsageName,
      form: {
        controls: [
          {
            name: {en: 'Source file or directory', 'zh-CN': '源文件或目录'},
            type: 'string',
            multiple: true,
          },
          {
            name: {en: 'Target path', 'zh-CN': '目标路径'},
            description: {
              en: 'If target path no file or directory existing, copy source to there and rename; If target is directory, copy into the directory; If target is file, overwrite the file.',
              'zh-CN': '如果目标路径不存在文件或目录, 则复制到该处并重命名源文件或目录; 如果目标路径是目录, 则复制到该目录中; 如果目标路径是文件, 则覆盖该文件.',
            },
            type: 'string',
          },
          {
            name: {en: 'Overwrite', 'zh-CN': '覆盖'},
            type: 'check',
            items: [
              {
                name: {en: 'Prompt before overwrite', 'zh-CN': '覆盖前询问'},
                cmd: ['-i', '--interactive'],
                defaultValue: true,
              },
              {
                name: {en: 'Do not overwrite an existing file', 'zh-CN': '不覆盖已存在文件'},
                cmd: ['-n', '--no-clobber'],
              },
              {
                name: {en: 'Overwrite existing file', 'zh-CN': '覆盖已存在文件'},
                cmd: ['-f', '--force'],
              }
            ],
          },
          {
            ...common.others,
            items: [
              {...common.verbose, defaultValue: true},
              {
                name: {en: 'Copy directories recursively', 'zh-CN': '递归地复制目录'},
                cmd: ['-r', '--recursive', '-R']
              },
              {
                name: {en: 'Copy only newer or missing files', 'zh-CN': '仅复制较新或缺失的文件'},
                cmd: ['-u', '--update'],
              }
            ],
          }
        ],
        advanced: [
          {
            name: {en: 'Make links instead of copying', 'zh-CN': '创建链接而不复制'},
            type: 'check',
            items: [
              {
                name: {en: 'Hard link files instead of copying', 'zh-CN': '执行硬链接而不复制'},
                cmd: ['-l', '--link'],
              },
              {
                name: {en: 'Make symbolic links instead of copying', 'zh-CN': '创建软链接而不复制'},
                cmd: ['-s', '--symbolic-link'],
              },
            ],
          },
          {
            ...common.others,
            items: [
              {
                name: {en: 'Never follow symbolic links', 'zh-CN': '仅复制软链接文件自己'},
                cmd: ['-P', '--no-dereference'],
              },
              {
                name: {en: 'Lightweight copy', 'zh-CN': '轻量级复制'},
                description: {
                  en: 'When --reflink[=always] is specified, perform a lightweight copy, where the data blocks are copied only when modified.  If this is not possible the copy fails, or if --reflink=auto is specified, fall back to a standard copy.',
                },
                cmd: ['--reflink'],
              }
            ],
          }
        ],
      },
    }
  ],
}

export default generatorInfo