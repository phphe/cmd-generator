const args = {
  "": {
    "type": "string",
    "name": "The path of the file or directory",
  },
  "-h": {
    "type": "check",
    "name": "Prints the file size in human-readable format.",
  },
  "-B": {
    "type": "select",
    "name": "Displays the file size in the specified block size",
    "options": [
      { "value": "KB", "name": "KB" },
      { "value": "MB", "name": "MB" },
      { "value": "GB", "name": "GB" },
      { "value": "TB", "name": "TB" },
      { "value": "PB", "name": "PB" },
      { "value": "EB", "name": "EB" },
      { "value": "ZB", "name": "ZB" },
      { "value": "YB", "name": "YB" },
      { "value": "K", "name": "K" },
      { "value": "M", "name": "M" },
      { "value": "G", "name": "G" },
      { "value": "T", "name": "T" },
      { "value": "P", "name": "P" },
      { "value": "E", "name": "E" },
      { "value": "Z", "name": "Z" },
      { "value": "Y", "name": "Y" }
    ],
  },
  "-a": {
    "type": "check",
    "name": "Prints all files and directories, including hidden files.",
  },
  "-b": {
    "type": "check",
    "name": "Displays the file size in bytes.",
  },
  "-c": {
    "type": "check",
    "name": "Displays the total size of the directory.",
  },
  "-d": {
    "type": "string",
    "name": "Sets the depth of the directory to be displayed.",
  },
  "-k": {
    "type": "check",
    "name": "Displays the file size in kilobytes.",
  },
  "-L": {
    "type": "check",
    "name": "Follows symbolic links.",
  },
  "-s": {
    "type": "check",
    "name": "Displays only the total size of each directory.",
  }
};
module.exports = {
  name: 'du',
  desc: 'The "du" command is a commonly used command in Linux/Unix systems that is used to view the disk space occupied by a directory or file.',
  usages: [
    {
      form: { ...args },
    }
  ],
};
