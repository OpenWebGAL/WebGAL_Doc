# 流程图

流程图把游戏的剧情节点画成一张图。玩家经过某个节点后，该节点就会解锁；之后可以在流程图中查看已解锁的节点，并点击节点回到当时的进度。

::: info
流程图功能从 v4.6.2 开始提供。
:::

## 启用流程图

启用流程图需要两步：

1. 在 `config.txt` 中加入 `Enable_flowchart:true;`。
2. 在 `game` 文件夹下放置描述流程图的 `flowchart.json` 文件。

启用后，游戏菜单和底部控制栏中会出现「流程图」入口。

::: tip
使用图形化编辑器时，可以直接在编辑器的流程图页面中可视化编辑流程图，无需手写 `flowchart.json`。
:::

## flowchart.json 的格式

下面是一个包含主线和一条个人线的示例：

``` json
{
  "flowcharts": [
    {
      "id": "main",
      "name": "主线",
      "type": "main",
      "nodes": [
        { "id": "start", "type": "root", "position": { "x": 0, "y": 0 }, "data": { "label": "序章", "sceneName": "start.txt", "isRoot": true } },
        { "id": "ch1", "type": "chapter", "position": { "x": 0, "y": 120 }, "data": { "label": "第一章", "sceneName": "chapter1.txt" } }
      ],
      "edges": [
        { "id": "e-start-ch1", "source": "start", "target": "ch1" }
      ]
    },
    {
      "id": "route_a",
      "name": "角色A线",
      "type": "character",
      "nodes": [
        { "id": "a1", "type": "chapter", "position": { "x": 0, "y": 0 }, "data": { "label": "角色A线 第一章", "sceneName": "route_a/chapter1.txt" } }
      ],
      "edges": []
    }
  ]
}
```

`flowcharts` 中的每一项是一张流程图，在流程图界面中以标签页切换：

| 字段 | 说明 |
| :-- | :-- |
| `id` | 流程图的唯一标识 |
| `name` | 显示在标签页上的名称 |
| `type` | `main`（主线）或 `character`（个人线），默认为 `character`。`id` 为 `main` 的流程图总是视为主线。主线始终显示；个人线在玩家解锁其中任意一个节点之前不会显示，以免剧透 |
| `nodes` | 节点列表 |
| `edges` | 连线列表 |

每个节点的字段：

| 字段 | 说明 |
| :-- | :-- |
| `id` | 节点在这张流程图中的唯一标识 |
| `data.label` | 节点上显示的名称 |
| `data.sceneName` | 节点对应的场景文件，相对于 `scene` 文件夹，例如 `chapter1.txt` 或 `route_a/chapter1.txt` |
| `data.isRoot` | 是否作为流程图的起点 |
| `type` | 节点类型，如 `root`、`chapter`、`branch`、`ending`、`event`，供编辑器使用 |
| `position` | 节点在编辑器中的位置。游戏中的流程图会根据连线自动排列，不使用此位置 |

每条连线的字段：`id` 为连线的唯一标识，`source` 和 `target` 分别为起点和终点节点的 `id`。

## 节点的解锁与回溯

进入节点对应的场景后，显示该场景的第一句对话时，节点解锁，同时记录此时的游戏进度。如果多张流程图中的节点对应同一个场景，它们会同时解锁。再次经过已解锁的节点时，记录的进度会更新为最近一次。

玩家在流程图中点击已解锁的节点，即可回到记录的进度继续游戏。未解锁的节点无法点击。

在「选项 → 系统」中清除所有数据时，流程图的解锁进度也会一并清除。

## 未解锁节点的显示

在 `config.txt` 中用 `Flowchart_Locked_Node_Visibility` 设置未解锁节点的显示方式：

| 值 | 效果 |
| :-- | :-- |
| `node` | 默认值。显示节点，但不显示名称 |
| `all` | 显示节点及其名称 |
| `none` | 完全隐藏未解锁的节点 |

``` text
Enable_flowchart:true;
Flowchart_Locked_Node_Visibility:none;
```
