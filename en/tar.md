## Example

- `tar -cvf file.tar /path/to/folder`, pack the `/path/to/folder` directory into a `file.tar` file.
- `tar -xvf file.tar`, extract the archive file named `file.tar`.
- `tar -zcvf file.tar.gz /path/to/folder`, pack the `/path/to/folder` directory and compress it to a `file.tar.gz` file using gzip.
- `tar -jcvf file.tar.bz2 /path/to/folder`, pack the `/path/to/folder` directory and compress it to a `file.tar.bz2` file using bzip2.
- `tar -tvf file.tar`, view the list of files contained in the `file.tar` file.
- `tar -rvf file.tar /path/to/newfile`, add the `/path/to/newfile` file to the archive file named `file.tar`.
- `tar -f archive.tar --delete file1.txt file2.txt`, delete the "file1.txt" and "file2.txt" files from the archive file named "archive.tar". Note that the --delete parameter can only be used for .tar format archive files, and not for compressed format archive files such as .tar.gz, .tar.bz2, etc. In addition, the --delete parameter may not be supported in some tar implementations, so please check whether it is available based on the version of tar and the operating system you are using.
