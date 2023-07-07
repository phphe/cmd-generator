## Example

- `cp file.txt file_backup.txt`, copy `file.txt` to `file_backup.txt`, and overwrite it if `file_backup.txt` already exists.
- `cp -r dir1 dir2`, copy directory `dir1` to `dir2`, including all subdirectories and files within it.
- `cp -u file.txt dir/`, copy `file.txt` to directory `dir/`. Do not copy it if a newer version of `file.txt` already exists in `dir/`.
- `cp -a dir1/ dir2/`, copy directory `dir1/` to `dir2/`, and preserve all metadata.
- `cp -s file.txt symlink`, create a symbolic link named `symlink` in the current directory, pointing to `file.txt`.
