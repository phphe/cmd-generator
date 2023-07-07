const args = {
  "": {
    "type": "string",
    "name": "Search expression",
  },
  "-A": {
    "type": "check",
    "name": "Search only for executable files, ignoring other types of files"
  },
  "-c": {
    "type": "check",
    "name": "Print only the count of matching lines"
  },
  "-d": {
    "type": "string",
    "name": "Specify the location of the database file"
  },
  "-e": {
    "type": "string",
    "name": "Specify the file name to search for (supports regex)"
  },
  "-i": {
    "type": "check",
    "name": "Ignore case"
  },
  "-l": {
    "type": "check",
    "name": "Print only file names, not line numbers"
  },
  "-n": {
    "type": "string",
    "name": "Limit the number of matching results"
  },
  "-P": {
    "type": "check",
    "name": "Do not follow symbolic links"
  },
  "-r": {
    "type": "string",
    "name": "Use regex to match files and directories"
  },
  "-s": {
    "type": "check",
    "name": "Quiet mode, do not output error messages"
  },
  "-S": {
    "type": "check",
    "name": "Do not search subdirectories"
  },
  "-w": {
    "type": "check",
    "name": "Search only for fully matching file names or words"
  },
  "-x": {
    "type": "check",
    "name": "Search only for fully matching file names"
  }
};
module.exports = {
  name: 'locate',
  desc: 'The locate command is a command-line tool in the Linux operating system used to find files in the system. The command searches for file names in the specified directories and returns the file path if found.',
  usages: [
    {
      form: { ...args },
    }
  ],
};
