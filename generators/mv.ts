import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'mv',
  description: {
    en: 'Move files or group of files or directory',
    'zh-CN': '移动单个或多个文件或目录',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
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
              en: 'If target path no file or directory existing, move source to there and rename; If target is directory, move into the directory; If target is file, overwrite the file.',
              'zh-CN': '如果目标路径不存在文件或目录, 则移动到该处并重命名源文件或目录; 如果目标路径是目录, 则移动到该目录中; 如果目标路径是文件, 则覆盖该文件.',
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
                name: {en: 'Move only newer or missing files', 'zh-CN': '仅移动较新或缺失的文件'},
                cmd: ['-u', '--update'],
              }
            ],
          }
        ],
      },
    }
  ],
}

export default generatorInfo