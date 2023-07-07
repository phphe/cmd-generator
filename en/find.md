## Example

- `find . -name "*.txt"` searches for all files with the extension `.txt` in the current directory and its subdirectories.
- `find /var/log -type f -size +10M -print` searches for files larger than 10MB in the `/var/log` directory.
- `find /usr/local -type f -mtime +30 -print` searches for files modified within the last 30 days in the `/usr/local` directory.
- `find /home -type d -name "*test*"` searches for all directories with names containing "test" in the `/home` directory.
- `find /etc -type f -exec grep "example.com" {} \\;` searches for all lines in files located in the `/etc` directory that contain the string "[example.com](http://example.com/)".
