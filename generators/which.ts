import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'which',
  description: {
    en: `Locate a program file in the user's path.`,
    'zh-CN': '搜索命令行的路径.',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  related: ['find', 'locate'],
  usages: [
    {
      name: ut.defaultUsageName,
      form: {
        controls: [
          {
            name: {en: 'Command name', 'zh-CN': '命令行名称'},
            type: 'string',
            multiple: true,
          },
          {
            ...common.others,
            items: [
              {
                name: {en: 'List all instances of executables found (instead of just the first one of each).', 'zh-CN': '列出全部'},
                cmd: ['-a'],
              },
              {
                name: {en: 'No output, just return 0 if all of the executables are found, or 1 if some were not found.', 'zh-CN': '如果全部命令都找到了, 输出0; 否则输出1.'},
                cmd: ['-s'],
              },
            ],
          }
        ]
      }
    }
  ],
}

export default generatorInfo