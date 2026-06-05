# How to use custom engine

Custom engine feature is added in WebGAL Terre 4.5.0. Compared with creating a new game project using only official WebGAL templates, custom engine allows you to use your own developed or other people's developed customized versions for certain types of games when creating game projects.

Starting from WebGAL Terre 4.6, custom engines should be placed in `derivative-engines` under the user data directory, not in the old `assets/templates/Derivative_Engine` path inside the installation directory.

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

Then, open the user data directory in WebGAL Terre settings and put such a directory under `derivative-engines`, forming a file structure like the following (otherwise, the game cannot be created normally):

```
derivative-engines
└── name
    ├── assets
    ├── game
    ├── icons
    ├── index.html
    ├── manifest.json
    └── webgal-serviceworker.js

```

If you use portable mode, the user data directory is the `data` folder inside the WebGAL Terre installation directory. In that case, put it under `data/derivative-engines/name`.

Start WebGAL Terre, you should be able to choose to create a game using a custom engine when creating a game.
