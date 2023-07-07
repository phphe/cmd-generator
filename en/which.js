const args = {
  "": {
    "name": "Name/Command name",
    "required": true
  },
  "-a": {
    "type": "check",
    "name": "Display all paths that meet the condition"
  },
  "-p": {
    "type": "check",
    "name": "Display the paths of all executable files that meet the condition, separated by colons"
  },
  "-s": {
    "type": "check",
    "name": "Display only the paths of the executable files that meet the condition"
  },
  "-u": {
    "type": "check",
    "name": "Display the paths of the executable files associated with the specified user"
  },
  "-V": {
    "type": "check",
    "name": "Display version information and exit"
  },
  "--help": {
    "type": "check",
    "name": "Display help information and exit"
  }
};
module.exports = {
  name: 'which',
  desc: 'The which command helps users find the path of an executable file. It searches for the specified command or filename in the paths specified by the PATH environment variable and returns the first complete path found.',
  usages: [
    {
      form: { ...args },
    }
  ],
};
