const args = {
  "source": {
    "name": "Source file or directory path",
    "required": true
  },
  "target": {
    "name": "Target path",
    "required": true
  },
  "user": {
    "name": "Username",
    "required": true
  },
  "server": {
    "name": "Server address",
    "required": true
  },
  "-P": {
    "type": "string",
    "name": "Specifies the port number for the remote host"
  },
  "-i": {
    "type": "string",
    "name": "Specifies the path to the authentication file"
  },
  "-r": {
    "type": "check",
    "name": "Recursively copies directories and their contents"
  },
  "-p": {
    "type": "check",
    "name": "Preserves the modification time, access time, and access permissions of the source files"
  },
  "-q": {
    "type": "check",
    "name": "Enables quiet mode, reducing output information"
  },
  "-r": {
    "type": "check",
    "name": "Recursively copies directories and their contents"
  },
  "-v": {
    "type": "check",
    "name": "Verbose mode, displaying SCP debug information"
  },
  "-c": {
    "type": "check",
    "name": "Uses compression"
  },
  "-l": {
    "type": "string",
    "name": "Limits the bandwidth, in bytes per second"
  },
  "-F": {
    "type": "string",
    "name": "Specifies the path to the SSH configuration file"
  },
  "-o": {
    "type": "string",
    "name": "Specifies additional SSH configuration options"
  },
  "-4": {
    "type": "check",
    "name": "Forces the use of IPv4 addresses"
  },
  "-6": {
    "type": "check",
    "name": "Forces the use of IPv6 addresses"
  },
  "-S": {
    "type": "string",
    "name": "Specifies the socket used to control the connection"
  },
  "-B": {
    "type": "check",
    "name": "Uses batch mode (transfers multiple files)"
  }
};
module.exports = {
  name: 'scp',
  desc: 'The SCP command is used for secure file transfer between Linux and Unix systems. It uses the SSH protocol to encrypt and transfer the files. The following are all the parameters of the SCP command.',
  usages: [
    {
      name: "Copy local file or folder to remote",
      form: { ...args },
      filter: (cmd, values) => `${cmd} ${values.source} ${values.user}@${values.server}:${values.target}`
    },
    {
      name: "Copy remote file or folder to local",
      form: { ...args },
      filter: (cmd, values) => `${cmd} ${values.user}@${values.server}:${values.source} ${values.target}`
    },
  ],
};
