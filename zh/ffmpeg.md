## 例子

### 视频转码

将视频从一种格式转换为另一种格式：

```
ffmpeg -i input.mp4 output.avi

```

此命令将输入视频文件`input.mp4`转换为输出视频文件`output.avi`。

### 视频裁剪

从视频中剪切一部分：

```
ffmpeg -i input.mp4 -ss 00:01:30 -t 00:00:30 -c copy output.mp4

```

此命令将输入视频文件`input.mp4`从 1 分 30 秒处开始剪切 30 秒，并将结果保存为输出视频文件`output.mp4`。

### 视频缩放

将视频大小调整为指定的宽度和高度：

```
ffmpeg -i input.mp4 -s 640x360 output.mp4

```

此命令将输入视频文件`input.mp4`调整为宽度 640 像素和高度 360 像素，并将结果保存为输出视频文件`output.mp4`。

### 音频提取

从视频中提取音频：

```
ffmpeg -i input.mp4 -vn -acodec copy output.m4a

```

此命令将输入视频文件`input.mp4`中的音频提取，并将结果保存为输出音频文件`output.m4a`。

### 视频合并

将多个视频合并为一个视频：

```
ffmpeg -i input1.mp4 -i input2.mp4 -filter_complex "[0:v:0][0:a:0][1:v:0][1:a:0]concat=n=2:v=1:a=1" output.mp4

```

此命令将两个输入视频文件`input1.mp4`和`input2.mp4`合并为一个输出视频文件`output.mp4`。

### 文件夹图片转视频

将文件夹中的所有图片转换为视频：

```
ffmpeg -r 1/5 -i img%03d.png -c:v libx264 -vf fps=25 -pix_fmt yuv420p out.mp4

```

此命令将文件夹中的所有以"img"开头的 png 格式的图片按照文件名顺序合成为一个输出视频文件`out.mp4`。
