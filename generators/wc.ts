import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'wc',
  description: {
    en: 'Print newline, word, and byte counts for each FILE, and a total line if more than one FILE is specified.  A word is a non-zero-length sequence of characters delimited by white space.',
    'zh-CN': '打印每个文件的换行符，单词和字节数，如果指定了多个文件，则打印总行. 单词是由空格分隔的非零长度字符序列.',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  related: [],
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
            ...common.others,
            type: 'check',
            items: [
              {
                "name": {
                  "en": "Bytes"
                },
                "description": {
                  "en": "print the byte counts"
                },
                "cmd": [
                  "-c",
                  "--bytes"
                ]
              },
              {
                "name": {
                  "en": "Chars"
                },
                "description": {
                  "en": "print the character counts"
                },
                "cmd": [
                  "-m",
                  "--chars"
                ]
              },
              {
                "name": {
                  "en": "Lines"
                },
                "description": {
                  "en": "print the newline counts"
                },
                "cmd": [
                  "-l",
                  "--lines"
                ]
              },
              {
                "name": {
                  "en": "Max Line Length"
                },
                "description": {
                  "en": "print the maximum display width"
                },
                "cmd": [
                  "-L",
                  "--max-line-length"
                ]
              },
              {
                "name": {
                  "en": "Words"
                },
                "description": {
                  "en": "print the word counts"
                },
                "cmd": [
                  "-w",
                  "--words"
                ]
              }
            ],
          }
        ]
      }
    }
  ],
}

export default generatorInfo