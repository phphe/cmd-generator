## 例子

- `cp file.txt file_backup.txt`，将 `file.txt` 复制到 `file_backup.txt`，如果 `file_backup.txt` 已经存在，则覆盖它。
- `cp -r dir1 dir2`，将目录 `dir1` 复制到 `dir2`，包括其中所有的子目录和文件。
- `cp -u file.txt dir/`，将 `file.txt` 复制到目录 `dir/` 中，如果 `dir/` 中已经存在一个新版本的 `file.txt`，则不复制。
- `cp -a dir1/ dir2/`，将目录 `dir1/` 复制到 `dir2/` 中，并保留所有元数据。
- `cp -s file.txt symlink`，在当前目录下创建一个名为 `symlink` 的符号链接，指向 `file.txt`。
