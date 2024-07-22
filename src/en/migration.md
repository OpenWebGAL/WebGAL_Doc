# Migrate Game Files After Editor Update

## Migrating Games

WebGAL Terre editor's game project files are located in the `public/games` directory. In this directory, you can see the names of the games you have created.

After you download or install the new editor, you can directly migrate the games from the old editor to the same directory of the new editor, and then open the new editor to use them.

Except for major version (the first digit of the version number) upgrades, the compatibility is not guaranteed, but in general, games are backward compatible.

## Migrating Templates and Custom Engines

If you have created templates or imported custom engines, you will also need to migrate these files to the new version of the editor. Template files are located in the `public/templates` directory.
Custom engines are located in the `assets/templates/Derivative_Engine` directory. You will need to migrate these files to the same directory in the new version.
