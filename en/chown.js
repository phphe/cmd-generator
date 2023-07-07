const args = {
  "value": {
    "type": "string",
    "name": "File or directory path",
    "required": true
  },
  "owner": {
    "type": "string",
    "name": "Owner",
    "required": true,
  },
  "group": {
    "type": "string",
    "name": "Group",
    "required": true,
  },
  "-c": {
    "type": "check",
    "name": "Use verbose mode"
  },
  "-f": {
    "type": "check",
    "name": "Force change ownership of files and directories"
  },
  "-h": {
    "type": "check",
    "name": "Fix target of symlink"
  },
  "-R": {
    "type": "check",
    "name": "Recursively change ownership of files and directories"
  },
  "--help": {
    "type": "check",
    "name": "Display help information"
  }
};
module.exports = {
  name: 'chown',
  desc: 'The chown command is used to change the owner of a file or directory.',
  usages: [
    {
      form: {
        ...args
      },
      filter: (cmd, vlaues) => cmd + ' ' + vlaues.owner + ':' + vlaues.group + ' ' + vlaues.value
    }
  ],
};
