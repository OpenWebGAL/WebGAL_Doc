# Manage game resources

::: tip
If you are using the graphical editor, you can directly open the corresponding resource folder in the toolbar on the left. If you are developing based on the source code, the folder is under `public`.
:::

All your game scripts, pictures, and portraits should be placed under the `game` folder corresponding to the game project. The following is a description of the resources corresponding to the directory:

| Folder     | Resources stored                   |
| :--------- | :-------------------------- |
| animation  | Animation description file                 |
| background | Used to store background pictures, title page background  |
| figure     | Used to store character portraits             |
| scene      | Used to store user scripts             |
| bgm        | Used to store background music             |
| vocal      | Used to store dubbing files             |
| video      | Used to store videos                 |
| tex        | Used to store special effects texture files         |

The `game` folder also contains the following files:

| File / Folder      | Purpose |
| :----------------- | :-- |
| config.txt         | Game configuration. See [Edit Game Configuration](config.md) |
| template           | UI template |
| userStyleSheet.css | Global style sheet loaded when the game starts |
| flowchart.json     | Flowchart data. See [Flowchart](webgal-script/flowchart.md) |
