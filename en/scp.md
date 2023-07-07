## Example

- `scp file.txt user@remote:/path/to/destination` transfers the local file file.txt to the remote host at /path/to/destination.
- `scp -r /path/to/local/folder user@remote:/path/to/destination` recursively copies the local directory /path/to/local/folder to the remote host at /path/to/destination.
- `scp user@remote:/path/to/remote/file file.txt` downloads the remote file /path/to/remote/file to the local file file.txt.
- `scp -P 2222 file.txt user@remote:/path/to/destination` transfers the file file.txt to the remote host at /path/to/destination using a non-default port (2222).
- `scp -r user@remote:/path/to/remote/folder /path/to/local/destination` copies the directory /path/to/remote/folder from the remote host to /path/to/local/destination locally.
