# Animation effect

## Set animation for background or sprite

Use statement `setAnimation:animation name -target=target object;`

**Example:**

``` ws
; // Set an animation of entering from the bottom for the middle sprite, and go to the next sentence.
setAnimation:enter-from-bottom -target=fig-center -next;
```

Currently, the preset animations are:

| Animation effect          | Animation name      | Duration (ms) |
| :------------------------ | :------------------ | :------------ |
| Fade in                   | enter               | 300           |
| Fade out                  | exit                | 300           |
| Shake left and right once | shake               | 1000          |
| Enter from bottom         | enter-from-bottom   | 500           |
| Enter from right          | enter-from-right    | 500           |
| Enter from left           | enter-from-left     | 500           |
| Move front and back once  | move-front-and-back | 1000          |

Currently, the animation target objects are:

| target     | Actual target    |
| :--------- | :--------------- |
| fig-left   | Left sprite      |
| fig-center | Middle sprite    |
| fig-right  | Right sprite     |
| bg-main    | Background       |
|            | A sprite with id |

## Custom animation

### Create animation

Animation files are in `game/animation`. You can create your own custom animations.

The animation file uses JSON to describe. You can refer to the JSON syntax in the [reference document](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

Each animation file represents an **animation sequence**, described using a JSON array. Here is a sample describing an animation entering from the left:

**Example: `enter-from-left.json`**

``` json
[
  {
    "alpha": 0, 
    "scale": {
      "x": 1,
      "y": 1
    },
    "pivot": {
      "x": 0.5,
      "y": 0.5
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
    "pivot": {
      "x": 0.5,
      "y": 0.5
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

The meaning of each attribute is:

| Attribute | Meaning                                                |
| :-------- | :----------------------------------------------------- |
| alpha     | Transparency, range 0-1                                |
| scale     | Scale                                                  |
| pivot     | Anchor point                                           |
| position  | Position offset                                        |
| rotation  | Rotation angle, unit is radian                         |
| blur      | Gaussian blur radius                                   |
| duration  | Duration of this time slice, unit is milliseconds (ms) |

Then, you need to add the file name of your custom animation (without the extension) in the `animationTable`

In file `animationTable.json`:

```json
["enter-from-left","enter-from-bottom","enter-from-right"]
```

Then, you can call it in the script:

``` ws
setAnimation:enter-from-left -target=fig-left -next; 
```

### Omit some attributes

If your animation only needs to operate some attributes, you can leave other attributes that do not participate in the animation empty to keep them default:

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

### Use transforms

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
