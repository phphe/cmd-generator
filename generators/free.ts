import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'free',
  description: {
    en: 'Shows system memory usage, including physical memory, interactive zone memory (SWAP), and kernel buffer memory.',
    'zh-CN': '显示系统内存使用情况，包括物理内存、交互区内存(swap)和内核缓冲区内存.',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  related: [],
  usages: [
    {
      name: ut.defaultUsageName,
      form: {
        controls: [
          {
            name: {en: 'Options', 'zh-CN': '选项'},
            type: 'check',
            multiple: true,
            items: [
              {
                name: {en: 'Human readable', 'zh-CN': '易读的'},
                cmd: ['-h', '--human'],
                defaultValue: true,
              },
              {
                name: '1k=1000',
                "description": {
                  "en": "use powers of 1000 not 1024",
                  "zh-CN": "使用1000进制"
                },
                cmd: ['--si'],
              },
              {
                name: {en: 'Show detailed low and high memory statistics', 'zh-CN': '显示详细的低内存和高内存统计'},
                cmd: ['-l', '--lohi'],
              },
              {
                name: {en: 'Show total for RAM + swap', 'zh-CN': '显示RAM和swap的总计'},
                cmd: ['-t', '--total'],
              },
              {
                name: {en: 'Wide output', 'zh-CN': '宽输出'},
                cmd: ['-w', '--wide'],
              },
            ]
          },
          {
            name: {en: 'Repeat every seconds', 'zh-CN': '每N秒重复打印'},
            type: 'string',
            cmd: ['-s', '--seconds'],
          },
          {
            name: {en: 'Repeat times', 'zh-CN': '重复打印N次'},
            description: {
              en: 'Repeat printing N times, then exit',
              'zh-CN': '重复打印N次，然后退出',
            },
            type: 'string',
            cmd: ['-c', '--count'],
          },
        ],
        advanced: [
          {
            name: {en: 'Unit', 'zh-CN': '单位'},
            description: {
              en: `Show output in specified unit. Conflict with 'human readable', '1k=1000'.`,
              'zh-CN': `以指定单位显示. 与选项'可读的', '1k=1000'冲突.`,
            },
            type: 'check',
            items: [
              {name: {en: 'bytes', 'zh-CN': '字节'}, cmd: ['-b', '--bytes']},
              {name: 'KB', cmd: ['--kilo']},
              {name: 'MB', cmd: ['--mega']},
              {name: 'GB', cmd: ['--giga']},
              {name: 'TB', cmd: ['--tera']},
              {name: 'PB', cmd: ['--peta']},
              {name: 'KiB', cmd: ['-k', '--kibi']},
              {name: 'MiB', cmd: ['-m', '--mebi']},
              {name: 'GiB', cmd: ['-g', '--gibi']},
              {name: 'TiB', cmd: ['--tebi']},
              {name: 'PiB', cmd: ['--pebi']},
            ],
          },
        ],
      }
    }
  ],
}

export default generatorInfo