# 开发自定义界面插件（create-webgal-ui）

::: warning 4.7.0 Preview
`create-webgal-ui` 工具和自定义界面插件属于 **4.7.0-preview.0（Preview）** 的预览功能，正式版发布前接口或配置可能会略有改动。
:::

如果你觉得只改 CSS 样式还不够，想自己写一套全新的标题页、存读档画面或文本框，可以用官方提供的 `create-webgal-ui` 脚手架生成一个界面插件项目。写完之后打成 `.zip` 包，就能直接导入到 WebGAL Terre 的模板编辑器里使用，也可以分享给其他人。

## 准备工作

开始前请确保电脑上安装了 **Node.js 18 或更高版本**。

## 创建项目

::: tip
目前处于 `4.7.0-preview.0` 预览阶段，`create-webgal-ui` 只挂在 npm 的 `preview` 标签下，所以命令里需要带上 `@preview`。等 4.7.0 正式版发布后，不用加 `@preview` 也能直接运行。
:::

打开终端，用你习惯的包管理器运行下面任意一条命令就行：

```bash
# npm
npm create webgal-ui@preview my-screen -- --screen title --variant my-title

# yarn
yarn create webgal-ui@preview my-screen -- --screen title --variant my-title

# pnpm
pnpm create webgal-ui@preview my-screen -- --screen title --variant my-title

# npx
npx create-webgal-ui@preview my-screen -- --screen title --variant my-title
```

可用的参数有这几个：

| 参数 | 说明 | 默认值 |
| :--- | :--- | :--- |
| `[目录名]` | 要新建的文件夹名称，同时作为项目名 | `my-webgal-screen` |
| `--screen <screenId>` | 你要定制哪一个游戏界面 | `title` |
| `--variant <variantId>` | 给这个界面风格起一个代号（同一界面下不要重名） | `custom-<screen>` |

`--screen` 可以填这 12 个界面代号：`title`、`textbox`、`choose`、`save`、`load`、`options`、`flowchart`、`menuPanel`、`backlog`、`extra`、`bottomControlPanel`、`globalDialog`。

## 目录结构

生成出来的项目文件不多，主要包含下面这些：

```text
my-screen/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── webgal-screen.json        # 界面信息和可编辑部件的声明
├── scripts/
│   └── export-screen.mjs     # 检查 React 版本并打包成 zip 的脚本
└── src/
    ├── index.tsx             # 你的界面组件代码
    ├── style.scss            # 默认样式（导进编辑器后也能继续可视化修改）
    └── types/
        └── webgal-ui-sdk.d.ts # 每个界面能收到的 Props 和 SDK 类型
```

`webgal-screen.json` 用来告诉 WebGAL 和编辑器这个插件对应哪个界面，以及界面里哪些部分需要放到编辑器的左边栏里让用户调样式：

```json
{
  "screen": "title",
  "variantId": "my-title",
  "name": "Custom Title Screen",
  "version": "0.1.0",
  "entry": "index.js",
  "style": "style.scss",
  "parts": [
    {
      "id": "background",
      "name": "背景层",
      "selector": ".custom-title-bg",
      "allowLayoutEdit": false
    },
    {
      "id": "menu",
      "name": "标题按钮栏",
      "selector": ".custom-title-menu",
      "allowLayoutEdit": true
    }
  ]
}
```

其中，外层面板、按钮栏这类可以让人自由挪动的东西可以设 `"allowLayoutEdit": true`，这样在画布上就能直接拖来拖去；而像全屏背景、列表里重复出现的一行行卡片，通常建议设 `"allowLayoutEdit": false`，只让用户在右边栏改颜色、字体和边框。

## 打包与导入

进入新建的文件夹，先装好依赖，再检查类型并打包导出：

```bash
cd my-screen
npm install
npm run typecheck
npm run export
```

其中几个命令的作用分别是：

- `npm run typecheck`：检查 TypeScript 代码有没有写错类型；
- `npm run build`：只编译出单文件产物 `dist/index.js`；
- `npm run export`：先检查 React 版本是否符合要求，再编译，最后把 `index.js`、`webgal-screen.json`、`style.scss` 和 `src/assets/`（如果有的话）一起打进 `dist-export/<screen>-<variantId>.zip`。

打开 **WebGAL Terre**，新建或打开一个**自定义模板**（内置模板不能改），在左边栏对应界面的菜单里点「导入自定义界面」，选刚才打出来的 `.zip` 文件就能立刻看到效果，之后也可以直接在编辑器右边栏继续微调 `style.scss`。

::: note
除了点击导入按钮，你也可以把 `dist/index.js`、`webgal-screen.json`、`src/style.scss` 和 `src/assets/` 直接复制到模板目录的 `screens/<screen>/<variantId>/` 里，再把 `template.json` 里的 `screens.<screen>` 改成 `<variantId>`。
:::

## 编写界面代码

每个界面组件可以收到哪些数据（Props），都可以直接在 `src/types/webgal-ui-sdk.d.ts` 里查到。入口文件 `src/index.tsx` 一般写成这样：

```tsx
import { useScreenParts, resolveAssetUrl } from '@webgal/ui-sdk';
import type { ScreenPartDefinition, TitleScreenProps } from './types/webgal-ui-sdk';
import defaultCssText from './style.scss?inline';

export const variantId = 'my-title';
export const name = 'My Title Screen';

export const parts: ScreenPartDefinition[] = [
  { id: 'menu', name: '标题按钮栏', selector: '.custom-title-menu', allowLayoutEdit: true },
];

export { defaultCssText };

export default function MyTitleScreen(props: TitleScreenProps) {
  const { rootProps } = useScreenParts('title', parts, defaultCssText);
  if (!props.visible) return null;

  return (
    <div {...rootProps}>
      {/* 在这里写你自己的 JSX */}
    </div>
  );
}
```

写代码时有几件需要特别注意的事：

1. **按 `2560 × 1440 px` 的大小排版**  
   WebGAL 的舞台和界面都在 `2560 × 1440` 的画布里运行，所以写样式直接用 `px` 就好，不要用 `vw` 或 `vh`。
2. **不要自己在 `dependencies` 里装 React**  
   游戏运行的时候，引擎会把自己的 React 18 共享给界面插件，模板里的 `vite.config.ts` 也已经帮你配好了对齐规则。注意别把 `react` 或 `react-dom` 写进 `package.json` 的 `dependencies`，并且保持 `peerDependencies` 和 `devDependencies` 里是 `18.x`（如果改成别的大版本，运行 `npm run export` 时会被拦下来）。
3. **样式和图片路径的写法**  
   把 `useScreenParts(screen, parts, defaultCssText)` 返回的 `{...rootProps}` 展开到最外层的元素上，这样写出来的样式就不会影响别的界面，编辑器里也能正常选中部件和热更新。`src/style.scss` 里的图片直接写 `./assets/bg.png` 这样的相对路径就行；如果在 TSX 代码里要拼图片路径，记得包一层 `resolveAssetUrl('./assets/icon.png')`（或者 `resolveScreenAssetUrl`）。
4. **菜单类界面底部留出 `144px` 边距**  
   制作 `save`、`load`、`options`、`flowchart`、`extra` 这类界面时，屏幕最下面会浮一层 `menuPanel` 菜单条。页面主体记得留出底部边距（建议 `padding-bottom: 144px;`），免得按钮或页码被挡住。
5. **可以直接用内置的 SDK 工具和图标**  
   `@webgal/ui-sdk` 里已经提供了富文本解析函数（`parseRichTextLines`、`renderRichText`、`renderRichTextLines`）和常用图标；直接 `import` `@icon-park/react` 里的图标也会复用引擎自带的资源，不会白白增大你的压缩包体积。
