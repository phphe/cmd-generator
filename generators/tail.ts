import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {}

const controls: ut.controlsObject = {}

const generatorInfo:Generator = {
  name: 'tail',
  description: {
    en: `Print the last 10 lines of each FILE to standard output.\nWith more than one FILE, precede each with a header giving the file name.\nWith no FILE, or when FILE is -, read standard input.`,
    'zh-CN': `将每个FILE的最后10行打印成标准输出。\n如果有一个以上的FILE，在每一个FILE前都要有一个文件名的标题。\n如果没有FILE，或者FILE为-时，读取标准输入.`,
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
            name: {en: 'Last/Start NUM bytes'},
            "description": {
              "en": "output the last NUM bytes; or use -c +NUM to output starting with byte NUM of each file. NUM may have a multiplier suffix: b 512, kB 1000, K 1024, MB 1000*1000, M 1024*1024, GB 1000*1000*1000, G 1024*1024*1024, and so on for T, P, E, Z, Y."
            },
            type: 'string',
            "cmd": [
              "-c",
              "--bytes"
            ]
          },
          {
            name: {en: 'Follow'},
            description: {
              en: `{name|descriptor}. output appended data as the file grows; an absent option argument means 'descriptor'. With --follow (-f), tail defaults to following the file descriptor, which means that even if a tail'ed file is renamed, tail will continue to track its end.  This default behavior is not desirable when you really want to track the actual name of the file, not the file descriptor (e.g., log rotation).  Use --follow=name in that case.  That causes tail to track the named file in a way that accommodates renaming, removal and creation.`
            },
            type: 'string',
            "cmd": [
              "-f",
              "--follow"
            ]
          },
          {
            name: {en: 'Last/start NUM lines', 'zh-CN': '最后/开始N行'},
            "description": {
              "en": "output the last NUM lines, instead of the last 10; or use -n +NUM to output starting with line NUM"
            },
            type: 'string',
            "cmd": [
              "-n",
              "--lines"
            ]
          },
          {
            name: {en: 'Max unchanged stats'},
            "description": {
              "en": `--max-unchanged-stats=N. With --follow=name, reopen a FILE which has not changed size after N (default 5) iterations to see if it has been unlinked or renamed (this is the usual case of rotated log files); with inotify, this option is rarely useful.`
            },
            type: 'string',
            "cmd": ['--max-unchanged-stats']
          },
          {
            name: {en: 'pid'},
            "description": {
              "en": "with -f, terminate after process ID, PID dies"
            },
            type: 'string',
            "cmd": [
              "-p",
              "--pid"
            ]
          },
          {
            name: {en: 'Sleep interval'},
            "description": {
              "en": "--sleep-interval = N. with -f, sleep for approximately N seconds (default 1.0) between iterations; with inotify and --pid=P, check process P at least once every N seconds"
            },
            type: 'string',
            "cmd": [
              "-s",
              "--sleep-interval"
            ]
          },
          {
            ...common.others,
            items: [
              {
                "name": {
                  "en": "same as --follow=name --retry"
                },
                "cmd": [
                  "-F",
                ]
              },
              {
                name: {en: 'Silent'},
                "description": {
                  "en": "never output headers giving file names."
                },
                "cmd": [
                  "-q",
                  "--quiet",
                  "--silent",
                ]
              },
              {
                name: {en: 'Retry'},
                "description": {
                  "en": "keep trying to open a file if it is inaccessible"
                },
                "cmd": [
                  "-r",
                  "--retry"
                ]
              },
              {
                "name": {
                  "en": "Verbose"
                },
                "description": {
                  "en": "always output headers giving file names"
                },
                "cmd": [
                  "-v",
                  "--verbose"
                ]
              },
              {
                "name": {
                  "en": "Zero Terminated"
                },
                "description": {
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