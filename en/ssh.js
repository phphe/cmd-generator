const args = {
  "user": {
    "name": "Username",
    "required": true
  },
  "server": {
    "name": "Server address",
    "required": true
  },
  "-p": {
    "type": "string",
    "name": "Port number"
  },
  "-i": {
    "type": "string",
    "name": "Path to identity file"
  },
  "-t": {
    "type": "check",
    "name": "Force pseudo-tty allocation"
  },
  "-v": {
    "type": "check",
    "name": "Verbose mode"
  },
  "-1": {
    "type": "check",
    "name": "Force protocol version 1"
  },
  "-2": {
    "type": "check",
    "name": "Force protocol version 2"
  },
  "-4": {
    "type": "check",
    "name": "Force IPv4 addresses only"
  },
  "-6": {
    "type": "check",
    "name": "Force IPv6 addresses only"
  },
  "-A": {
    "type": "check",
    "name": "Enable authentication agent forwarding"
  },
  "-a": {
    "type": "string",
    "name": "Disable forwarding of authentication agent connection"
  },
  "-b": {
    "type": "string",
    "name": "Bind to local address"
  },
  "-C": {
    "type": "check",
    "name": "Request compression of all data"
  },
  "-c": {
    "type": "string",
    "name": "Use specified cipher"
  },
  "-E": {
    "type": "string",
    "name": "Log file"
  },
  "-e": {
    "type": "string",
    "name": "Escape character"
  },
  "-F": {
    "type": "string",
    "name": "Config file"
  },
  "-f": {
    "type": "check",
    "name": "Go to background"
  },
  "-G": {
    "type": "check",
    "name": "Cause ssh to go to background just before command execution"
  },
  "-g": {
    "type": "check",
    "name": "Allows remote hosts to connect to local forwarded ports"
  },
  "-J": {
    "type": "string",
    "name": "Connect to the target host by first making a ssh connection to the jump host"
  },
  "-K": {
    "type": "check",
    "name": "Enable GSSAPI proxy"
  },
  "-k": {
    "type": "check",
    "name": "Disable GSSAPI authentication"
  },
  "-l": {
    "type": "string",
    "name": "Login username"
  },
  "-M": {
    "type": "check",
    "name": "Send keepalive messages"
  },
  "-m": {
    "type": "string",
    "name": "MAC algorithm"
  },
  "-N": {
    "type": "check",
    "name": "Do not execute a remote command"
  },
  "-n": {
    "type": "check",
    "name": "Redirects stdin from /dev/null"
  },
  "-O": {
    "type": "string",
    "name": "Control an active connection multiplexing master process"
  },
  "-o": {
    "type": "string",
    "name": "Specify option"
  },
  "-Q": {
    "type": "string",
    "name": "Queries ssh for the meaning of various configuration options"
  },
  "-S": {
    "type": "string",
    "name": "Specify control socket"
  },
  "-s": {
    "type": "check",
    "name": "Request a secure shell"
  },
  "-T": {
    "type": "check",
    "name": "Disable pseudo-tty allocation"
  },
  "-V": {
    "type": "check",
    "name": "Display version information and exit"
  },
  "-W": {
    "type": "string",
    "name": "Requests that standard input and output on the client be forwarded to the specified host and port"
  },
  "-w": {
    "type": "string",
    "name": "Sets the time (in seconds) after which the connection will be automatically closed"
  },
  "-X": {
    "type": "check",
    "name": "Enable X11 forwarding"
  },
  "-x": {
    "type": "check",
    "name": "Disable X11 forwarding"
  },
  "-Y": {
    "type": "check",
    "name": "Enable trusted X11 forwarding"
  },
  "-y": {
    "type": "check",
    "name": "Enable trusted X11 forwarding"
  },
  "-Z": {
    "type": "check",
    "name": "Enable SSH connection compression"
  },
  "-z": {
    "type": "check",
    "name": "Request compression of all data in transit"
  }
}
  ;
module.exports = {
  name: 'ssh',
  desc: 'SSH (Secure Shell) is a protocol for securely transmitting data over an insecure network. It is commonly used to remotely log in to another computer and execute commands.',
  usages: [
    {
      name: "Log in to a server",
      form: { ...args },
      filter: (cmd, values) => cmd + ' ' + values.user + '@' + values.server
    },
    {
      name: "Local port forwarding",
      desc: "Access any address on the ssh server's network via a specified local port",
      form: {
        localPort: {
          "name": "Local port",
          "required": true
        },
        targetServer: {
          "name": "Address to access (IP or domain name)",
          "required": true,
        },
        targetServerPort: {
          "name": "Port to access on the address",
          "required": true
        },
        ...args
      },
      filter: (cmd, values) =>
        `${cmd} -L ${values.localPort}:${values.targetServer}:${values.targetServerPort} ${values.user}@${values.server}`
    },
    {
      name: "Remote port forwarding",
      desc: "Access any address on the local network via a specified port on the ssh server",
      form: {
        remotePort: {
          "name": "Remote port",
          "required": true
        },
        targetServer: {
          "name": "Address to access (IP or domain name)",
          "required": true,
        },
        targetServerPort: {
          "name": "Port to access on the address",
          "required": true
        },
        ...args
      },
      filter: (cmd, values) =>
        `${cmd} -R ${values.remotePort}:${values.targetServer}:${values.targetServerPort} ${values.user}@${values.server}`
    },
    {
      name: "Dynamic port forwarding",
      desc: "Create a socks proxy between a specified local port and the ssh server. Through this proxy, you can access all addresses that the ssh server can access.",
      form: {
        '-D': {
          "name": "Forwarding port",
          "required": true
        },
        ...args
      },
      filter: (cmd, values) => cmd + ' ' + values.user + '@' + values.server
    },
  ],
};