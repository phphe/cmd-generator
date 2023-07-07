## 例子

- `locate test.txt`，搜索系统中所有名为 test.txt 的文件并返回它们的路径。
- `locate -i test.txt`，搜索系统中所有名为 test.txt 的文件，不区分大小写，并返回它们的路径。
- `locate -r '.*/test\.txt$'`，搜索系统中所有以 test.txt 结尾的文件，并返回它们的路径。
- `locate -c test.txt`，搜索系统中所有名为 test.txt 的文件并返回它们的数量。
- `locate -l 5 test.txt`，搜索系统中所有名为 test.txt 的前 5 个文件，并返回它们的路径。
- `locate -e test.txt`，搜索系统中所有名为 test.txt 的文件，确切匹配文件名，并返回它们的路径。
- `locate -m "*.txt"`，搜索系统中所有文件名包含.txt 的文件，并返回它们的路径。
