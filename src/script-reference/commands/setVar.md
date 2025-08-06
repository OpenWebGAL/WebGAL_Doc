# setVar

新增变量、修改变量的二合一命令。

## 语句内容

格式如 `setVar:变量名=值;` 或 `setVar:变量名=表达式;`。
详情请见[变量](../../webgal-script/variable)。

支持的值类型包括:
- 数字（如 15，5e3，-5.5）
- 布尔值（`true` 或 `false`）
- 字符串

WebGAL 会尝试将无法识别的值类型，转换为字符串。

```webgal
setVar:char_b_fav=15; 角色 B 初始好感度
角色B:呐呐，看不看得出来我今天哪里不一样？;
choose:缎带:add|你变胖了:minus;
;
label:add;
角色A:是换了缎带吧。;
setVar:char_b_fav=char_b_fav+10; 角色 B 好感度 +10;
角色B:答对了，怎么样，你觉得好看吗？;
角色A:嗯，很适合你。;
jumpLabel:go_out;
;
label:minus;
角色A:你变胖了。;
setVar:char_b_fav=char_b_fav-10; 角色 B 好感度 -10;
角色B:你这人好无趣唉......;
;
label:go_out;
角色A:对了，今天晚上你有空吗？;
;
角色B:今晚没有安排，怎么了？ -when=char_b_fav>10;
changeScene:chapter_01/part_02.txt -when=char_b_fav>10;
;
角色B:没有。不好意思我先走了。;
:角色 B 离开了。;
;
```

## 参数

### global
- 布尔值

当值为 `true` 时，表示设置一个长效（全局）变量。长效变量在整个游戏中生效，除非用户清除全部数据。
当值为 `false` 时，表示设置一个普通变量。普通变量只在当前场景中生效，存档后会被保存，读档后恢复。

```webgal
; 假设这是新游戏的开头
jumpLabel:another_life -when=multiple_playthroughs;
;
setVar:multiple_playthroughs=false -global; 是否为多周目游戏
changeScene:chapter_01/part_01.txt;
;
label:another_life;
神秘的声音:如果有机会，你会选择过另一种人生吗？;
changeScene:chapter_01/part_01_extra.txt;
;
; 假设这是最后一章的结束部分
setVar:multiple_playthroughs=true -global; 设置为多周目游戏
```
