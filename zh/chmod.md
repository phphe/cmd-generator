## 例子

- `chmod [mode] [file]`: 更改文件/目录的权限模式。
- `chmod [options] [mode] [file]`: 更改文件/目录的权限模式，并指定相应的参数。常用的选项如下：
  - `c`: 只在文件的权限确实已经更改时，才显示其更改动作。
  - `f`: 不显示错误信息。
  - `v`: 显示权限更改的详细处理信息。
  - `R`: 递归处理，将指定目录下的所有文件和子目录一并处理。
- 权限模式的格式：`[ugoa...][[+-=][rwxXstugo...]...][,...]`，其中：
  - `u` 表示文件所有者，`g` 表示文件所有者所在的用户组，`o` 表示其他用户，`a` 表示所有用户。
  - `+` 表示添加权限，`` 表示删除权限，`=` 表示设置权限。
  - `r` 表示读权限，`w` 表示写权限，`x` 表示执行权限，`X` 表示仅当该文件为目录或者至少有一个用户已经拥有该文件的执行权限时，才给该文件加上执行权限。
  - `s` 表示设置 SUID 或 SGID 位，`t` 表示设置粘滞位，`u` 表示只对文件所有者有效，`g` 表示只对文件所在用户组有效，`o` 表示只对其他用户有效。
- 以下是一些常见的权限模式：

  - `chmod u+x [file]`: 给文件所有者添加执行权限。
  - `chmod a=rw [file]`: 设置所有用户的读写权限。
  - `chmod 755 [dir]`: 将目录的权限设置为 `rwxr-xr-x`，即文件所有者具有读、写、执行权限，其他用户具有读、执行权限。
  - `chmod -R u+w [dir]`: 递归地将目录及其子目录下所有文件的所有者添加写权限。

- `chmod u+x [file]`, 给文件所有者添加执行权限。
- `chmod a=rw [file]`, 设置所有用户的读写权限。
- `chmod 755 [dir]`, 将目录的权限设置为 `rwxr-xr-x`，即文件所有者具有读、写、执行权限，其他用户具有读、执行权限。
- `chmod -R u+w [dir]`, 递归地将目录及其子目录下所有文件的所有者添加写权限。
