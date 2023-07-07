const args = {
  "": {
    "type": "string",
    "name": "File or directory path or expression",
    "required": true,
  },
  "-a": {
    "type": "check",
    "name": "List all files and directories, including hidden files and directories."
  },
  "-l": {
    "type": "check",
    "name": "Display detailed information on files and directories in long format."
  },
  "-h": {
    "type": "check",
    "name": "Display file and directory size in a human-readable format."
  },
  "-r": {
    "type": "check",
    "name": "List files and directories in reverse order."
  },
  "-t": {
    "type": "check",
    "name": "Sort and display files and directories by modification time."
  },
  "-S": {
    "type": "check",
    "name": "Sort and display files and directories by size."
  },
  "-R": {
    "type": "check",
    "name": "Recursively display the contents of all subdirectories."
  },
  "-d": {
    "type": "check",
    "name": "Display the directory itself instead of its contents."
  },
  "-F": {
    "type": "check",
    "name": "Append a character to the end of the file name to indicate its type."
  },
  "-i": {
    "type": "check",
    "name": "Display the iNode number of files and directories."
  },
  "-s": {
    "type": "check",
    "name": "Display the size of files and directories in blocks."
  },
  "-u": {
    "type": "check",
    "name": "Sort and display files and directories by access time."
  },
  "-c": {
    "type": "check",
    "name": "Sort and display files and directories by change time."
  },
  "-m": {
    "type": "check",
    "name": "Separate the names of files and directories with commas."
  },
  "-1": {
    "type": "check",
    "name": "Only display one file or directory per line."
  },
  "--help": {
    "type": "check",
    "name": "Display help information for the command."
  }
};
module.exports = {
  name: 'ls',
  desc: 'ls is a commonly used command line instruction used to display a list of contents in a directory. It can also display detailed information about files and directories, such as file type, access permissions, owner, and more.',
  usages: [
    {
      form: { ...args },
    }
  ],
};
