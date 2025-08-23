# Video

## Play Video

Put the video inside `video` folder, then use `playVideo` to play it.

``` ws
playVideo:OP.mp4;
```

If you want to prevent user from skipping the video, you can use `-skipOff` parameter.

``` ws
playVideo:OP.mp4 -skipOff;
```

## Video Playback Behavior

When playing videos, the following behaviors occur:

1. **Audio Control**: Video playback will automatically pause the current BGM and voice, and the volume will be automatically restored after the video ends.

2. **Skip Function**: By default, users can double-click the video to skip playback. Use the `-skipOff` parameter to disable this feature.

3. **Fullscreen Playback**: Videos will play in fullscreen mode, covering the entire game interface.

4. **Auto Continue**: After the video finishes playing, it will automatically continue to execute the next script.

## Supported Video Formats

WebGAL supports video formats that can be played by browsers. It is recommended to use:
- MP4 format (H.264 encoding)
- WebM format
- OGV format

## Usage Recommendations

- Video files should be placed in the `video` folder
- It is recommended to use compressed video files to reduce loading time
- For important story videos, it is recommended to use the `-skipOff` parameter to prevent accidental skipping