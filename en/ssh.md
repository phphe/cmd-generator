## Example

- `ssh user@hostname`, connect to remote host
- `ssh -p port user@hostname`, connect to remote host on specified port
- `ssh -i /path/to/private_key user@hostname`, authenticate using specified private key
- `ssh -L local_port:remote_host:remote_port user@hostname`, open local port forwarding
- `ssh -R remote_port:localhost:local_port user@hostname`, open remote port forwarding
- `ssh -X user@hostname`, open X11 forwarding
- `ssh -D local_socks_port user@hostname`, open dynamic port forwarding
- `ssh -f user@hostname -L local_port:remote_host:remote_port -N`, run SSH client in the background and open local port forwarding

### Implement local port connection to server database

Databases generally use port 3306. Implement connecting to server port 3306 using local port 3306.

```
ssh -L 3306:localhost:3306 username@server_ip

```

Here, 3306 is the local port, localhost is the remote host address, 3306 is the remote host port, username is the remote host username, and server_ip is the remote host IP address.

Connect to the remote host's 3306 port by using a MySQL client on the local host with localhost:3306.

Of course, you can also change the first 3306 to implement connecting other local ports to the server's 3306 port.

### SSH remote forwarding server 3306 port connection to local 3306 port

If you have a database installed locally and want the server to access the local database. (Only recommended for use in a development environment)

```
ssh -L 3306:localhost:3306 username@server_ip_address

```

Here, username is your username on the server, and server_ip_address is the IP address of the server.

Note that when you close the SSH connection, the tunnel will also close. This means that if you want to continue interacting with the MySQL server, you need to keep the SSH connection open. You can also keep the command running in the background to keep the connection open.

### Running SSH connection in the background

If you want the SSH connection to run in the background, you can add the `-fNT` option when entering the SSH command, as shown below:

```
ssh -fNT -L 3306:localhost:3306 username@server_ip_address

```

This will run the SSH connection in the background without displaying output in the terminal or command prompt. To close the SSH connection, use the following command:

```
kill `ps aux | grep ssh | grep 'username@server_ip_address' | awk '{print $2}'`

```

Here, `username@server_ip_address` is the username and IP address of the SSH connection you previously used.

Note that this will terminate all processes associated with the SSH connection, including those running in the background. If you only want to close a specific SSH connection, use the following command:

```
ps aux | grep ssh | grep 'username@server_ip_address'

```

This will display a list of all processes related to that SSH connection. Find the process you want to terminate and terminate it using the `kill` command, as shown below:

```
kill <process_id>

```

Here, `<process_id>` is the ID number of the process to terminate.
