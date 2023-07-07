const args = {
  "": {
    "type": "string",
    "name": "File or directory path",
    "required": true
  },
  "path": {
    "type": "string",
    "name": "Link path",
    "required": true
  },
  "-s": {
    "type": "check",
    "name": "Create a symbolic link instead of a hard link"
  },
  "-f": {
    "type": "check",
    "name": "Force the operation without prompting the user for confirmation"
  },
  "-i": {
    "type": "check",
    "name": "Prompt the user for confirmation when overwriting an existing file"
  },
  "-n": {
    "type": "check",
    "name": "Treat symbolic links as regular files or directories without dereferencing them"
  },
  "-r": {
    "type": "check",
    "name": "Create relative symbolic links"
  },
  "-v": {
    "type": "check",
    "name": "Verbose output of the operation"
  },
  "-t": {
    "type": "string",
    "name": "Specify the target directory"
  },
  "-T": {
    "type": "check",
    "name": "Treat the symbolic link to be created as pointing to the directory itself, not to a file within the directory"
  },
  "-h": {
    "type": "check",
    "name": "Display command help information"
  },
  "-V": {
    "type": "check",
    "name": "Display command version information"
  }
};
module.exports = {
  name: 'ln',
  desc: 'The ln command is used to create hard links and symbolic links. Hard links point to another copy of the same file, while symbolic links point to another file or directory.',
  usages: [
    {
      form: { ...args },
      filter: (cmd, values) => cmd + ' ' + values.path
    }
  ],
};
