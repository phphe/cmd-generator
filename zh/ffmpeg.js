
const args1 = {
  '-i': {
    name: '文件路径',
    required: true
  }
};
const args2 = {
  "": {
    "name": "输出文件路径"
  },
  "-f": {
    "type": "string",
    "name": "指定输入文件格式",
    desc: '例如：mp4'
  },
  "-vcodec": {
    "type": "string",
    "name": "视频编码器"
  },
  "-acodec": {
    "type": "string",
    "name": "音频编码器"
  },
  "-b:v": {
    "type": "string",
    "name": "视频比特率",
    desc: '降低比特率可以降低大小。 例如：128k'
  },
  "-b:a": {
    "type": "string",
    "name": "音频比特率",
    desc: '降低比特率可以降低大小。 例如：128k'
  },
  "-s": {
    "type": "string",
    "name": "视频分辨率",
    desc: '例如：320x240, 640x480, 800x600, 1600x1024'
  },
  "-r": {
    "type": "string",
    "name": "帧率"
  },
  "-t": {
    "type": "string",
    "name": "持续时间",
    desc: '例如：10, 10s, 10m, 12:05:30'
  },
  "-ss": {
    "type": "string",
    "name": "起始时间",
    desc: '以秒为单位寻找给定的时间位置。 还支持“hh:mm:ss[.xxx]”语法'
  },
  "-an": {
    "type": "check",
    "name": "禁用音频流"
  },
  "-vn": {
    "type": "check",
    "name": "禁用视频流"
  },
  "-vframes": {
    "type": "string",
    "name": "帧数"
  },
  "-y": {
    "type": "check",
    "name": "覆盖输出文件"
  },
  "-h": {
    "type": "check",
    "name": "显示帮助信息"
  },
  "-aspect": {
    name: "输出视频宽高比",
    desc: '例: 4:3, 16:9 or 1.3333, 1.7777'
  }
}

module.exports = {
  name: 'ffmpeg',
  desc: 'FFmpeg是一款开源免费的跨平台音视频处理工具，它可以实现音视频的采集、转码、处理、播放等多种功能。FFmpeg支持多种音视频格式，包括流媒体协议，可以广泛应用于视频处理、直播等领域。',
  noMergeOptions: true,
  usages: [
    {
      name: '查看媒体文件信息',
      form: { ...args1 },
    },
    {
      name: '转码, 类型转换, 裁剪',
      desc: '视频/音频转码，转换视频/音频格式，裁剪视频/音频。ffmpeg会根据文件扩展名自动进行转码',
      form: { ...args1, ...args2 },
    },
  ],
};