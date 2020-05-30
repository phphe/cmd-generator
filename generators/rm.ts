import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'rm',
  description: {
    en: 'Remove (unlink) files or directories.',
    'zh-CN': '删除单个或多个文件或目录',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  usages: [
    {
      name: ut.defaultUsageName,
      form: {
        controls: [
          {
            ...common.fileOrDir,
            multiple: true,
          },
          {
            name: {en: 'Prompt', 'zh-CN': '询问'},
            type: 'check',
            items: [
              {
                name: {en: 'Prompt always', 'zh-CN': '总是询问'},
                cmd: ['-i'],
              },
              {
                name: {en: 'Prompt once', 'zh-CN': '询问一次'},
                description: {
                  en: 'Prompt once before removing more than three files, or when removing recursively; less intrusive than -i, while still giving protection against most mistakes.',
                },
                cmd: ['-I'],
              },
            ],
          },
          {
            name: {en: 'Directory', 'zh-CN': '目录处理'},
            type: 'check',
            items: [
              {
                name: {en: 'Remove empty directories', 'zh-CN': '删除空目录'},
                cmd: ['-d', '--dir'],
              },
              {
                name: {en: 'Remove directories and their contents recursively', 'zh-CN': '递归地删除目录和其子级'},
                cmd: ['-r', '--recursive', '-R'],
              },
            ],
          },
          {
            ...common.others,
            items: [
              {...common.verbose, defaultValue: true},
            ],
          }
        ],
      },
    }
  ],
}

export default generatorInfo