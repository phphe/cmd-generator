## Example

- `sudo chown root file.txt`, change the owner of `file.txt` to the `root` user.
- `sudo chown root:root file.txt`, change the owner and group of `file.txt` to `root`.
- `sudo chown :staff file.txt`, change the group of `file.txt` to the `staff` group.
- `sudo chown -R root:root /var/www`, change the owner and group of all files and directories under `/var/www` to `root`.
- `sudo chown -h root file.txt`, fix the owner of the file pointed to by the symbolic link `file.txt` to `root`.

Note: the `sudo` in the command line code means to execute the command with administrator privileges.
