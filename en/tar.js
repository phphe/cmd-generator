const args = {
  "": {
    "name": "File or directory path",
    "required": true,
    "repeatable": true
  },
  "-f": {
    "type": "string",
    "name": "Specify the name or path of the archive file"
  },
  "-v": {
    "type": "check",
    "name": "Display detailed operation process"
  },
  "-z": {
    "type": "check",
    "name": "Compress or decompress the archive file through gzip",
    "group": "compress format"
  },
  "-j": {
    "type": "check",
    "name": "Compress or decompress the archive file through bzip2",
    "group": "compress format"
  },
  "-J": {
    "type": "check",
    "name": "Compress or decompress the archive file through xz",
    "group": "compress format"
  },
  "-P": {
    "type": "check",
    "name": "Preserve absolute path"
  },
  "-C": {
    "type": "string",
    "name": "Switch to the specified directory and perform the operation"
  },
  "--exclude": {
    "type": "string",
    "name": "Exclude the specified file or directory"
  }
}
  ;
module.exports = {
  name: 'tar',
  desc: 'The tar command is a command-line tool used to pack and compress files in Linux and Unix operating systems. Its name is an abbreviation of "tape archive" because it was originally used to create backups on tape.',
  usages: [
    {
      name: 'Create a new archive file',
      form: { ...args },
      optionsPartFilter: (cmd, values) => '-c ' + cmd,
    },
    {
      name: 'Add files to the archive file',
      form: { ...args },
      optionsPartFilter: (cmd, values) => '-r ' + cmd,
    },
    {
      name: 'Only add newer files to the archive file',
      form: { ...args },
      optionsPartFilter: (cmd, values) => '-u ' + cmd,
    },
    {
      name: 'Display the contents of the archive file',
      form: { ...args },
      optionsPartFilter: (cmd, values) => '-t ' + cmd,
      remove: [''],
    },
    {
      name: 'Extract files and directories from the archive file',
      form: (() => {
        let r = { ...args }
        r[''].desc = 'Target directory path'
        return r
      })(),
      optionsPartFilter: (cmd, values) => '-x ' + cmd,
    },
    {
      name: 'Compare differences between archive file and file system',
      form: (() => {
        let r = { ...args }
        r[''].desc = 'Directory path'
        return r
      })(),
      optionsPartFilter: (cmd, values) => '-d ' + cmd,
    },
  ],
};
