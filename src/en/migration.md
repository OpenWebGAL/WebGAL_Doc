# Migrate Game Files After Editor Update

WebGAL Terre 4.6 significantly changes how user data is organized. This page keeps the migration notes for version 4.5 and earlier, and adds the required migration path from 4.5 to 4.6.

## Upgrading from 4.5 to 4.6

Starting from 4.6, WebGAL Terre stores games, templates, custom engines, and exported files in a unified user data directory. The 4.6 installation directory no longer provides the old user project directories such as `public/games`, `public/templates`, and `assets/templates/Derivative_Engine` by default, so copying 4.5 files into the same paths under the 4.6 installation directory is no longer a valid migration method.

Migrate manually as follows:

1. Open WebGAL Terre 4.6 once so Terre can create the new user data directory.
2. In WebGAL Terre 4.6, open Settings, go to the user data settings, and click the button to open the user data directory.
3. Open the installation directory of your old WebGAL Terre 4.5.
4. Copy each game project folder from `public/games` in 4.5 to the `games` directory in the 4.6 user data directory.
5. If you have custom templates, copy the custom template folders from `public/templates` in 4.5 to the `templates` directory in the 4.6 user data directory. Built-in templates do not need to be copied.
6. If you imported custom engines, copy the custom engine folders from `assets/templates/Derivative_Engine` in 4.5 to the `derivative-engines` directory in the 4.6 user data directory.
7. Return to WebGAL Terre 4.6, refresh the game list and template list or restart Terre, then confirm that the content appears.

The main directories in the 4.6 user data directory are:

- `games`: stores your game projects. Old `public/games/<game name>` folders should become `games/<game name>`.
- `templates`: stores custom templates you created or imported. Old `public/templates/<template name>` folders should become `templates/<template name>`.
- `derivative-engines`: stores custom engines. Old `assets/templates/Derivative_Engine/<engine name>` folders should become `derivative-engines/<engine name>`.
- `Exported_Games`: stores games exported from Terre.
- `config.json`: stores Terre user data configuration. Do not edit it manually unless you understand the fields.

If you use portable mode, the actual user data directory is the `data` folder inside the installation directory. The migration target is still the `games`, `templates`, and `derivative-engines` directories under that folder.

Starting from 4.6, future WebGAL Terre upgrades no longer require manual game file migration. The user data directory will continue to be reused after upgrading, unless you manually change the user data directory or switch data locations in portable mode.

## Migrating Games Between 4.5 and Earlier Versions

The following notes only apply to migration between 4.5 and earlier versions. If you are upgrading to 4.6 or later, use the user data directory migration method above.

WebGAL Terre editor's game project files are located in the `public/games` directory. In this directory, you can see the names of the games you have created.

After you download or install the new editor, you can directly migrate the games from the old editor to the same directory of the new editor, and then open the new editor to use them.

Except for major version upgrades (the first digit of the version number), compatibility is not guaranteed, but in general, games are backward compatible.

## Migrating Templates and Custom Engines Between 4.5 and Earlier Versions

If you have created templates or imported custom engines, you will also need to migrate these files to the new version of the editor. Template files are located in the `public/templates` directory.
Custom engines are located in the `assets/templates/Derivative_Engine` directory. You will need to migrate these files to the same directory in the new version.
