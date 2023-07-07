## 例子

- `mv file1 file2`: 将 file1 重命名为 file2
- `mv file1 dir1`: 将 file1 移动到 dir1 目录下
- `mv file1 dir1/file2`: 将 file1 移动到 dir1 目录下，并命名为 file2
- `mv -i file1 file2`: 将 file1 重命名为 file2，如果 file2 已存在，则询问用户是否覆盖
- `mv -u file1 file2`: 将 file1 移动到 file2，如果 file2 不存在或者源文件比目标文件新，则进行移动
- `mv -v file1 file2`: 将 file1 移动到 file2，显示详细的操作过程
- `mv -b file1 file2`: 将 file1 移动到 file2，并在覆盖操作之前创建 file2 的备份
- `mv -S .bak file1 file2`: 将 file1 移动到 file2，并用 `.bak` 后缀创建备份文件
- `mv -T file1 file2`: 将文件视为文本文件，并在移动时进行转换
- `mv -Z file1 file2`: 检查是否可以安全地移动文件到目标位置，防止移动到具有安全性标记的目录中。
