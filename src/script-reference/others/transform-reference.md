# 变换效果参考

`transform` 是舞台对象的变换效果属性，包含位置、旋转、缩放与各种滤镜属性。其格式如下面例子所示：

```json
{"position":{"x":0,"y":0},"rotation":0,"scale":{"x":1,"y":1},"alpha":1,"blur":0,"colorRed":255,"colorGreen":255,"colorBlue":255}
```

通常不需要完整书写所有的属性，您可以只写入需要修改的属性，未修改的属性将根据具体情况，继承现有值或者使用默认值。
```webgal
setTransform:{"position":{"x":100},"rotation":45} -target=aaa -duration=500;
; 此句会继承已有的变换效果，并在此基础上修改了模糊滤镜的值
setTransform:{"blur":20} -target=aaa -duration=500;
; 此句会将除了 saturation 以外的所有属性都重置为默认值
setTransform:{"saturation":0} -target=aaa -duration=500 -writeDefault;
```

对于滤镜属性，仅当该滤镜的所有值都为默认值时，该滤镜才会彻底关闭。否则该滤镜会持续存在，直至该对象退场，这可能会导致一些不必要的性能消耗，因此推荐开发者在必要时，显式修改相关属性为默认值以关闭滤镜。
```webgal
changeBg:bg.png -transform={"brightness":0.5,"blur":10} -next;
changeFigure:1/open_eyes.png -id=aaa;
;
; 启用颜色调整、倒角、泛光滤镜，并调整参数
setTempAnimation:[{"bloomBlur":20,"bloomThreshold":0.8,"duration":0},{"brightness":0.5,"bevel":1,"bevelThickness":20,"bevelRotation":45,"bloom":1,"bloomBlur":20,"bloomThreshold":0.8,"duration":500}] -target=aaa;
; 关掉部分泛光效果，但由于 bloomBlur bloomThreshold 未设置到默认值，泛光滤镜仍然会存在
setTransform:{"bloom":0} -target=aaa -duration=500;
; 泛光滤镜的所有参数被设置到默认值，泛光滤镜被关闭
setTransform:{"bloomBlur":0,"bloomThreshold":0} -target=aaa -duration=500;
```

目前滤镜以如下顺序应用到图像上
- 反射滤镜
- 径向渐变透明滤镜
- 冲击波滤镜
- 模糊滤镜
- RGB 分离滤镜
- 点状滤镜
- 故障滤镜
- 老电影滤镜
- 泛光滤镜
- 光辉滤镜
- 倒角滤镜
- 颜色调整滤镜
- 原始图像

## 基础变换

### position
- 默认值：`{"x":0,"y":0}`
- 单位：画布像素

位置。修改其 x 和 y 属性可以改变对象在舞台中的坐标。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"position":{"x":500,"y":-50}};
setTransform:{"position":{"x":-200,"y":50}} -target=aaa -duration=500;
```

### rotation
- 默认值：0
- 单位：弧度

旋转。改变对象的旋转弧度，以顺时针为正方向。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"rotation":-3.14};
setTransform:{"rotation":1.57} -target=aaa -duration=500;
```

### scale
- 默认值：`{"x":1,"y":1}`

缩放。修改其 x 和 y 属性可以改变对象的缩放比例。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"scale":{"x":0.5,"y":0.5}};
setTransform:{"scale":{"x":2,"y":2}} -target=aaa -duration=500;
```

## 基础效果

### alpha
- 默认值：1
- 范围：0 到 1 (完全透明 -> 完全不透明)

透明度。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"alpha":0.8};
setTransform:{"alpha":0.2} -target=aaa -duration=500;
```

### blur
- 默认值：0
- 范围：0 到正无穷
- 单位：画布像素

模糊。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"blur":10};
setTransform:{"blur":30} -target=aaa -duration=500;
```

## 颜色调整滤镜

### brightness
- 默认值：1

亮度。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"brightness":0.3};
setTransform:{"brightness":1.5} -target=aaa -duration=500;
```

### contrast
- 默认值：1

对比度。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"contrast":0.3};
setTransform:{"contrast":2} -target=aaa -duration=500;
```

### saturation
- 默认值：1

饱和度。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"saturation":0.3};
setTransform:{"saturation":2} -target=aaa -duration=500;
```

### gamma
- 默认值：1

伽马值。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"gamma":0.5};
setTransform:{"gamma":1.2} -target=aaa -duration=500;
```

### colorRed
- 默认值：255
- 范围：0 到 255

色调的红色分量。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"colorRed":128};
setTransform:{"colorRed":64} -target=aaa -duration=500;
```

### colorGreen
- 默认值：255
- 范围：0 到 255

色调的绿色分量。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"colorGreen":128};
setTransform:{"colorGreen":64} -target=aaa -duration=500;
```

### colorBlue
- 默认值：255
- 范围：0 到 255

色调的蓝色分量。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"colorBlue":128};
setTransform:{"colorBlue":64} -target=aaa -duration=500;
```

## 泛光滤镜

### bloom
- 默认值：0
- 范围：0 到正无穷

泛光的强度。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"bloom":0.5,"bloomBlur":10};
setTransform:{"bloom":1,"bloomBlur":10} -target=aaa -duration=500;
```

### bloomBrightness
- 默认值：1

泛光的亮度。与颜色调整滤镜的 `brightness` 的区别在于，此参数不会影响泛光叠加层的亮度。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"bloom":1,"bloomBrightness":0.5,"bloomBlur":10};
setTransform:{"bloom":1,"bloomBrightness":1,"bloomBlur":10} -target=aaa -duration=500;
```

### bloomBlur
- 默认值：0
- 范围：0 到正无穷
- 单位：画布像素

泛光的模糊程度。若 `bloom` 和 `bloomBrightness` 均为默认值，单独调整此属性不会有任何视觉上的区别。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"bloom":1,"bloomBlur":0};
setTransform:{"bloom":1,"bloomBlur":30} -target=aaa -duration=500;
```

### bloomThreshold
- 默认值：0
- 范围：0 到 1 (全泛光 => 最亮的部分泛光)

泛光的阈值。当数值调高时，仅图像中较亮的部分会产生泛光效果。若 `bloom` 和 `bloomBrightness` 均为默认值，单独调整此属性不会有任何视觉上的区别。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"bloom":1,"bloomBlur":10,"bloomThreshold":0};
setTransform:{"bloom":1,"bloomBlur":10,"bloomThreshold":0.8} -target=aaa -duration=500;
```

## 倒角滤镜

### bevel
- 默认值：0
- 范围：0 到 1 (完全透明 => 完全不透明)

倒角的透明度。如果 `bevelThickness` 为 0，单独调整此属性不会有任何视觉上的区别。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"bevel":0.5,"bevelThickness":20};
setTransform:{"bevel":1,"bevelThickness":20} -target=aaa -duration=500;
```

### bevelThickness
- 默认值：0
- 范围：0 到正无穷
- 单位：画布像素

倒角的厚度。如果 `bevel` 为 0，单独调整此属性不会有任何视觉上的区别。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"bevel":1,"bevelThickness":20};
setTransform:{"bevel":1,"bevelThickness":30} -target=aaa -duration=500;
```

### bevelRed
- 默认值：255
- 范围：0 到 255

倒角颜色的红色分量。如果 `bevel` 或 `bevelThickness` 为默认值，单独调整此属性不会有任何视觉上的区别。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"bevel":1,"bevelThickness":20,"bevelRed":128};
setTransform:{"bevel":1,"bevelThickness":20,"bevelRed":64} -target=aaa -duration=500;
```

### bevelGreen
- 默认值：255
- 范围：0 到 255。

倒角颜色的绿色分量。如果 `bevel` 或 `bevelThickness` 为默认值，单独调整此属性不会有任何视觉上的区别。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"bevel":1,"bevelThickness":20,"bevelGreen":128};
setTransform:{"bevel":1,"bevelThickness":20,"bevelGreen":64} -target=aaa -duration=500;
```

### bevelBlue
- 默认值：255
- 范围：0 到 255

倒角颜色的蓝色分量。如果 `bevel` 或 `bevelThickness` 为默认值，单独调整此属性不会有任何视觉上的区别。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"bevel":1,"bevelThickness":20,"bevelBlue":128};
setTransform:{"bevel":1,"bevelThickness":20,"bevelBlue":64} -target=aaa -duration=500;
```

## 其他滤镜

### oldFilm
- 默认值：0
- 范围：0 到 1 (关闭 => 开启)

老电影滤镜的开关。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"oldFilm":1};
setTransform:{"oldFilm":0} -target=aaa -duration=500;
```

### dotFilm
- 默认值：0
- 范围：0 到 1 (关闭 => 开启)

点状滤镜的开关。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"dotFilm":1};
setTransform:{"dotFilm":0} -target=aaa -duration=500;
```

### rgbFilm
- 默认值：0
- 范围：0 到 1 (关闭 => 开启)

RGB 分离滤镜的开关。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"rgbFilm":1};
setTransform:{"rgbFilm":0} -target=aaa -duration=500;
```

### glitchFilm
- 默认值：0
- 范围：0 到 1 (关闭 => 开启)

故障滤镜的开关。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"glitchFilm":1};
setTransform:{"glitchFilm":0} -target=aaa -duration=500;
```

### godrayFilm
- 默认值：0
- 范围：0 到 1 (关闭 => 开启)

光辉滤镜的开关。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"godrayFilm":1};
setTransform:{"godrayFilm":0} -target=aaa -duration=500;
```

### reflectionFilm
- 默认值：0
- 范围：0 到 1 (关闭 => 开启)

反射滤镜的开关。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"reflectionFilm":1};
setTransform:{"reflectionFilm":0} -target=aaa -duration=500;
```

### shockwave
- 默认值：0

冲击波的相位。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"shockwave":0};
setTransform:{"shockwave":1} -target=aaa -duration=500;
```

### radiusAlpha
- 默认值：0

径向渐变透明的半径。

```webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"radiusAlpha":0.2};
setTransform:{"radiusAlpha":1.5} -target=aaa -duration=500;
```
