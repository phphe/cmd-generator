
const args = {
    "": {
        "type": "string",
        "name": "文件路径",
        "required": true,
        "repeatable": true,
    },
    ">": {
        "type": "string",
        "name": "目标文件路径",
        "required": true,
    },
    ">>": {
        "type": "string",
        "name": "目标文件路径",
        "required": true,
    },
    "-n": {
        "type": "check",
        "name": "输出行号"
    },
    "-A": {
        "type": "check",
        "name": "顺便输出空行"
    },
    "-b": {
        "type": "check",
        "name": "对非ASCII字符进行编码"
    },
    "-e": {
        "type": "check",
        "name": "将Tab键显示为^I"
    },
    "-E": {
        "type": "check",
        "name": "显示$，结尾行号不变"
    },
    "-s": {
        "type": "check",
        "name": "将连续空行压缩成一个空行"
    },
    "-t": {
        "type": "check",
        "name": "将Tab键显示为^I"
    },
    "-T": {
        "type": "check",
        "name": "将Tab键显示为指定数目的空格符"
    },
    "-u": {
        "type": "check",
        "name": "不进行缓存，直接输出"
    },
    "-v": {
        "type": "check",
        "name": "显示详细信息"
    }
};
module.exports = {
    name: 'cat',
    desc: 'cat 命令是 Unix 和类 Unix 操作系统下的一个标准命令，用于连接文件并打印到标准输出设备上。它通常用于输出文件内容、合并文件、创建新文件等操作。',
    usages: [
        {
            name: '显示文件内容',
            form: { ...args },
            remove: ['>', '>>'],
        },
        {
            name: '连接文件内容并写入另一文件',
            form: { ...args },
            remove: ['>>'],
            filter: (cmd, values) => cmd + ' > ' + values['>'],
        },
        {
            name: '连接文件内容并附加到另一文件末尾',
            form: { ...args },
            remove: ['>'],
            filter: (cmd, values) => cmd + ' >> ' + values['>>'],
        }
    ],
};