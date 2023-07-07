## 例子

- `scp file.txt user@remote:/path/to/destination`，将本地文件 file.txt 传输到远程主机 /path/to/destination 路径下。
- `scp -r /path/to/local/folder user@remote:/path/to/destination`，递归复制本地目录 /path/to/local/folder 到远程主机 /path/to/destination 路径下。
- `scp user@remote:/path/to/remote/file file.txt`，从远程主机下载文件 /path/to/remote/file 到本地文件 file.txt。
- `scp -P 2222 file.txt user@remote:/path/to/destination`，使用非默认端口（2222）将文件 file.txt 传输到远程主机 /path/to/destination 路径下。
- `scp -r user@remote:/path/to/remote/folder /path/to/local/destination`，从远程主机复制目录 /path/to/remote/folder 到本地 /path/to/local/destination 路径下。
