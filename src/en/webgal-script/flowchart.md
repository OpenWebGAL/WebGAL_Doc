# Flowchart

A flowchart draws the story nodes of your game as a chart. After the player passes a node, it is unlocked. The player can then view unlocked nodes in the flowchart and click a node to return to the progress recorded there.

::: info
The flowchart is available since v4.6.2.
:::

## Enabling the Flowchart

Two steps are required:

1. Add `Enable_flowchart:true;` to `config.txt`.
2. Put a `flowchart.json` file describing the flowchart in the `game` folder.

Once enabled, a Flowchart entry appears in the game menu and the bottom control bar.

::: tip
If you use the graphical editor, you can edit the flowchart visually on the editor's flowchart page instead of writing `flowchart.json` by hand.
:::

## Format of flowchart.json

The following example contains a main story and one character route:

``` json
{
  "flowcharts": [
    {
      "id": "main",
      "name": "Main Story",
      "type": "main",
      "nodes": [
        { "id": "start", "type": "root", "position": { "x": 0, "y": 0 }, "data": { "label": "Prologue", "sceneName": "start.txt", "isRoot": true } },
        { "id": "ch1", "type": "chapter", "position": { "x": 0, "y": 120 }, "data": { "label": "Chapter 1", "sceneName": "chapter1.txt" } }
      ],
      "edges": [
        { "id": "e-start-ch1", "source": "start", "target": "ch1" }
      ]
    },
    {
      "id": "route_a",
      "name": "Route A",
      "type": "character",
      "nodes": [
        { "id": "a1", "type": "chapter", "position": { "x": 0, "y": 0 }, "data": { "label": "Route A Chapter 1", "sceneName": "route_a/chapter1.txt" } }
      ],
      "edges": []
    }
  ]
}
```

Each item in `flowcharts` is one flowchart, shown as a tab in the flowchart screen:

| Field | Description |
| :-- | :-- |
| `id` | Unique identifier of the flowchart |
| `name` | Name shown on the tab |
| `type` | `main` (main story) or `character` (character route). Defaults to `character`. A flowchart whose `id` is `main` is always treated as the main story. The main story is always shown; a character route stays hidden until the player unlocks any of its nodes, to avoid spoilers |
| `nodes` | List of nodes |
| `edges` | List of edges |

Fields of each node:

| Field | Description |
| :-- | :-- |
| `id` | Unique identifier of the node within this flowchart |
| `data.label` | Name shown on the node |
| `data.sceneName` | Scene file of the node, relative to the `scene` folder, such as `chapter1.txt` or `route_a/chapter1.txt` |
| `data.isRoot` | Whether the node is a starting point of the flowchart |
| `type` | Node type, such as `root`, `chapter`, `branch`, `ending`, or `event`. Used by the editor |
| `position` | Position of the node in the editor. The in-game flowchart is laid out automatically from the edges and does not use this position |

Fields of each edge: `id` is the unique identifier of the edge, and `source` and `target` are the `id`s of the start and end nodes.

## Unlocking and Returning to Nodes

After entering the scene of a node, the node is unlocked when the first dialogue of that scene is shown, and the current progress is recorded. If nodes in several flowcharts point to the same scene, they are unlocked together. When the player passes an unlocked node again, the recorded progress is updated to the latest one.

Clicking an unlocked node in the flowchart returns the player to the recorded progress. Locked nodes cannot be clicked.

Clearing all data in Options → System also clears the flowchart progress.

## Displaying Locked Nodes

Set how locked nodes are displayed with `Flowchart_Locked_Node_Visibility` in `config.txt`:

| Value | Effect |
| :-- | :-- |
| `node` | Default. Shows the node without its name |
| `all` | Shows the node and its name |
| `none` | Hides locked nodes completely |

``` text
Enable_flowchart:true;
Flowchart_Locked_Node_Visibility:none;
```
