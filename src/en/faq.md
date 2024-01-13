# Possible Problems and Solutions

## Why my files are not recognized properly

The file names should avoid using special symbols, spaces and other hard-to-recognize characters. Use pure English names as much as possible. The file extensions should be all lowercase.

## Why my audio files are not played properly

On Apple's Safari browser, ogg files are not supported. You need to convert the file format, for example, to mp3.

## Why the exported web page cannot be opened

Due to browser security policy, you cannot open a local web page from a file. You need to use a http server, deploy WebGAL by the same way as deploying a website. Common choices are: Nginx, Apache http server, VS Code Live Server extension, Python http server.

## Why the visual editor flashes and disappears on Windows 7

This is because the version of node.js is higher than the highest version supported by Windows 7. Please refer to [How to use the visual editor on Windows 7](./win7) to solve the problem.