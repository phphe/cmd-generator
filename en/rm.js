const args = {
  "": {
    "type": "string",
    "name": "File or directory path",
  },
  "-f": {
    "type": "check",
    "name": "Force delete files or directories without prompting the user to confirm"
  },
  "-i": {
    "type": "check",
    "name": "Interactive delete file or directory, user need to confirm one by one"
  },
  "-r": {
    "type": "check",
    "name": "Recursively delete directory and its contents"
  },
  "-v": {
    "type": "check",
    "name": "Display the deleted file or directory"
  }
};
module.exports = {
  name: 'rm',
  desc: 'The rm command is used to delete files or directories',
  usages: [
    {
      form: { ...args },
    }
  ],
};
