# pixiPerform

添加舞台特效。使用舞台特效前，需要先使用 `pixiInit` 命令进行初始化。

## 语句内容

填写舞台特效名称，将播放对应名称的舞台特效。
详情请见[特效](../../webgal-script/special-effect.md)。

目前可用的舞台特效有：
- `cherryBlossoms`：樱花飘落
- `rain`：下雨
- `snow`：下雪
- `heavySnow`：下大雪

```webgal
pixiInit; 初始化舞台特效
pixiPerform:rain;
说话者:下雨了。;
pixiInit; 清除所有舞台特效
说话者:雨停了。;
```

您可以叠加使用两种不同的舞台特效。

```webgal
pixiInit;
pixiPerform:rain;
pixiPerform:snow;
说话者:雨雪纷飞。;
```
