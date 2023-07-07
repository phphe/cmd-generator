const args = {
  "": {
    "type": "string",
    "name": "File or directory path",
    "required": true,
    "repeatable": true,
  },
  "target": {
    "type": "string",
    "name": "Target path",
    "required": true
  },
  "-b": {
    "type": "check",
    "name": "Backup files, if the target file already exists, backup first"
  },
  "-f": {
    "type": "check",
    "name": "Force to move files without prompting any information"
  },
  "-i": {
    "type": "check",
    "name": "Ask the user to confirm before moving an existing target file"
  },
  "-n": {
    "type": "check",
    "name": "Do not overwrite an existing target file"
  },
  "-u": {
    "type": "check",
    "name": "Only move the file if the source file is newer than the target file or if the target file does not exist"
  },
  "-v": {
    "type": "check",
    "name": "Display detailed information about moving the file"
  },
  "--help": {
    "type": "check",
    "name": "Display help information"
  },
  "--version": {
    "type": "check",
    "name": "Display version information"
  }
};
module.exports = {
  name: 'mv',
  desc: 'The mv command is an important command in Linux/Unix operating systems. Its main function is to move a file or directory from one location to another. In addition, it can also be used to rename a file or directory.',
  usages: [
    {
      form: { ...args },
      filter: (cmd, values) => cmd + ' ' + values.target
    }
  ],
};
