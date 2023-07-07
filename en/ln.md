## Example

- `ln file1 hardlink`: Create a hard link that points to `file1` and name it as `hardlink`.
- `ln -s file1 symlink`: Create a symbolic link that points to `file1` and name it as `symlink`.
- `ln -sf file1 file2`: Create a symbolic link that points to `file1` and name it as `file2`. If `file2` already exists, it will be overwritten.
- `ln -i file1 file2`: Create a hard link that points to `file1` and name it as `file2`. If `file2` already exists, the user will be prompted for confirmation.
