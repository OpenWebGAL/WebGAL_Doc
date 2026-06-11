# 模板配置文件 {#config}

位于 `您的游戏名称目录/game/template/template.json` 的模板配置文件是一个 JSON 格式的文件，用于定义游戏中使用的模板的相关信息和配置项。

## 模板配置项 {#config-item}

``` json
{
  "name": "My New Template",
  "id": "my-new-template",
  "webgal-version": "4.6.0",
  "fonts": [
    {
      "font-family": "某圆体",
      "url": "assets/fonts/some_font.ttf",
      "type": "truetype",
      "weight": "normal",
      "style": "normal",
      "display": "auto"
    }
  ],
}
```

### name

- 字符串

模板的名称。目前仅编辑器使用。

### id

- 字符串

模板的唯一标识符。目前仅编辑器使用。不同模板的 id 不能相同，否则会导致编辑器无法正确识别和加载模板。

### webgal-version

- 字符串

模板适配的 WebGal 引擎版本。必须符合语义化版本规范（SemVer），例如 "4.6.0"。

如果模板不适配当前使用的 WebGal 引擎版本，可能会导致模板无法正常工作或出现兼容性问题。

### fonts

- 数组

模板使用的字体列表。每个字体对象包含以下属性：

- font-family: 字体名称，字符串类型。以该名称显示在设置界面中，供玩家选择使用。
- url: 字体文件的 URL，字符串类型。以 `您的游戏名称目录/game/template/` 为根目录。
- type: 字体类型，字符串类型。可选值包括

  - "truetype"：TrueType 字体文件，通常以 .ttf 结尾。
  - "opentype"：OpenType 字体文件，通常以 .otf 结尾。
  - "woff"：Web Open Font Format 字体文件，通常以 .woff 结尾。
  - "woff2"：Web Open Font Format 2 字体文件，通常以 .woff2 结尾。
  - "embedded-opentype"：Embedded OpenType 字体文件，通常以 .eot 结尾。
  - "svg"：SVG 字体文件，通常以 .svg 结尾。
  - "collection"：字体集合文件，通常以 .ttc 结尾。

- weight: 字体粗细，字符串类型。可选值为 "normal"、"bold" 等，详情请参考[font-weight](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@font-face/font-weight)。
- style: 字体样式，字符串类型。可选值为 "normal"、"italic" 等，详情请参考[font-style](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@font-face/font-style)。
- display: 字体显示策略，字符串类型。可选值为 "auto"、"block"、"swap"、"fallback"、"optional"，详情请参考[font-display](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@font-face/font-display)。
