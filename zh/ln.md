## 例子

- `ln file1 hardlink`: 创建指向 `file1` 的硬链接，并将其命名为 `hardlink`。
- `ln -s file1 symlink`: 创建指向 `file1` 的符号链接，并将其命名为 `symlink`。
- `ln -sf file1 file2`: 创建指向 `file1` 的符号链接，并将其命名为 `file2`。如果 `file2` 已经存在，则会被覆盖。
- `ln -i file1 file2`: 创建指向 `file1` 的硬链接，并将其命名为 `file2`。如果 `file2` 已经存在，则会要求用户进行确认。
