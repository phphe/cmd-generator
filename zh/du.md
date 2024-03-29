## 例子

- `du`：查看当前目录下所有文件和子目录所占用的磁盘空间大小。
- `du -h`：以人类可读的方式查看当前目录下所有文件和子目录所占用的磁盘空间大小。
- `du -s`：查看当前目录所占用的磁盘空间大小，不包括子目录。
- `du -a`：查看当前目录下所有文件和子目录所占用的磁盘空间大小，包括隐藏文件。
- `du -c`：查看当前目录下所有文件和子目录所占用的磁盘空间大小，并显示总大小。
- `du -d N`：查看当前目录下深度为 N 的所有文件和子目录所占用的磁盘空间大小。
- `du -b`：以字节为单位查看当前目录下所有文件和子目录所占用的磁盘空间大小。

可以通过在命令后加上目录名的方式，查看指定目录下的文件和子目录所占用的磁盘空间大小。例如：`du /var/log`。

注意，`du`命令会递归计算目录下所有文件和子目录的大小，可能会比较耗时。如果需要查看某个目录下的文件和子目录的大小，建议使用 `-d` 参数限制查看深度，提高命令执行效率。
