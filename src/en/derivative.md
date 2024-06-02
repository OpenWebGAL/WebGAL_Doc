# How to use custom engine

Custom engine feature is added in WebGAL Terre 4.5.0. Compared with creating a new game project using only official WebGAL templates, custom engine allows you to use your own developed or other people's developed customized versions for certain types of games when creating game projects.

## File structure of custom engine

Custom engines are usually distributed in the form of compressed packages. After decompression, you will get a directory named after the custom engine. The directory structure is roughly as follows (name is the name of the custom engine displayed in WebGAL Terre):

```
name
├── assets
├── game
├── icons
├── index.html
├── manifest.json
└── webgal-serviceworker.js
```

Then, put such a directory under WebGAL Terre's assets/templates/Derivative_Engine, forming a file structure like the following (otherwise, the game cannot be created normally):

```
Derivative_Engine
└── name
    ├── assets
    ├── game
    ├── icons
    ├── index.html
    ├── manifest.json
    └── webgal-serviceworker.js

```

Start WebGAL Terre, you should be able to choose to create a game using a custom engine when creating a game.