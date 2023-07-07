const args = {
  "": {
    "type": "string",
    "name": "file or directory path",
    "required": true,
    "repeatable": true,
  },
  "role": {
    "type": "select",
    "name": "role",
    "required": true,
    "options": [
      { "value": "u", "name": "owner" },
      { "value": "g", "name": "group" },
      { "value": "o", "name": "other" },
      { "value": "a", "name": "all" },
    ],
  },
  "action": {
    "type": "select",
    "name": "operation",
    "required": true,
    "options": [
      { "value": "+", "name": "add permission" },
      { "value": "-", "name": "remove permission" },
      { "value": "=", "name": "set permission" },
    ],
  },
  "permission": {
    "type": "radios",
    "name": "permission",
    "required": true,
    "options": [
      { "value": "r", "name": "read" },
      { "value": "w", "name": "write" },
      { "value": "x", "name": "execute" },
    ],
  },
  "-R": { "type": "check", "name": "change the permission for directories and their contents recursively." },
  "-f": { "type": "check", "name": "force mode." },
  "-v": { "type": "check", "name": "verbose mode." },
  "-c": { "type": "check", "name": "like verbose but report only when a change is made." },
  "-H": { "type": "check", "name": "if the file is a symbolic link, change the mode of the file it points to rather than the link itself." },
  "-L": { "type": "check", "name": "change the permission of the symbolic link itself instead of the file that it points to." },
  "-P": { "type": "check", "name": "do not follow symbolic links." }
};
module.exports = {
  name: 'chmod',
  desc: 'chmod is used to modify the access permissions of files and directories.',
  usages: [
    {
      form: { ...args },
      optionsPartFilter: (cmd, values) => `${cmd} ${values.role}${values.action}${values.permission}`
    }
  ],
};
