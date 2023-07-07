# CMD Generator V3 (MIT)

A tool generates commands you can paste into the terminal based on your selections. This repo storages generators' info.

根据您的选择生成可粘贴到终端的命令的工具。网站 [cmdgenerator.phphe.com](https://cmdgenerator.phphe.com/). 此项目存储了相关信息.

## Structure

- `en`: language
  - `cat.js`: generator info of 'cat'
  - `cat.md`: optional, some text about 'cat', such as some usage examples
  - `xx.js`
  - `xx.md`
- `zh`: another language

## Format

The format of `xx.js`. Let's take `cat` as an example.

```js
module.exports = {
  name: "cat",
  desc: "description of cat",
  usages: [
    {
      name: "Display file contents", // Can be omitted when there is only one usage.
      desc: "", // optional
      // form is an object, each child will be rendered ad a form item
      form: {
        // the key can be any string. There are 2 special cases:
        // example cmd: cat -n -v abc.txt
        // 1. ""(empty string): meaning cmd's value part, 'abc.txt' in above example.
        // 2. "-any": any string start with "-", meaning cmd's option part, '-n' and '-v' in above example.
        // the tool can join value part and option part, but ignore other keys. If there are other keys, you should add a method to handle them. See below for details.
        "": {
          type: "string", // string/check/select/checkboxes/radios. Can be omitted when it is string.
          name: "File path",
          desc: "", // optional. Display at the bottom of form item.
          required: true, // optional. default false.
          repeatable: true, // optional. default false.
        },
        ">": {
          type: "string",
          name: "Target file path",
          required: true,
        },
        ">>": {
          type: "string",
          name: "Target file path",
          required: true,
        },
        "-n": {
          type: "check",
          name: "Output line number",
        },
      },
      remove: [">", ">>"], // optional. exclude keys of current usage's form.
      filter: (cmd, values) => cmd + " > " + values[">"], // optional. A method. Cannot depend on external variables. This function's return is final output. Arg 'cmd' is the joined command, 'values' is an object with keys same with above form object, and each key's value is user's input.
      optionsPartFilter: (cmd, values) => `${cmd} `,
      // optional. A method. Cannot depend on external variables.
      // A command has 3 parts. Example: cat -n -v abc.txt
      // 3 parts are: ['cat', '-n -v', 'abc.txt'], they are name, options, value
      // This method only accpect options part, and return options part.
      // Arg 'cmd' is the joined command, 'values' is an object with keys same with above form object, and each key's value is user's input.
      noMergeOptions: false, // optional, default false. This tool will merge short options, like '-n -v' into '-nv'. Some cli does not support merged options, use this option to disable that.
    },
  ],
};

// More
// select form item
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
// use 'group' for conflicting options
// some options are conflicting. Such as '-j -z' in tar.
// For a grouped form item, when it is checked, other form items in same group will be unchecked.
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
```

## Website

[cmdgenerator.phphe.com](https://cmdgenerator.phphe.com/)

cmdgenerator.phphe.com

## License

MIT
