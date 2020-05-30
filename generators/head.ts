import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'head',
  description: {
    en: `Print the first 10 lines of each FILE to standard output.
With more than one FILE, precede each with a header giving the file name.
With no FILE, or when FILE is -, read standard input.`,
    'zh-CN': `将每个FILE的前10行打印成标准输出。\n如果有一个以上的FILE，在每一个FILE前都要有一个文件名的标题.\n如果没有FILE，或者FILE为-时，读取标准输入.`,
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  usages: [
    {
      name: ut.defaultUsageName,
      form: {
        controls: [
          {
            name: {en: 'File', 'zh-CN': '文件'},
            type: 'string',
            multiple: true,
          },
          {
            "name": {
              "en": "first NUM bytes",
              'zh-CN': "显示前(后)N字节",
            },
            description: {
              en: `print the first NUM bytes of each file; with the leading '-', print all but the last NUM bytes of each file. NUM may have a multiplier suffix: b 512, kB 1000, K 1024, MB 1000*1000, M 1024*1024, GB 1000*1000*1000, G 1024*1024*1024, and so on for T, P, E, Z, Y.`,
            },
            type: 'string',
            "cmd": [
              "-c",
              "--bytes"
            ]
          },
          {
            "name": {
              "en": "first NUM lines",
              'zh-CN': "显示前(后)N行",
            },
            description: {
              en: `print the first NUM lines instead of the first 10; with the leading '-', print all but the last NUM lines of each file`
            },
            type: 'string',
            "cmd": [
              "-n",
              "--lines"
            ]
          },
          {
            ...common.others,
            items: [
              {
                "name": {
                  "en": "never print headers giving file names"
                },
                "cmd": [
                  "-q",
                  "--quiet"
                ]
              },
              {
                "name": {
                  "en": "always print headers giving file names"
                },
                "cmd": [
                  "-v",
                  "--verbose"
                ]
              },
              {
                "name": {
                  "en": "line delimiter is NUL, not newline"
                },
                "cmd": [
                  "-z",
                  "--zero-terminated"
                ]
              }
            ],
          }
        ],
      }
    }
  ],
}

export default generatorInfo