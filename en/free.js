const args = {
  "-b": {
    "type": "check",
    "name": "Display memory usage in bytes",
    "group": "unit",
  },
  "-k": {
    "type": "check",
    "name": "Display memory usage in kilobytes",
    "group": "unit",
  },
  "-m": {
    "type": "check",
    "name": "Display memory usage in megabytes",
    "group": "unit",
  },
  "-g": {
    "type": "check",
    "name": "Display memory usage in gigabytes",
    "group": "unit",
  },
  "-t": {
    "type": "check",
    "name": "Display memory usage in bytes and include a total line in the output",
    "group": "unit",
  },
  "-s": {
    "type": "string",
    "name": "Refresh every N seconds."
  },
  "-V": {
    "type": "check",
    "name": "Display version information and exit."
  },
  "-h": {
    "type": "check",
    "name": "Display help information and exit."
  }
};
module.exports = {
  name: 'free',
  desc: 'The free command is used to display the amount of free and used memory in the system.',
  usages: [
    {
      form: { ...args },
    }
  ],
};
