const args = {
  "": {
    "type": "string",
    "name": "File path",
    "required": true,
    "repeatable": true,
  },
  ">": {
    "type": "string",
    "name": "Target file path",
    "required": true,
  },
  ">>": {
    "type": "string",
    "name": "Target file path",
    "required": true,
  },
  "-n": {
    "type": "check",
    "name": "Output line number"
  },
  "-A": {
    "type": "check",
    "name": "Output blank lines"
  },
  "-b": {
    "type": "check",
    "name": "Encode non-ASCII characters"
  },
  "-e": {
    "type": "check",
    "name": "Display Tab keys as ^I"
  },
  "-E": {
    "type": "check",
    "name": "Display $, line number does not change"
  },
  "-s": {
    "type": "check",
    "name": "Compress consecutive blank lines into one blank line"
  },
  "-t": {
    "type": "check",
    "name": "Display Tab keys as ^I"
  },
  "-T": {
    "type": "check",
    "name": "Display Tab keys as a specified number of spaces"
  },
  "-u": {
    "type": "check",
    "name": "Do not cache, output directly"
  },
  "-v": {
    "type": "check",
    "name": "Display detailed information"
  }
};
module.exports = {
  name: 'cat',
  desc: 'The cat command is a standard command in Unix and Unix-like operating systems that is used to connect files and print them to the standard output device. It is commonly used for operations such as outputting file contents, merging files, and creating new files.',
  usages: [
    {
      name: 'Display file contents',
      form: { ...args },
      remove: ['>', '>>'],
    },
    {
      name: 'Concat file contents and write to another file',
      form: { ...args },
      remove: ['>>'],
      filter: (cmd, values) => cmd + ' > ' + values['>'],
    },
    {
      name: 'Concat file contents and append to the end of another file',
      form: { ...args },
      remove: ['>'],
      filter: (cmd, values) => cmd + ' >> ' + values['>>'],
    }
  ],
};
