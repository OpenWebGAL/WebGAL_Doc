# Technical Introduction to WebGAL

## Scene System and Preloading

### Getting Scenes

Scenes in WebGAL are file-based, usually WebGAL script files with the `.txt` extension. Like many programming languages have a `main` function as the entry point, the entry scene for WebGAL is `start.txt`. WebGAL will first try to get `start.txt`, then use the WebGAL parser to parse the script file into a scene object that the WebGAL engine can execute. In any scene, you can switch or "call" scenes using `choose`, `changeScene`, `callScene` and so on. Switching scenes will directly replace the current scene, while "calling" a scene will push a new scene onto the scene call stack to start executing, and return to the parent scene after execution.

### Preloading Resources in Scenes

While WebGAL is parsing the scene, the resources contained in the scene will also be parsed out. For each scene file, WebGAL will take all the resources it contains, including images, audio and video files. These files will start preloading after the scene is fully parsed, in order to minimize the possibility of users having to wait for resources to load during the game flow as much as possible. At the same time, to make the game switch between scenes more smoothly, WebGAL will also load resources from scene files referenced by the current scene file. To prevent waste of resources, WebGAL will only expand one layer of scenes for preloading.

## WebGAL Parser

### Statement Parsing I - Splitting Scenes

WebGAL scene files are mainly separated by lines to distinguish between scripts. At the beginning of parsing, the WebGAL parser will split the script according to newlines. If there are semicolons, the characters before the semicolon will be taken. So the commenting style in WebGAL scripts is to write the script after semicolons.

### Statement Parsing II - Parsing Script Types 

WebGAL scripts generally take the form:

```
command:content -arg1 -arg2 ......;comment
```

Where `command` represents the statement directive, such as `bgm`, `changeFigure`, `choose` etc, used to indicate the control action corresponding to the statement. `content` represents the main content of the statement, for example `bgm:Teabreak.mp3` means playing an audio file as bgm.

### Statement Parsing III - Special Handling of Dialogue

Dialogue in WebGAL is generally written in the following form:

```
Character: Dialogue content -voice_1.ogg;
```

For visual novels, since dialogues are usually the main part of the script, WebGAL designed a syntax sugar. If the `command` part of a script cannot be parsed as any directive, then WebGAL will treat it as a dialogue. The voice can also be abbreviated to just the filename. The dialogue above will actually be parsed into a `say` directive in the end.

So the actual representation of this dialogue should be:

```
say:Dialogue content -speaker=Character vocal=voice_1.ogg;
```

In addition, if the dialogue is spoken by one character, the character name can be omitted before the speaker changes:

```
Character: Dialogue 1;
Dialogue 2; 
Dialogue 3;
```

The special handling of dialogues greatly improves script writing efficiency.

### Statement Parsing IV - Parsing Parameters

Anything separated by `-` after `content` is an additional parameter. Note in particular that the hyphen `-` before the additional parameters needs to have a space, otherwise WebGAL may not recognize it as a parameter but a normal hyphen.

Parameters in WebGAL are represented as `-key=value`, where `key` is of `string` type, and `value` can be dynamically determined, and can exist in three possible types: `string`, `number`, `boolean`.

For example, `-key=s` has a `string` `value`; `-key=1` has a `number` `value`, and `-key=true` or `-key=false` has a `boolean` `value`.

Parameters with only `key` and omitting `value` will be parsed as `-key=true`, which is a shorthand syntax sugar. This syntax sugar is very important because WebGAL has an important parameter `-next` to indicate that the next statement should be executed immediately after the current statement is finished. Without the shorthand, `-next=true` would need to be written every time.

### Statement Parsing V - Resource Handling and Preloading

The resources required by statements can be obtained during statement parsing. For example, `bgm` statements generally need audio resources, `playVideo` statements generally need video resources, and `changeBg` statements generally need image resources. The WebGAL scene parser will merge all the resources required by statements in the scenes, to hand over to the preloader for preloading resources. At the same time, when encountering situations that require calling subscenes such as `changeScene`, `choose`, `callScene`, etc., the subscenes will also be scanned out, parsed and their resources preloaded.

## Flow Control System 

### Preparation Phase: Before Step Operation

### Formal Phase I: Read Instructions, Execute Conditional Judgments

### Formal Phase II: Invoke, Obtain Perform Controller from Perform Control Module 

### End Phase: Handle Continuous Perform, Update Backlog

### Auto and Fast Forward

## Perform Control 

### WebGAL Perform Types

### Auto Destroy, End Judgment, Blocking Logic of Performs

## Stage Controller and Animation Control

### Data Driven Pixi Stage Controller

### Animation and "Transform" Control

## Save, Load, Rollback and User Data

### Introduction to WebGAL State Table

### Storage and Recovery of Perform States 

### Storage of Save Data and Other User Data

## Appreciation Module, and Some Details

### Appreciation Module

### Maintaining State on Leaving Browser and "Continue Game" 

### Keyboard Shortcuts and Mouse Operations