# FAQ

## Why are my files not recognized properly

File names should avoid using special symbols, spaces and other hard-to-recognize names. Use pure English naming as much as possible. The file extensions should be all lowercase.

## Why is my audio file not playing properly

On Apple browsers, ogg files are not supported. You need to convert the file format, for example, to mp3.

## Why can't I open the exported web page

Due to browser security policies, you cannot open a local web page from a file. You need to use an http server, deploy WebGAL in the same way as deploying a website. Common ones are: Nginx, Apache http server, VS Code Live Server plugin, Python http server.

## Why does the visual editor flash briefly and disappear on Windows 7

Due to the node.js version being higher than the highest version supported by Windows 7. Please refer to [Method to start production with visual editor on Windows 7](win7) to resolve.
