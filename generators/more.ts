import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'more',
  description: {
    en: 'To view (but not modify) the contents of a text file one screen at a time.',
    'zh-CN': '分屏显示输出信息，或查看指定文件的内容.',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  usages: [
    {
      name: ut.defaultUsageName,
      form: {
        controls: [
          {...common.file, multiple: true, cmdPriority: 2},
          {
            name: {en: 'The number of lines per screenful', 'zh-CN': '每屏显示行数'},
            type: 'string',
            getCmd: info => `-`+info.control.value,
            cmdPriority: 1.1
          },
          {
            name: {en: 'Display file beginning from line number', 'zh-CN': '从第几行开始显示'},
            type: 'string',
            getCmd: info => `+`+info.control.value,
            cmdPriority: 1.2
          },
          {
            name: {en: 'Display file beginning from search string match', 'zh-CN': '搜索字符串并从匹配处开始显示'},
            type: 'string',
            getCmd: info => `+/`+info.control.value,
            cmdPriority: 1.3
          },
          {
            ...common.others,
            items: [
              {
                "name": {
                  "en": "display help instead of ringing bell"
                },
                "cmd": [
                  "-d"
                ]
              },
              {
                "name": {
                  "en": "count logical rather than screen lines"
                },
                "cmd": [
                  "-f"
                ]
              },
              {
                "name": {
                  "en": "suppress pause after form feed"
                },
                "cmd": [
                  "-l"
                ]
              },
              {
                "name": {
                  "en": "do not scroll, display text and clean line ends"
                },
                "cmd": [
                  "-c"
                ]
              },
              {
                "name": {
                  "en": "do not scroll, clean screen and display text"
                },
                "cmd": [
                  "-p"
                ]
              },
              {
                "name": {
                  "en": "squeeze multiple blank lines into one",
                  'zh-CN': "合并空格",
                },
                "cmd": [
                  "-s"
                ]
              },
              {
                "name": {
                  "en": "suppress underlining",
                  'zh-CN': "不显示下划线"
                },
                "cmd": [
                  "-u"
                ]
              }
            ],
          },
        ]
      }
    }
  ],
}

export default generatorInfo