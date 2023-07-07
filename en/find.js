const args = {
  "": {
    "name": "Search path",
    "required": true,
  },
  "-H": {
    "type": "check",
    "name": "Includes files that are symbolic links"
  },
  "-L": {
    "type": "check",
    "name": "Follows symbolic links"
  },
  "-P": {
    "type": "check",
    "name": "Does not follow symbolic links"
  },
  "-D": {
    "type": "check",
    "name": "Performs a depth-first search on the given file"
  },
  "-O": {
    "type": "check",
    "name": "Sorts the files by name in dictionary order"
  },
  "-name": {
    "type": "string",
    "name": "Searches for files based on their name"
  },
  "-iname": {
    "type": "string",
    "name": "Searches for files based on their name, ignoring case"
  },
  "-type": {
    "type": "string",
    "name": "Searches for files based on their type"
  },
  "-size": {
    "type": "string",
    "name": "Searches for files based on their size"
  },
  "-mtime": {
    "type": "string",
    "name": "Searches for files based on their modification time"
  },
  "-mmin": {
    "type": "string",
    "name": "Searches for files based on their modification time (in minutes)"
  },
  "-newer": {
    "type": "string",
    "name": "Searches for files that have been modified more recently"
  },
  "-exec": {
    "type": "string",
    "name": "Executes the specified command"
  },
  "-ok": {
    "type": "string",
    "name": "Similar to -exec, but prompts the user before executing the command"
  },
  "-print": {
    "type": "check",
    "name": "Outputs the search results to standard output"
  },
  "-fprint": {
    "type": "string",
    "name": "Outputs the search results to the specified file"
  }
};
module.exports = {
  name: 'find',
  desc: 'The find command is used to search for files or directories in a specified directory. It provides a variety of options for searching based on different criteria.',
  noMergeOptions: true,
  usages: [
    {
      form: { ...args },
    }
  ],
};
