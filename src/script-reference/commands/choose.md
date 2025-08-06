# choose

显示选项。

## 语句内容

填写多个选项。每个选项包括 __选项文本__ 和 __跳转目标__ 两个部分，用英文冒号 `:` 分割；每个选项之间用 `|` 分隔。
详情请见[分支选择](../../webgal-script/scenes.md#分支选择)。

目前可以跳转至
- 场景文件
- 本场景的某个标签

```webgal
角色A:今天去哪儿呢？;
choose:去商店:chapter_01/shop.txt|某人家里:chapter_01/house_b.txt|待在家里:home;
;
label:home;
角色A:还是待在家里吧。;
```
