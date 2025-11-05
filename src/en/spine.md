# About Spine

According to the Spine Runtime Integration Agreement, if you integrate the Spine Runtime into WebGAL, you need to obtain a license for the Spine Editor.

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

**Therefore, WebGAL has removed the `pixi-spine` package from the project to avoid impacting users who do not need to use Spine features.** If you want to use Spine, please refer to the following steps:

:::info
Note: The following steps are based on the WebGAL source code. You can find the WebGAL source code on GitHub.

[WebGAL Source Code](https://github.com/OpenWebGAL/WebGAL)
:::

1. Obtain a Spine Editor license [http://esotericsoftware.com/](http://esotericsoftware.com/)

2. Install `pixi-spine` using yarn in the `package/webgal` directory:

```
cd package/webgal
yarn add pixi-spine@3.1.2
```

3. Navigate to the following file: `packages/webgal/src/Core/controller/stage/pixi/spine.ts`

Uncomment the following commented lines (starting around line 30):

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

4. Run the following script in the project root directory to debug WebGAL:

`yarn dev`

5. Now you can use Spine for character sprites. You need to place the entire model directory into the `game/figure` directory.  The method to call a sprite is to call the sprite's JSON file.

For example:
```
game/
  figure/
    exampleSpine/
      data.json
      atlas.atlas
      skeleton.skel
```

If you are using a JSON format Spine sprite, you need to pass in the type using a script similar to the following, so that the engine recognizes its type as Spine.

```
changeFigure:exampleSpine/data.json?type=spine;
```

6. If you need to build a production package or use it in WebGAL Terre, run the `yarn build` command to build WebGAL. After completion, please refer to [How to use a custom engine](derivative) to use the modified engine.

### Important Notice

According to the Spine Runtime Integration Agreement, **each user using Spine features must have a valid Spine Editor license.** Please ensure you have obtained the appropriate authorization to legally use Spine features.

### Disclaimer

Please carefully read and understand the following:

Before using the WebGAL version integrated with Spine functionality, you must ensure that you have obtained a legally authorized license for the Spine Editor.  Spine, as third-party software, has its runtime components governed by the Spine Editor License Agreement.  According to this agreement, any use of software integrating the Spine Runtime requires you to obtain your own legal license for the Spine Editor.

If you privately integrate or use the WebGAL version integrated with the Spine Runtime without obtaining a Spine Editor license, all resulting legal liabilities, economic losses, reputational damage, and any other consequences shall be borne solely by you or your organization. The WebGAL project team assumes no responsibility for this. We do not provide Spine licenses, nor do we participate in any license acquisition or distribution process. WebGAL only serves as a technical platform, supporting integration with Spine, but does not supervise or take responsibility for your usage.

Unauthorized use of the Spine Runtime will be considered an infringement and may lead to third-party legal action against you for damages. You agree that any legal disputes or economic compensation claims arising from your violation of the Spine Editor License Agreement shall be resolved by you independently, and you will fully compensate the WebGAL project team and its affiliates for any losses incurred due to your actions, including but not limited to legal fees, compensation, and other related expenses.

Furthermore, the WebGAL project team expressly disclaims any responsibility for any direct or indirect damage, inconvenience, or loss you may suffer during the integration or use of Spine functionality. Whether due to technical failures, software errors, unauthorized use, or any consequences resulting from your failure to comply with the license agreement, WebGAL shall not bear any responsibility. You must assume full responsibility for all risks and liabilities associated with using the WebGAL version integrated with Spine.

In summary, if you choose to integrate or use Spine functionality in WebGAL, you must ensure that you have legally obtained a Spine Editor license and commit to complying with all relevant license terms and regulations. Otherwise, all risks, liabilities, and consequences arising therefrom shall be borne by you or your organization and are unrelated to the WebGAL project team.

By using this software, you acknowledge that you have read, understood, and agreed to all contents of the above disclaimer. If you do not agree to these terms, please immediately cease using the WebGAL version integrated with Spine functionality.

## Spine Animation Usage Guide

After completing the above license requirements and technical integration, you can follow the instructions below to use Spine animation functionality in WebGAL.

### File Format

Spine animations typically include the following files:
- `.skel` - Skeleton data file (binary format)
- `.json` - Skeleton data file (JSON format)
- `.atlas` - Texture atlas description file
- `.png` - Texture image files

### Basic Usage

#### Setting Spine Figures

Use the `.skel` file extension or `type=spine` parameter to specify Spine animation:

``` ws
changeFigure:character.skel;
changeFigure:character.json?type=spine;
```

#### Setting Spine Backgrounds

Spine animations can also be used as backgrounds:

``` ws
changeBg:background.skel;
changeBg:background.json?type=spine;
```

#### Figure Position Settings

Spine figures support preset positions, same as regular figures:

``` ws
changeFigure:character.skel -left;
changeFigure:character.skel -right;
changeFigure:character.skel; // Default is center position
```

### Animation Control

#### Switching Actions

You can use the `-motion` parameter to switch Spine animations, just like Live2D:

``` ws
changeFigure:character.skel -motion=idle;
changeFigure:character.skel -motion=walk -left;
```

#### Custom ID Spine Figures

You can specify custom IDs for Spine figures and then use the `-motion` parameter to control animations:

``` ws
changeFigure:character.skel -id=mainCharacter -left;
changeFigure:character.skel -id=mainCharacter -motion=happy;
```

### Animation Behavior

- When Spine animation loads, it automatically plays the first available animation
- If a specific animation is specified in the state, it will be played preferentially
- Spine animations automatically scale to fit the screen

### Usage Examples

``` ws
; Set main character figure
changeFigure:mainCharacter.skel -id=hero -center;

; Play walking animation
changeFigure:hero.skel -motion=walk -id=hero;

; Set side character figure
changeFigure:sidekick.skel -left;

; Set dynamic background
changeBg:forest.skel;
```

### Integration with Other Features

Spine animations can be combined with other WebGAL features:

``` ws
; Combined with voice playback
Character Name:Hello! -V1.ogg -figureId=hero;
changeFigure:character.skel -id=hero -motion=speaking;

; Combined with scene switching
changeFigure:character.skel -id=hero;
changeFigure:character.skel -id=hero -motion=idle;
changeScene:next_scene.txt;
```

### Performance Considerations

1. **Memory Usage**: Spine animations use more memory than static images
2. **Loading Time**: Initial loading may take longer
3. **Compatibility**: Requires browser WebGL support

### Troubleshooting

#### Common Issues

1. **Animation not playing**: Check if animation name matches the name defined in the Spine file
2. **File loading failed**: Ensure `.skel`, `.atlas`, and texture files are in the same directory
3. **Display abnormalities**: Check Spine version compatibility

#### Debug Tips

- Use browser developer tools to check console logs
- Check network panel to confirm all files are loaded correctly
- Verify Spine file export settings are correct

### Important Notes

- Animation names must match the animation names defined in the Spine file
- Figures maintain aspect ratio and scale to fit the screen
- Backgrounds stretch or scale to fill the entire screen
- Please ensure compliance with all Spine license requirements
