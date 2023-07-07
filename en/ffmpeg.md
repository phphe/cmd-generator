## Example

### Video Transcoding

Convert a video from one format to another:

```
ffmpeg -i input.mp4 output.avi

```

This command converts the input video file `input.mp4` to the output video file `output.avi`.

### Video Cropping

Clip a portion from a video:

```
ffmpeg -i input.mp4 -ss 00:01:30 -t 00:00:30 -c copy output.mp4

```

This command clips 30 seconds from the input video file `input.mp4` starting at 1 minute and 30 seconds and saves the result as the output video file `output.mp4`.

### Video Scaling

Resize the video to a specified width and height:

```
ffmpeg -i input.mp4 -s 640x360 output.mp4

```

This command resizes the input video file `input.mp4` to a width of 640 pixels and a height of 360 pixels and saves the result as the output video file `output.mp4`.

### Audio Extraction

Extract audio from a video:

```
ffmpeg -i input.mp4 -vn -acodec copy output.m4a

```

This command extracts the audio from the input video file `input.mp4` and saves the result as the output audio file `output.m4a`.

### Video Concatenation

Combine multiple videos into one video:

```
ffmpeg -i input1.mp4 -i input2.mp4 -filter_complex "[0:v:0][0:a:0][1:v:0][1:a:0]concat=n=2:v=1:a=1" output.mp4

```

This command merges two input video files `input1.mp4` and `input2.mp4` into one output video file `output.mp4`.

### Folder Image to Video

Convert all images in a folder to a video:

```
ffmpeg -r 1/5 -i img%03d.png -c:v libx264 -vf fps=25 -pix_fmt yuv420p out.mp4

```

This command compiles all PNG format images starting with "img" in the folder in file name order into one output video file `out.mp4`.
