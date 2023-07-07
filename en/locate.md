## Example

- `locate test.txt`, search for all files named test.txt in the system and return their paths.
- `locate -i test.txt`, search for all files named test.txt in the system, case-insensitive, and return their paths.
- `locate -r '.*/test\\.txt$'`, search for all files ending in test.txt in the system and return their paths.
- `locate -c test.txt`, search for all files named test.txt in the system and return their count.
- `locate -l 5 test.txt`, search for the first 5 files named test.txt in the system and return their paths.
- `locate -e test.txt`, search for all files named test.txt in the system, exact match, and return their paths.
- `locate -m "*.txt"`, search for all files containing .txt in their names in the system and return their paths.
