## 例子

- `sudo chown root file.txt`，将 `file.txt` 的所有者更改为 `root` 用户。
- `sudo chown root:root file.txt`，将 `file.txt` 的所有者和组都更改为 `root`。
- `sudo chown :staff file.txt`，将 `file.txt` 的组更改为 `staff` 组。
- `sudo chown -R root:root /var/www`，将 `/var/www` 目录下的所有文件和目录的所有者和组都更改为 `root`。
- `sudo chown -h root file.txt`，修复 `file.txt` 符号链接指向的文件的所有者为 `root`。

注意：命令行代码中的 `sudo` 表示以管理员权限执行命令。
