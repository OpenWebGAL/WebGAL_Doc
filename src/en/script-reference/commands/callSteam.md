# callSteam

Unlocks Steam achievements through the Electron / Steam bridge.

:::warning Platform limitation
This command only works in builds that provide Steam / Electron bridge support. Normal web deployments, accessed directly in a browser, cannot use this command. The engine will skip the call and return a failed result.
:::

## Prerequisite Configuration

Fill in `Steam_AppID` in `game/config.txt`. WebGAL initializes Steam integration when the game starts.

```text
Steam_AppID:480;
```

See [Edit Game Configuration](../../config.md) for details.

## Statement Content

There is no statement content. All values are passed through named parameters.

## Parameters

### achievementId
- String

Sets the Steam achievement ID to unlock. It must match the achievement API name configured in the Steam backend.

```webgal
callSteam: -achievementId=ACH_WIN_ONE_GAME;
```

## Example

```webgal
; Unlock achievement
callSteam: -achievementId=ACH_WIN_ONE_GAME;
```
