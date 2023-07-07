## Example

- `cat file1.txt file2.txt` Merge two files
- `cat file.txt > newfile.txt` Copy the content of file `file.txt` to a new file `newfile.txt`
- `cat > newfile.txt` Create a new file `newfile.txt` and enter text. Press `Ctrl+D` to save and exit.
- `cat -n file.txt` Display the content of file `file.txt` and display line numbers before each line
- `cat -v file.txt` Display the content of file `file.txt` and display non-printable characters
- `cat -T file.txt` Display the content of file `file.txt` and display TAB characters as `^I`
- `cat -s file.txt` Display the content of file `file.txt` and display consecutive blank lines as one blank line
- `cat -E file.txt` Display the content of file `file.txt` and display `$` at the end of each line
- `cat -u file.txt` Display the content of file `file.txt` and disable output buffering
- `cat -b file.txt` Display the content of file `file.txt` and number non-blank output lines, do not number blank output lines
