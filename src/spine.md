# 关于 Spine

根据以下 Spine Runtime 集成协议，如果你在 WebGAL 中集成了 Spine Runtime，你需要获得 Spine 编辑器的许可证。

https://esotericsoftware.com/spine-runtimes-license#spine-runtimes

```
Spine Runtimes License Agreement
Last updated February 20, 2024. Replaces all prior versions.

Copyright (c) 2013-2024, Esoteric Software LLC

Integration of the Spine Runtimes into software or otherwise creating derivative works of the Spine Runtimes is permitted under the terms and conditions of Section 2 of the Spine Editor License Agreement:
http://esotericsoftware.com/spine-editor-license

Otherwise, it is permitted to integrate the Spine Runtimes into software or otherwise create derivative works of the Spine Runtimes (collectively, "Products"), provided that each user of the Products must obtain their own Spine Editor license and redistribution of the Products in any form must include this license and copyright notice.

THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

**因此，WebGAL 移除了项目中的 `pixi-spine` 包，以避免影响不需要使用 Spine 功能的用户。** 如果你想要使用 Spine，请参考以下步骤：

:::info
注意：以下步骤都需要基于 WebGAL 源代码操作，你可以在 GitHub 找到 WebGAL 的源代码。

[WebGAL 源代码](https://github.com/OpenWebGAL/WebGAL)
:::

1、获得 Spine 编辑器的授权 [http://esotericsoftware.com/](http://esotericsoftware.com/)

2、在 `package/webgal` 包中使用 yarn 安装 pixi-spine

```
cd package/webgal
yarn add pixi-spine@3.1.2
```

3、导航到以下文件： `packages/webgal/src/Core/controller/stage/pixi/spine.ts`

注意到以下被注释的行（大约从 30 行开始），取消注释即可。

```
  // pixiSpineLoading = import('pixi-spine')
  //   .then((module) => {
  //     spineLoader = new PIXI.Loader();
  //     pixiSpineModule = module;
  //     return module;
  //   })
  //   .catch((error) => {
  //     console.error('Failed to load pixi-spine. Spine features will be disabled.', error);
  //     return null;
  //   })
  //   .finally(() => {
  //     pixiSpineLoading = null;
  //   });
```

4、在项目根目录运行以下脚本以调试 WebGAL

`yarn dev`

5、现在开始你可以使用 Spine 作为立绘了。你需要将整个模型的目录放入 `game/figure` 目录中，调用立绘的方法是调用立绘的 json 文件。

例如：
```
game/
  figure/
    exampleSpine/
      data.json
      atlas.atlas
      skeleton.skel
```

如果你使用的是 JSON 格式的 Spine 立绘，你需要使用类似以下脚本的方式传入类型，以使引擎识别其类型为 Spine。

```
changeFigure:exampleSpine/data.json?type=spine;
```

6、如果你需要构建生产包，或在 WebGAL Terre 中使用，请运行 `yarn build` 指令构建 WebGAL。完成后，请参考 [如何使用定制引擎](derivative) 使用修改后的引擎。

### 重要提示

根据 Spine Runtime 集成协议，**每个使用 Spine 功能的用户必须拥有 Spine 编辑器的有效许可证**。请确保你已经获得了相应的授权，以合法地使用 Spine 功能。

### 免责声明

请您务必仔细阅读并理解以下内容：

在您使用集成了 Spine 功能的 WebGAL 版本之前，您必须确保已经获得了 Spine 编辑器的合法授权许可证。Spine 作为一个第三方软件，其运行时组件受 Spine 编辑器的许可证协议约束。根据该协议，任何使用集成了 Spine Runtime 的软件的行为，均需要您自行获得 Spine 编辑器的合法许可证。

如果您在未获得 Spine 编辑器许可证的情况下，私自集成或使用了集成了 Spine Runtime 的 WebGAL，所有因此产生的法律责任、经济损失、声誉损害及其他任何形式的后果，均由您个人或您的组织全权承担。WebGAL 项目团队对此不承担任何责任。我们不提供 Spine 许可证，也不参与任何许可证的获取或分发过程。WebGAL 仅作为技术平台，支持与 Spine 的集成，但不对您的使用行为进行监管或负责。

在未经授权的情况下使用 Spine Runtime，将被视为侵权行为，可能导致第三方对您提起法律诉讼，要求赔偿损失。您同意，若因您违反 Spine 编辑器的许可证协议而引发的任何法律纠纷或经济赔偿请求，均由您自行解决，并且您将全额赔偿 WebGAL 项目团队及其关联方因您的行为而产生的任何损失，包括但不限于法律费用、赔偿金及其他相关费用。

此外，WebGAL 项目团队明确声明，对您在集成或使用 Spine 功能过程中所遭受的任何直接或间接损害、不便或损失，不承担任何责任。无论是因技术故障、软件错误、未经授权的使用，还是因您未能遵守许可证协议而导致的任何后果，WebGAL 均不负任何责任。您对使用集成了 Spine 的 WebGAL 版本所带来的所有风险和责任，必须完全自负。

总而言之，如果您选择在 WebGAL 中集成或使用 Spine 功能，您必须确保已经合法获得了 Spine 编辑器的授权许可证，并且承诺遵守所有相关的许可证条款与规定。否则，所有由此产生的风险、责任及后果，均由您个人或您的组织承担，与 WebGAL 项目团队无关。

使用本软件即表示您已阅读、理解并同意以上免责声明的全部内容。如果您不同意这些条款，请立即停止使用集成了 Spine 功能的 WebGAL 版本。