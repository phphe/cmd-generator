## 例子

- `find . -name "*.txt"` 在当前目录及其子目录中查找所有扩展名为 `.txt` 的文件。
- `find /var/log -type f -size +10M -print` 在 `/var/log` 目录下查找文件大小大于 10MB 的文件。
- `find /usr/local -type f -mtime +30 -print` 在 `/usr/local` 目录下查找最近 30 天内被修改过的文件。
- `find /home -type d -name "*test*"` 在 `/home` 目录下查找所有文件名中包含 "test" 的目录。
- `find /etc -type f -exec grep "example.com" {} \;` 在 `/etc` 目录下查找所有文件中包含 "[example.com](http://example.com/)" 的行。
