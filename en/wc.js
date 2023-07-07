const args = {
  "": {
    "name": "File path",
    "required": true,
    "repeatable": true,
  },
  "-c": {
    "type": "check",
    "name": "Print only the byte count"
  },
  "-l": {
    "type": "check",
    "name": "Print only the newline count"
  },
  "-w": {
    "type": "check",
    "name": "Print only the word count"
  },
  "-L": {
    "type": "check",
    "name": "Print only the length of the longest line"
  },
  "-m": {
    "type": "check",
    "name": "Print only the character count"
  },
  "-L": {
    "type": "check",
    "name": "Print only the length of the longest line"
  },
  "--help": {
    "type": "check",
    "name": "Display help information and exit"
  },
  "--version": {
    "type": "check",
    "name": "Display version information and exit"
  }
};
module.exports = {
  name: 'wc',
  desc: 'The wc command is a command-line tool used to compute the byte count, word count, and line count of a given file.',
  usages: [
    {
      form: { ...args },
    }
  ],
};
