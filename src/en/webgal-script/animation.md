# Animation Effects

## Setting Animations for Backgrounds or Sprites

Use the statement `setAnimation:animation name -target=target;`

**Example:**

``` ws
; // Set an animation for the center sprite to enter from the bottom, and proceed to the next line
setAnimation:enter-from-bottom -target=fig-center -next;
```

Currently, the following preset animations are available:

| Animation Effect      | Animation Name              | Duration (ms) |
| :------------ | :----------------- | :------------- |
| Fade In          | enter              | 300            |
| Fade Out          | exit               | 300            |
| Shake Once          | shake               | 1000           |
| Enter from Bottom    | enter-from-bottom   | 500            |
| Enter from Left    | enter-from-right    | 500            |
| Enter from Right    | enter-from-right    | 500            |
| Move Front and Back Once  | move-front-and-back | 1000           |

Currently, the following animation targets are available:

| target     | Actual Target       |
| :--------- | :------------ |
| fig-left   | Left Sprite         |
| fig-center | Center Sprite       |
| fig-right  | Right Sprite       |
| bg-main    | Background           |
| id | A Sprite with the ID |

## Custom Animations

### Creating Animations

Animation files are located in `game/animation`, and you can create your own custom animations.

Animation files are described using JSON. You can refer to the JSON syntax in the [reference documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

Each animation file represents an **animation sequence**, described using a JSON array. Here is an example that describes an animation for entering from the left:

**Example: `enter-from-left.json`**

``` json
[
  {
    "alpha": 0,
    "scale": {
      "x": 1,
      "y": 1
    },
    "position": {
      "x": -50,
      "y": 0
    },
    "rotation": 0,
    "blur": 5,
    "duration": 0
  },
  {
    "alpha": 1,
    "scale": {
      "x": 1,
      "y": 1
    },
    "position": {
      "x": 0,
      "y": 0
    },
    "rotation": 0,
    "blur": 0,
    "duration": 500
  }
]

```

The following table explains each property:

| Property Name   | Explanation                                |
| :------- | :--------------------------------- |
| alpha    | Transparency, range 0-1                     |
| scale    | Scale                               |
| position | Position offset                           |
| rotation | Rotation angle, in radians                |
| blur     | Gaussian blur radius                        |
| brightness  | Amount of brightness                        |
| contrast    | Amount of contrast                       |
| saturation  | Amount of saturation                     |
| gamma       | Amount of gamma                      |
| colorRed    | Amount of red color, range 0-255          |
| colorGreen  | Amount of green color, range 0-255          |
| colorBlue   | Amount of blue color, range 0-255          |
| duration | Duration of this time slice, in milliseconds (ms) |
| oldFilm         | Old film effect, 0 to disable, 1 to enable       |
| dotFilm         | Dot film effect, 0 to disable, 1 to enable     |
| reflectionFilm  | Reflection film effect, 0 to disable, 1 to enable     |
| glitchFilm      | Glitch film effect, 0 to disable, 1 to enable     |
| rgbFilm         | RGB film effect, 0 to disable, 1 to enable      |
| godrayFilm      | Godray effect, 0 to disable, 1 to enable         |

Then, you need to add the filename of your custom animation (without the extension) in `animationTable`.

In the file `animationTable.json`:

``` json
["enter-from-left","enter-from-bottom","enter-from-right"]
```

Then, you can call it in the script:

``` ws
setAnimation:enter-from-left -target=fig-left -next;
```

### Omitting Some Properties

If your animation only needs to manipulate some properties, you can leave the other properties that are not involved in the animation empty to keep them as default.

**Example: `enter.json`**

``` json
[
  {
    "alpha": 0,
    "duration": 0
  },
  {
    "alpha": 1,
    "duration": 300
  }
]

```

### Using Transforms

An animation with a duration of 0 milliseconds and only one time slice is a transform.

**Example:**

``` json
[
  {
    "alpha": 0,
    "duration": 0
  }
]
```

## Setting Entrance and Exit Effects

You can also override WebGAL's default fade-in and fade-out entrance and exit effects with your own animation effects. For example:

```
setTransition: -target=fig-center -enter=enter-from-bottom -exit=exit;
```

Note: You can only set entrance and exit effects for a sprite or background after it has been set. The code for setting entrance and exit effects should be written **after** the code for setting the sprite or background. Also, the statement for setting entrance and exit effects must be **immediately executed** after the statement for setting the sprite or background; otherwise, it will not be applied correctly.

::: tip
Why do we need to do this?

When setting a sprite or background, an entrance and exit animation will be set for it by default. After setting the sprite or background, the sprite or background will not be immediately displayed on the stage, but will wait for the entrance and exit effects to be set.

If you execute the statement for setting entrance and exit effects immediately after setting the sprite or background, you can override the default entrance and exit animations, thus achieving custom entrance and exit effects. If you do not set them, the default animations will be executed when entering or exiting.

If you do not execute the statement for setting entrance and exit effects immediately after setting the sprite or background, it will be meaningless to override the entrance animation after the image has already entered. However, if the image has not yet entered at this time, the set entrance animation will still be meaningful. It will be applied correctly when the sprite or background enters.
:::