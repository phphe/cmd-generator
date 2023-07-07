const args1 = {
  '-i': {
    name: 'File Path',
    required: true
  }
};
const args2 = {
  "": {
    "name": "Output File Path",
  },
  "-f": {
    "type": "string",
    "name": "Input File Format",
    desc: 'e.g. mp4'
  },
  "-vcodec": {
    "name": "Video Codec",
    "type": "string",
  },
  "-acodec": {
    "name": "Audio Codec",
    "type": "string",

  },
  "-b:v": {
    "name": "Video Bitrate",
    "type": "string",
    desc: 'e.g. 128k, 256k'
  },
  "-b:a": {
    "name": "Audio Bitrate",
    "type": "string",
    desc: 'e.g. 128k, 256k'
  },
  "-s": {
    "name": "Video Resolution",
    "type": "string",
    desc: 'e.g. 320x240, 640x480, 800x600, 1600x1024'
  },
  "-r": {
    "name": "Frame Rate",
    "type": "string",

  },
  "-t": {
    "name": "Duration",
    "type": "string",
    desc: 'e.g. 10, 10s, 10m, 12:05:30'
  },
  "-ss": {
    "name": "Start Time",
    "type": "string",
    desc: "Find the given time position in seconds. Also supports syntax 'hh:mm:ss[.xxx]'"
  },
  "-an": {
    "name": "Disable Audio Stream",
    "type": "check",

  },
  "-vn": {
    "name": "Disable Video Stream",
    "type": "check",

  },
  "-vframes": {
    "name": "Frame Count",
    "type": "string",

  },
  "-y": {
    "name": "Overwrite Output File",
    "type": "check",

  },
  "-h": {
    "name": "Show Help Information",
    "type": "check",

  },
  "-aspect": {
    "name": "Output Video Aspect Ratio",
    desc: 'e.g. 4:3, 16:9 or 1.3333, 1.7777'
  }
}

module.exports = {
  name: 'ffmpeg',
  desc: 'FFmpeg is an open-source and free cross-platform audio-video processing tool that can perform various functions such as audio-video capture, transcoding, processing, and playback. FFmpeg supports multiple audio-video formats, including streaming media protocols, and can be widely used in video processing, live streaming, and other fields.',
  noMergeOptions: true,
  usages: [
    {
      name: 'View Media File Information',
      desc: '',
      form: { ...args1 },
    },
    {
      name: 'Transcoding, Type Conversion, Cropping',
      desc: 'Transcode video/audio, convert video/audio format, crop video/audio. ffmpeg will automatically transcode according to file extension',
      form: { ...args1, ...args2 },
    },
  ],
};
