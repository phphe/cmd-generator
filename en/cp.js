const args = {
  "": {
    "type": "string",
    "name": "The file or directory path.",
    "required": true,
    "repeatable": true,
  },
  "target": {
    "type": "string",
    "name": "The target path.",
    "required": true
  },
  "-r": {
    "type": "check",
    "name": "Copy directories and their contents recursively."
  },
  "-a": {
    "type": "check",
    "name": "Preserve all attributes when copying files and directories, including owner, group, and permissions."
  },
  "-b": {
    "type": "check",
    "name": "Create backups of existing files."
  },
  "-f": {
    "type": "check",
    "name": "Force copy, overwriting the target file if it already exists."
  },
  "-i": {
    "type": "check",
    "name": "Interactive copy, prompting the user to confirm before overwriting the target file."
  },
  "-l": {
    "type": "check",
    "name": "Copy symbolic link files themselves, rather than their contents."
  },
  "-n": {
    "type": "check",
    "name": "Do not copy if the target file already exists."
  },
  "-p": {
    "type": "check",
    "name": "Preserve the attributes of the source file, including owner, group, and time."
  },
  "-s": {
    "type": "check",
    "name": "Create symbolic link files instead of copying files."
  },
  "-u": {
    "type": "check",
    "name": "Only copy files that are newer or do not exist in the target file."
  },
  "-v": {
    "type": "check",
    "name": "Display copy progress information."
  },
  "-x": {
    "type": "check",
    "name": "Do not cross file system boundaries during copying, only copy within the same file system."
  },
  "--help": {
    "type": "check",
    "name": "Display command help information."
  },
  "--version": {
    "type": "check",
    "name": "Display command version information."
  }
};
module.exports = {
  name: 'cp',
  desc: 'The cp command is a command-line tool used to copy files and directories in Linux and Unix systems. It can copy a file or directory from one location to another, and can also rename, modify permissions, and so on for the copied file or directory.',
  usages: [
    {
      form: { ...args },
      filter: (cmd, values) => cmd + ' ' + values.target
    }
  ],
};
