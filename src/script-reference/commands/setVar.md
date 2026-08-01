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
;
角色B:呐呐，看不看得出来我今天哪里不一样？;
choose:缎带:good_answer|你变胖了:bad_answer; 根据玩家的选择，跳转到不同的标签位置
;
label:good_answer;
玩家:是换了缎带吧。;
setVar:char_b_fav=char_b_fav+10; 角色 B 好感度 +10;
角色B:答对了，怎么样，你觉得好看吗？;
玩家:嗯，很适合你。;
jumpLabel:ask_go_out; 跳转到 ask_go_out 标签，避开下面的 bad_answer 部分
;
label:bad_answer;
玩家:你变胖了。;
setVar:char_b_fav=char_b_fav-10; 角色 B 好感度 -10;
角色B:你这人好无趣唉......;
;
label:ask_go_out;
玩家:对了，今天晚上你有空吗？;
;
jumpLabel:not_enough_fav -when=char_b_fav<10; 如果好感度小于 10，跳转到 not_enough_fav 标签
;
角色B:今晚没有安排，怎么了？;
changeScene:chapter_01/part_02.txt;
;
label:not_enough_fav;
;
角色B:没有。不好意思我先走了。;
:角色 B 离开了。;
changeScene:chapter_02/part_01.txt;
;
```

## 参数

### global
- 布尔值

当值为 `true` 时，表示设置一个长效（全局）变量。长效变量在整个游戏中生效，除非用户清除全部数据。
当值为 `false` 时，表示设置一个普通变量。普通变量只在当前场景中生效，存档后会被保存，读档后恢复。

```webgal
; 假设这是新游戏的开头
; 如果已经是多周目了，就直接跳到多周目专用的剧情
jumpLabel:another_life -when=multiple_playthroughs;
;
; 否则认为是第一周目，初始化变量并进入第一周目的剧情
setVar:multiple_playthroughs=false -global; 初始化为非多周目
changeScene:chapter_01/part_01.txt;
;
; 这里是多周目专用的剧情
; 只有当 multiple_playthroughs 为 true 时才会跳转到这里
label:another_life;
神秘的声音:如果有机会，你会选择过另一种人生吗？;
changeScene:chapter_01/part_01_extra.txt;
;
; ......
;
; 假设这是最后一章的结束部分
setVar:multiple_playthroughs=true -global; 设置为多周目
```

### local
- 布尔值

当值为 `true` 时，写入当前场景的[局部变量](../../webgal-script/variable.md#局部变量)，也就是 `callScene` 传进来的参数所在的那个命名空间。局部变量随场景调用结束而消失，不会影响调用方的同名变量。

```webgal
; battle.txt，由 callScene:battle.txt -hp=100 调用
setVar:hp=hp-30 -local; 改的是传进来的 hp
旁白:受到攻击，剩余血量 {hp}。;
```

不加 `-local` 时，`setVar:hp=hp-30;` 写的是普通变量，而读取 `{hp}` 时局部变量优先，结果就是这次写入读不出来。要改传进来的参数，必须加 `-local`。

::: warning
`-local` 与 `-global` 互斥，同时写时按 `-global` 处理。
:::
