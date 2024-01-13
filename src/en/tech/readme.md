# WebGAL Technology Introduction

## Scene System and Preloading

### Scene Acquisition

WebGAL's scenes are file-based, generally WebGAL script files with the suffix `.txt`. Just like many programming languages have a `main` function as the entry, WebGAL's entry scene is `start.txt`. WebGAL will first try to get `start.txt`, and then call the WebGAL parser to parse the script file into a scene object that the WebGAL engine can execute. In any scene, you can use `choose`, `changeScene`, `callScene` and other methods to switch or "call" scenes. Switching scenes directly replaces the current scene, while "calling" scenes pushes a new scene into the scene call stack to start execution, and returns to the parent scene that called the scene after execution.

### Preloading Resources in Scenes

While WebGAL parses the scene, the resources contained in the scene are also parsed. For each scene file, WebGAL will include all the resources it contains, including images, audio, and video files. These files will start preloading after the scene is parsed, to minimize the chance that the user will have to wait for resources to load during gameplay. At the same time, in order to make the game smoother when switching scenes, WebGAL will also load the resources of the scene files referenced by the current scene file. In order to prevent waste of resources, WebGAL will only expand one layer of scenes for preloading.

## WebGAL Parser

### Statement Parsing I Splitting Scenes

WebGAL scene files are mainly divided by lines to distinguish scripts. At the beginning of parsing, the WebGAL parser will split the script according to the newline character. If there is a semicolon, the characters before the semicolon will be taken. Therefore, the way to comment in WebGAL scripts is to write the script after a semicolon.

### Statement Parsing II Script Type Parsing

WebGAL scripts are generally in the form of

```
command:content -arg1 -arg2 ......;comment
```

Among them, `command` represents the statement instruction, such as `bgm`, `changeFigure`, `choose` and other instructions, which are used to indicate the control action corresponding to the statement. `content` represents the main content of the statement, such as `bgm:Teabreak.mp3` which means playing an audio file as bgm.

### Statement Parsing III Special Handling of Dialogues

WebGAL's dialogues are generally written in the following form:

```
森川由绮:胸につかえていることを、时は解决してくれない。忘却のラベルを贴るだけで -voice_1.ogg;
```

For visual novels, since dialogues are generally the main part of the script, WebGAL has designed a syntactic sugar. If any part of the `command` of a script cannot be parsed into any kind of instruction, WebGAL will treat it as a dialogue. And the voice can also be abbreviated with its parameters, just give the file name. The above dialogue will actually be parsed into the `say` instruction.

Therefore, the true representation of this dialogue should be:

```
say:胸につかえていることを、时は解决してくれない。忘却のラベルを贴るだけで -speaker=森川由绮 vocal=voice_1.ogg;
```

In addition, if the dialogue is spoken by one person, the person's name can be omitted before the speaker changes:

```
森川由绮:胸につかえていることを;
时は解决してくれない;
忘却のラベルを贴るだけで;
```

The special handling of dialogues greatly improves the efficiency of script writing.

### Statement Parsing Ⅳ Parameter Parsing

Additional parameters are separated by `-` after `content`. It is important to note that there should be a space before the hyphen `-` of the additional parameter, otherwise WebGAL may think that this is not a parameter but a normal hyphen.

WebGAL's parameters are represented in the form of `-key=value`, where the type of `key` is `string`, and the type of `value` can be dynamically determined and can exist in the following three possible types: `string`, `number`, `boolean`.

For example, the `value` of `-key=s` is `string`; the `value` of `-key=1` is `number`, and the `value` of `-key=true` or `-key=false` is `boolean`.

Among them, parameters that only write out `key` and omit `value` will be parsed into `-key=true`, which is a syntactic sugar. This syntactic sugar is very important, because there is an important parameter `-next` in WebGAL, which is used to indicate that the next statement is executed immediately after the current statement is executed. If the omission indication is not written, `-next=true` needs to be written each time.

### Statement Parsing Ⅴ Resource Processing and Preloading

When parsing statements, you can get the resources required by the statement. For example, the `bgm` statement usually requires audio resources, the `playVideo` statement usually requires video resources, and the `changeBg` statement usually requires image resources. The WebGAL scene parser will merge all the resources required by the statements in all scenes and hand them over to the preloader to preload the resources. At the same time, when encountering situations such as `changeScene`, `choose`, `callScene` that need to call sub-scenes, the sub-scenes will also be scanned, parsed, and the resources in them will be preloaded.

## Flow Control System

### Preparatory Stage: Pre-step Operation

The flow control module obtains an instruction from the scene instruction storage module (this module is a submodule of the scene management module), and performs pre-step operations and checks. Pre-step operations mainly include stopping animations, videos and other visual effects with duration that have not ended in the previous process. This operation is because when the user clicks the mouse or presses the specified shortcut key on the keyboard before the previous process is over, it means that the user may not want to wait until the process ends normally after reaching the duration, but wants to skip this process. At this time, the flow control system will call the corresponding early stop process function (each visual effect needs to provide a function to unload the effect, calling this function will completely unload the effect). The inspection mainly includes checking whether there are visual effects that cannot be skipped and whether the last statement of the current scene has been reached. If there are visual effects that cannot be skipped (some visual effect scripts cannot be skipped due to their particularity, which are set by the article maintenance personnel), the user must wait until the duration is reached before entering the next process. If the last statement of the scene has been reached, the flow control module will check whether the scene call stack is empty. If it is not empty, the element at the top of the stack (a scene object) will be replaced with the scene stored in the current scene storage module, and the pointer of "current statement" will point to the first statement of the scene, and then execute this statement. If the scene call stack is empty, it can be regarded as the end of the interactive reading process. At this time, the engine will jump back to the main interface of the interactive reading.

### Formal Stage I: Read Instructions, Perform Conditional Judgment

At this stage, the instructions will be read and judged conditionally. Since each instruction may contain parameters describing the execution conditions (when parameters), conditional judgments must be performed each time an instruction is executed. At this time, the flow control module sends the parameters describing the execution conditions to the variable and conditional judgment module to request conditional judgment. The conditional judgment module parses the conditional judgment expression, combines the internal variables stored by the engine for conditional judgment, and finally returns a conditional judgment result (true or false). The flow control module determines whether to execute this instruction based on this result. If not executed, skip all subsequent steps in the process and return to the preparation stage to prepare to read the next instruction.

If the conditional judgment gives a true result, the flow control module enters the formal stage II.

### Formal Stage II: Call, Get the Performance Control Module and Send the Performance Controller

At this stage, the action to be executed by the instruction of the statement to be formally executed will be executed. Each type of instruction corresponds to an action, which is stored in the instruction configuration and execution module. In the instruction configuration and execution module, there are configurations for the actions corresponding to the instruction. The configuration of the action mainly includes which state modification operations the instruction needs to perform (such as modifying the background of the "stage" or switching the character image at a certain position), which animation or special effect operations (such as adding an animation effect to the background or character image or starting a special effect of raining or snowing), playing a multimedia resource, etc. This configuration will be sent to the instruction executor, and the corresponding action will be executed by the instruction executor specifically. After each instruction executor executes the specified action, a "performance control module" will be returned. The "performance" here refers to a visual effect with a duration. The "performance control module" mainly describes the description information of the visual effect currently being executed in the current process and the function used to unload the visual effect. This function will be automatically called after the visual effect reaches the duration, or it will be called in advance when the user issues an instruction to interrupt in advance. This module will be sent to the "performance controller", which is responsible for maintaining the "performance control module", including automatically unloading the "performance" after the duration is reached and the method called by the process controller in the preparation stage after the user operation is completed to end the "performance" in advance.

### Closing Stage: Handling Continuous Performances, Updating Backlog

After the instruction execution is completed, enter the closing stage. In this stage, the maintenance of the reading history record is mainly handled. Because we need to record the user's reading history during the reading process, so that users can view their own reading history at any time and return to a certain record node. In traditional paper books or mixed text and graphic reading methods, users usually use the method of flipping back pages or scrolling the mouse wheel up to return to a previously read position. However, since the reading process of interactive reading may change with user operations, the traditional recording method (recording page numbers or scrolling positions, etc.) cannot be used. Therefore, at the end of each stage, the flow control module will record the current reading position (generally the nth instruction of a certain scene), as well as the current variable information and scene status information. In this way, when the user wants to return to a certain record node read in the past, it can be easily read and restored to the previously read position.

### Automatic and Fast Forward

The automatic reading and fast-forwarding system essentially tries to replace the user to execute the step within a specified interval. The main difference between automatic and fast forwarding is that the priority and interval of the instructions they issue are different.

In automatic mode, every once in a while (depending on the speed at which the automatic mode is set), an instruction will be issued to the flow control system, requesting "step". The priority of automatic mode is low, so when encountering a performance that blocks automatic (most performances, such as video playback, dialogue, animation, etc., are performances that block automatic mode), it will not be executed until there is no performance blocking automatic mode.

In fast-forward mode, most performances will be skipped, and only performances that require the user to perform some operations, such as selection branches, will not be skipped. The trigger interval of the fast-forward mode is also significantly shorter.

## Performance Control

### WebGAL Performance Types

### Automatic Destruction of Performances, End Judgment, Blocking Logic

## Stage Controller and Animation Control

### Data-driven Pixi Stage Controller

### Animation and "Transform" Control

### Data-driven Filter Manager

## Save and Load, Backtracking and User Data

### Introduction to WebGAL Stage Status Table

### Storage and Recovery of Performance Status

### Storage of Archives and Other User Data

## Appreciation Module, and Some Details

### Appreciation Module

### Keep Browser State and "Continue Game"

### Shortcut Keys and Mouse Operations