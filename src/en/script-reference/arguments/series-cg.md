- String

Sets the series name that CG appreciation should collect this image into. If this parameter is omitted or the series name is empty, the image is collected into the default series.

```
Default Series
  | - CG Name 1
  | - CG Name 2
Series Name 1
  | - CG Name 3
  | - CG Name 4
  | - CG Name 5
Series Name 2
  | - CG Name 6
```

The same image file, strictly speaking the same path, can only belong to one series. If it is collected into multiple series, only the series from the last collection is kept.
