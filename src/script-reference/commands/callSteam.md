# callSteam

通过 Electron / Steam 桥接解锁 Steam 成就。

:::warning 平台限制
此命令仅在具备 Steam / Electron 桥接能力的构建环境下有效。普通网页部署（浏览器直接访问）无法使用此命令，引擎会跳过调用并返回失败结果。
:::

## 前置配置

在 `game/config.txt` 中填写 `Steam_AppID`，WebGAL 会在启动时初始化 Steam 集成。

``` text
Steam_AppID:480;
```

详情请见[编辑游戏配置](../../config.md)。

## 语句内容

无语句内容，所有参数通过参数名传入。

## 参数

### achievementId
- 字符串

填写要解锁的 Steam 成就 ID，与 Steam 后台配置的成就 API 名称一致。

``` webgal
callSteam: -achievementId=ACH_WIN_ONE_GAME;
```

## 示例

``` webgal
; 解锁成就
callSteam: -achievementId=ACH_WIN_ONE_GAME;
```
