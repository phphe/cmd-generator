## 例子

- `cat file1.txt file2.txt` 合并两个文件
- `cat file.txt > newfile.txt` 将文件 `file.txt` 的内容复制到新文件 `newfile.txt`
- `cat > newfile.txt` 创建新文件 `newfile.txt`，并输入文本。按下 `Ctrl+D` 保存并退出。
- `cat -n file.txt` 显示文件 `file.txt` 的内容，并在每行前面显示行号
- `cat -v file.txt` 显示文件 `file.txt` 的内容，并在其中显示非打印字符
- `cat -T file.txt` 显示文件 `file.txt` 的内容，并将 TAB 字符显示为 `^I`
- `cat -s file.txt` 显示文件 `file.txt` 的内容，并将连续的多个空行显示为一个空行
- `cat -E file.txt` 显示文件 `file.txt` 的内容，并在每行结束处显示 `$`
- `cat -u file.txt` 显示文件 `file.txt` 的内容，禁止缓冲输出
- `cat -b file.txt` 显示文件 `file.txt` 的内容，并对非空输出行进行编号，空输出行不编号
