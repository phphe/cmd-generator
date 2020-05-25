import { Generator, common } from "../utils";
import * as ut from "../utils";

const controls = {
  number: {
    name: {en: 'Number all output lines', 'zh-CN': '显示行号'},
    cmd: ['-n', '--number'],
  },
  showEnds: {
    name: {en: 'Display $ at end of each line', 'zh-CN': '行尾显示$'},
    cmd: ['-E', '--show-ends'],
  },
  squeezeBlank: {
    name: {en: 'Squeeze blank'},
    description: {en: 'Suppress repeated empty output lines'},
    cmd: ['-s', '--squeeze-blank'],
  },
  showTabs: {
    name: {en: 'Display TAB characters as ^I'},
    cmd: ['-T', '--show-tabs'],
  },
  showNonprinting: {
    name: {en: 'Show nonprinting'},
    description: {en: 'Use ^ and M- notation, except for LFD and TAB'},
    cmd: ['-v', '--show-nonprinting'],
  },
}

export default <Generator>{
  name: 'cat',
  description: {
    en: 'Concatenate FILE(s) to standard output. With no FILE, or when FILE is -, read standard input.',
    'zh-CN': '将FILE串联到标准输出。如果没有FILE，或者FILE为-时，读取标准输入.',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  cmdName: 'cat',
  usages: [
    {
      name: ut.defaultUsageName,
      description: {
        en: `Outputs the contents of one or more files or standard inputs. The default output is to the standard output, which is equivalent to displaying them. Use '-' for standard input, so you can enter the content manually. You can use angle brackets to output or append to a file, please search 'bash angle brackets' for more.`,
        'zh-CN': `输出一个或多个文件或标准输入的内容. 默认输出到标准输出, 相当于显示他们. 使用'-'代表标准输入, 这样你可以手动输入内容. 可以使用尖括号输出或附加到文件, 详情请搜索'bash 尖括号'.`,
      },
      form: {
        controls: [
          {...common.file, multiple: true,
            description: {
              en: `'-' means standard input. Can only be used once. Must be at the end of the file list.`,
              'zh-CN': `'-'代表标准输入. 只可使用一次. 只能在文件列表的最后.`,
            }
          },
          {...common.others, items: [controls.number, controls.showEnds, controls.squeezeBlank, controls.showTabs, controls.showNonprinting]}
        ],
      }
    },
  ],
}