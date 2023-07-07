const args = {
  "value": {
    "type": "string",
    "name": "File path",
    "required": true,
  },
  "num": {
    "name": "Number of lines to display",
  },
  "start": {
    "name": "Starting line to display from",
  },
  "-d": {
    "type": "check",
    "name": "Display help information"
  },
  "-e": {
    "type": "check",
    "name": "Enable escape characters"
  },
  "-f": {
    "type": "check",
    "name": "Ignore form feed characters"
  },
  "-g": {
    "type": "check",
    "name": "Change the stop character from Ctrl-G to Ctrl-Q"
  },
  "-l": {
    "type": "string",
    "name": "Set the page length (number of lines)"
  },
  "-p": {
    "type": "check",
    "name": "Disable clear screen operation"
  },
  "-s": {
    "type": "check",
    "name": "Compress multiple blank lines to a single blank line"
  },
  "-u": {
    "type": "check",
    "name": "Disable underlining for scrolling"
  }
};
module.exports = {
  name: 'more',
  desc: 'The more command line is a command line tool based on Unix and Unix-like operating systems that is used to view the contents of a text file. The more command line allows users to page through the contents of a text file within a terminal window so that users can navigate through the file page by page or quickly browse the entire file according to their needs.',
  usages: [
    {
      form: { ...args },
      filter: (cmd, values) => cmd + (values.num ? ' -' + values.num : '') + (values.start ? ' +' + values.start : '') + ' ' + values.value
    }
  ],
};
