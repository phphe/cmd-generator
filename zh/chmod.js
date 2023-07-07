
const args = {
  "": {
    "type": "string",
    "name": "文件或目录路径",
    "required": true,
    "repeatable": true,
  },
  "role": {
    "type": "select",
    "name": "角色",
    "required": true,
    "options": [
      { "value": "u", "name": "拥有者" },
      { "value": "g", "name": "同组用户" },
      { "value": "o", "name": "其他用户" },
      { "value": "a", "name": "所有用户" },
    ],
  },
  "action": {
    "type": "select",
    "name": "操作",
    "required": true,
    "options": [
      { "value": "+", "name": "增加权限" },
      { "value": "-", "name": "移除权限" },
      { "value": "=", "name": "只允许" },
    ],
  },
  "permission": {
    "type": "radios",
    "name": "权限",
    "required": true,
    "options": [
      { "value": "r", "name": "读取" },
      { "value": "w", "name": "写入" },
      { "value": "x", "name": "执行" },
    ],
  },
  "-R": { "type": "check", "name": "递归地修改目录及子目录中各文件的权限。" },
  "-f": { "type": "check", "name": "强制执行，不提示。" },
  "-v": { "type": "check", "name": "显示处理的文件名。" },
  "-c": { "type": "check", "name": "仅显示改变的文件的调试信息" },
  "-H": { "type": "check", "name": "修复符号链接指向的文件的权限而非链接自身的权限。" },
  "-L": { "type": "check", "name": "直接修改符号链接自身的权限而非指向的文件的权限。" },
  "-P": { "type": "check", "name": "不跟随符号链接修改文件权限。" }
};
module.exports = {
  name: 'chmod',
  desc: 'chmod 命令用于修改文件或目录的访问权限。',
  usages: [
    {
      form: { ...args },
      optionsPartFilter: (cmd, values) => `${cmd} ${values.role}${values.action}${values.permission}`
    }
  ],
};