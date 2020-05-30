import { Generator, common } from "../utils";
import * as ut from "../utils";

// check items
const items = {
  // global
  noAsking: {
    name: {en: 'Overwrite output files without asking.', 'zh-CN': '覆盖输出文件而无需询问。'},
    cmd: ['-y'],
  },
  noOverwrite: {
    name: {en: 'Exit if a specified output file already exists.', 'zh-CN': '如果指定的输出文件已经存在则结束。'},
    cmd: ['-n'],
  },
  // input/output
  size: {
    name: {en: 'Size', 'zh-CN': '分辨率'},
    description: {en: 'Example: 1200x700', 'zh-CN': '例: 1200x700'},
    cmd: ['-s'],
  },
  noAudio: {
    name: {en: 'No audio', 'zh-CN': '去掉音频'},
    cmd: ['-an'],
  },
  noVideo: {
    name: {en: 'No video', 'zh-CN': '去掉视频'},
    cmd: ['-vn'],
  },
}

const controls: ut.controlsObject = {
  // input
  input: {
    name: {en: 'Input file', 'zh-CN': '输入文件'},
    type: 'string',
    cmd: ['-i'],
  },
  // input/output
  format: {
    name: {en: 'Force file format', 'zh-CN': '指明文件格式'},
    description: {
      en: 'Force input or output file format. The format is normally auto detected for input files and guessed from the file extension for output files, so this option is not needed in most cases.',
      'zh-CN': '强制输入或输出文件格式。 通常会自动检测输入文件的格式，并根据输出文件的文件扩展名猜测格式，因此在大多数情况下不需要此选项。'
    },
    type: 'string',
    cmd: ['-f'],
  },
  bitrateVideo: {
    name: {en: 'Video bitrate', 'zh-CN': '视频比特率'},
    description: {
      en: 'Lowering the bitrate can reduce the video size. Try 500k.',
      'zh-CN': '降低比特率可以降低视频大小, 尝试输入500k.',
    },
    type:'string',
    cmd: ['-b:v'],
  },
  bitrateAudio: {
    name: {en: 'Audio bitrate', 'zh-CN': '音频比特率'},
    description: {
      en: 'Lowering the bitrate can reduce the audio size. Try 128k.',
      'zh-CN': '降低比特率可以降低音频大小, 尝试输入128k.',
    },
    type:'string',
    cmd: ['-b:a'],
  },
  timeDuration: {
    name: {en: 'Time duration', 'zh-CN': '时间长度'},
    description: {
      en: 'Example: 10, 10s, 10m, 0.5s, 12:03:45. They correspond to 10 seconds, 10 seconds, 10 minutes, 0.5 seconds, 12 hours and 3 minutes and 45 seconds.',
      'zh-CN': '例: 10, 10s, 10m, 0.5s, 12:03:45. 分别对应10秒, 10秒, 10分钟, 0.5秒, 12小时3分钟45秒.',
    },
    type:'string',
    cmd: ['-t'],
  },
  timeStart: {
    name: {en: 'Time start', 'zh-CN': '起始时间'},
    type:'string',
    cmd: ['-ss'],
  },
  // output
  output: {
    name: {en: 'Ouput file', 'zh-CN': '输出文件'},
    type: 'string',
  },
  aspect: {
    name: {en: 'Aspect', 'zh-CN': '宽高比'},
    description: {
      en: 'Set the video display aspect ratio specified by aspect. 2 formats: 4:3, 1.333',
      'zh-CN': '视频宽高比. 两种格式: 4:3, 1.333',
    },
    type: 'string',
    cmd: ['-aspect'],
  },
}

const generatorInfo:Generator = {
  name: 'ffmpeg',
  description: {
    en: 'ffmpeg is a very fast video and audio converter.',
    'zh-CN': 'ffmpeg 是一个快速的音视频转码器.',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  usages: [
    {
      name: {en: 'Show media file info', 'zh-CN': '显示媒体文件信息'},
      form:{
        controls: [
          {...controls.input},
          {
            type: 'check', multiple: true,
            items: [
              {
                name: {en: 'Hide banner', 'zh-CN': '不显示FFmpeg版权和其它'},
                description: {en: 'Suppress printing banner. All FFmpeg tools will normally show a copyright notice, build options and library versions. This option can be used to suppress printing this information.'},
                cmd: ['-hide_banner'],
              },
            ],
          }
        ]
      }
    },
    {
      name: {en: 'Transcoding, convert format, cut', 'zh-CN': '转码, 格式转换, 裁剪'},
      description: {
        en: 'Transcoding between video, audio, image.',
        'zh-CN': '支持视频, 音频, 图片.',
      },
      form:{
        controls: [
          {...controls.input, cmdPriority: 1},
          {...controls.output, cmdPriority: 2},
          {name: {en: 'Output options', 'zh-CN': '输出选项'}, type: 'document'},
          {...controls.size, cmdPriority: 1.11},
          {...controls.aspect, cmdPriority: 1.11},
          {
            type: 'check',
            multiple: true,
            cmdPriority: 1.12,
            items: [
              items.noAudio,
              items.noVideo,
            ]
          },
          {name: {en: 'Cut video or audio', 'zh-CN': '裁剪视频或音频'}, type: 'document'},
          {...controls.timeDuration, cmdPriority: 1.11},
          {...controls.timeStart, cmdPriority: 1.11},
          {
            name: {en: 'Global options', 'zh-CN': '全局选项'},
            type: 'check',
            multiple: true,
            cmdPriority: 0.1,
            items: [
              items.noAsking,
              items.noOverwrite
            ]
          },
        ],
        advanced: [
          {...controls.format, name: {en: 'Input file format', 'zh-CN': '输入文件格式'}, cmdPriority: 0.5},
          {...controls.bitrateVideo, cmdPriority: 1.11},
          {...controls.bitrateAudio, cmdPriority: 1.11},
          {
            type: 'check',
            multiple: true,
            cmdPriority: 1.12,
            items: [
            ]
          },
          {...controls.format, name: {en: 'Output file format', 'zh-CN': '输出文件格式'}, cmdPriority: 1.5},
        ],
      }
    }
  ],
}

export default generatorInfo