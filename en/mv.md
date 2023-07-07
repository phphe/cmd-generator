## Example

- `mv file1 file2`: Rename file1 to file2
- `mv file1 dir1`: Move file1 to directory dir1
- `mv file1 dir1/file2`: Move file1 to directory dir1 and rename it as file2
- `mv -i file1 file2`: Rename file1 to file2 and prompt for confirmation if file2 already exists
- `mv -u file1 file2`: Move file1 to file2 if file2 does not exist or if file1 is newer than file2
- `mv -v file1 file2`: Move file1 to file2 and display detailed process
- `mv -b file1 file2`: Move file1 to file2 and create a backup of file2 before overwriting it
- `mv -S .bak file1 file2`: Move file1 to file2 and create a backup file with the `.bak` suffix
- `mv -T file1 file2`: Treat the file as a text file and convert it during the move
- `mv -Z file1 file2`: Check if it is safe to move the file to the target location and prevent it from being moved to a directory with security labels.
