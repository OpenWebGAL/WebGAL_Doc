# label

Sets a label.
See [Label Jump](../../webgal-script/scenes.md#label-jump) for details.

## Statement Content

Sets the label name. This command itself performs no action, but it can be used with `choose` and `jumpLabel`.

```webgal
label:myLabel;
```

Each label can be **defined only once** in a single scene file, but different scene files may use the same label name.

If multiple labels with the same name are defined in the same scene file, commands such as `choose` and `jumpLabel` search from the beginning of the scene file from top to bottom, and jump to the first matching label position.
