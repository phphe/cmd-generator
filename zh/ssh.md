## 例子

- `ssh user@hostname`，连接到远程主机
- `ssh -p port user@hostname`，连接到远程主机的指定端口
- `ssh -i /path/to/private_key user@hostname`，使用指定的私钥进行身份验证
- `ssh -L local_port:remote_host:remote_port user@hostname`，打开本地端口转发
- `ssh -R remote_port:localhost:local_port user@hostname`，打开远程端口转发
- `ssh -X user@hostname`，打开 X11 转发
- `ssh -D local_socks_port user@hostname`，打开动态端口转发
- `ssh -f user@hostname -L local_port:remote_host:remote_port -N`，将 SSH 客户端转入后台运行并打开本地端口转发

### 实现本地端口连接服务器数据库

数据库一般使用 3306 端口。实现本地 3306 端口连接服务器 3306 端口。

```sh
ssh -L 3306:localhost:3306 username@server_ip
```

其中，3306 是本地端口，localhost 是远程主机地址，3306 是远程主机端口，username 是远程主机用户名，server_ip 是远程主机 IP 地址。

在本地主机上使用 MySQL 客户端连接 localhost:3306 即可连接到远程主机的 3306 端口。

当然你也可以更改第一个 3306，实现本地其他端口连接服务器 3306 端口。

### SSH 远程转发服务器 3306 端口连接本地 3306 端口

如果你数据库安装在本地，想要服务器访问本地的数据库。（仅推荐在开发环境中使用）

```sh
ssh -L 3306:localhost:3306 username@server_ip_address
```

其中，username 是您在服务器上的用户名，server_ip_address 是服务器的 IP 地址。

请注意，当您关闭 SSH 连接时，隧道也会关闭。这意味着如果您想继续与 MySQL 服务器进行交互，则需要保持 SSH 连接打开。你也可以让命令保持后台执行以保持连接。

### 使 SSH 连接在后台运行

如果您想让 SSH 连接在后台运行，可以在输入 SSH 命令时添加`-fNT`选项，如下所示：

```sh
ssh -fNT -L 3306:localhost:3306 username@server_ip_address
```

这将在后台运行 SSH 连接，而不会在终端或命令提示符中显示输出。要关闭 SSH 连接，请使用以下命令：

```sh
kill `ps aux | grep ssh | grep 'username@server_ip_address' | awk '{print $2}'`
```

其中，`username@server_ip_address`是您之前使用的 SSH 连接的用户名和 IP 地址。

请注意，这将终止所有与该 SSH 连接相关的进程，包括在后台运行的进程。如果您只想关闭特定的 SSH 连接，请使用以下命令：

```sh
ps aux | grep ssh | grep 'username@server_ip_address'
```

这将显示与该 SSH 连接相关的所有进程的列表。找到要终止的进程，并使用`kill`命令将其终止，如下所示：

```sh
kill <process_id>
```

其中，`<process_id>`是要终止的进程的 ID 号。
