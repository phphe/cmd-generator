## 例子

- `tar -cvf file.tar /path/to/folder`，将 `/path/to/folder` 目录打包成 `file.tar` 文件。
- `tar -xvf file.tar`，解压名为 `file.tar` 的归档文件。
- `tar -zcvf file.tar.gz /path/to/folder`，将 `/path/to/folder` 目录打包并使用 gzip 压缩成 `file.tar.gz` 文件。
- `tar -jcvf file.tar.bz2 /path/to/folder`，将 `/path/to/folder` 目录打包并使用 bzip2 压缩成 `file.tar.bz2` 文件。
- `tar -tvf file.tar`，查看 `file.tar` 文件中包含的文件列表。
- `tar -rvf file.tar /path/to/newfile`，将 `/path/to/newfile` 文件添加到名为 `file.tar` 的归档文件中。
- `tar -f archive.tar --delete file1.txt file2.txt`, 从名为"archive.tar"的归档文件中删除"file1.txt"和"file2.txt"两个文件。请注意，--delete 参数只能用于.tar 格式的归档文件，不能用于压缩格式的归档文件（如.tar.gz、.tar.bz2 等）。此外，--delete 参数在某些 tar 实现中可能不被支持，因此请根据您使用的 tar 版本和操作系统来确定其是否可用。
