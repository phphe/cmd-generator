## Example

- `du`: View the disk space usage of all files and subdirectories in the current directory.
- `du -h`: View the disk space usage of all files and subdirectories in the current directory in a human-readable format.
- `du -s`: View the disk space usage of the current directory, excluding subdirectories.
- `du -a`: View the disk space usage of all files and subdirectories in the current directory, including hidden files.
- `du -c`: View the disk space usage of all files and subdirectories in the current directory and display the total size.
- `du -d N`: View the disk space usage of all files and subdirectories at a depth of N in the current directory.
- `du -b`: View the disk space usage of all files and subdirectories in the current directory in bytes.

You can specify a directory to view the disk space usage of all files and subdirectories in that directory by adding the directory name after the command. For example: `du /var/log`.

Note that the `du` command will recursively calculate the size of all files and subdirectories in a directory, which may be time-consuming. If you only want to view the size of files and subdirectories in a specific directory, it is recommended to use the `-d` parameter to limit the depth and improve the command execution efficiency.
