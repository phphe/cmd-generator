const args = {
  "": {
    "name": "Search expression",
    "required": true,
  },
  "path": {
    "name": "File or directory",
    "required": true,
  },
  "--exclude": {
    "name": "Exclude path",
    "repeatable": true,
  },
  "-a": {
    "type": "check",
    "name": "Treat binary files as text files when searching."
  },
  "-b": {
    "type": "check",
    "name": "Prefix each line of output with the byte offset within the input file."
  },
  "-c": {
    "type": "check",
    "name": "Only output the count of matching lines."
  },
  "-E": {
    "type": "check",
    "name": "Use extended regular expressions for matching."
  },
  "-F": {
    "type": "check",
    "name": "Treat the search string as a fixed string, not a regular expression."
  },
  "-G": {
    "type": "check",
    "name": "Use basic regular expressions for matching."
  },
  "-h": {
    "type": "check",
    "name": "Suppress the file name prefix on output."
  },
  "-i": {
    "type": "check",
    "name": "Ignore case distinctions."
  },
  "-l": {
    "type": "check",
    "name": "Only output the names of files that contain at least one match."
  },
  "-m": {
    "type": "string",
    "name": "Stop reading the file after NUM matching lines."
  },
  "-n": {
    "type": "check",
    "name": "Prefix each line of output with the 1-based line number within its input file."
  },
  "-q": {
    "type": "check",
    "name": "Quiet mode, does not output any information."
  },
  "-s": {
    "type": "check",
    "name": "Silent mode, do not display error messages."
  },
  "-v": {
    "type": "check",
    "name": "Invert the sense of matching, to select non-matching lines."
  },
  "-w": {
    "type": "check",
    "name": "Match only whole words."
  },
  "-x": {
    "type": "check",
    "name": "Match only whole lines."
  }
};
module.exports = {
  name: 'grep',
  desc: 'grep is a common command-line tool used for searching for matching text content in files and outputting the results.',
  usages: [
    {
      form: { ...args },
      filter: (cmd, values) => cmd + ' ' + values.path
    }
  ],
};
