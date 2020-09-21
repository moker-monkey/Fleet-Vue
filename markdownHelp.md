#markdown语法大全
> 因为不同的渲染引擎有不同的语法支持，所以在一个新的引擎写markdown的时候，就需要知道支持哪些语法，创作时尽量兼容不同的语法，因此分为效果本分和测试码部分，测试码分为初级和高级，也包括vscode插件介绍，基础部分的用法是参考github的渲染引擎。
##效果部分
基础用法
===
# 一级title
## 二级title
### 三级title
#### 四级title
##### 五级title

一级title 
===
二级title
---

*斜体*

**加粗**

*斜体 **与加粗~~并删除~~** 的例子*

~~删除线~~



***

* 一级
  * 二级
    * 三级
      * 四级

1. 一级
   1. 二级
      1. 三级
         1. 四级

![图片名称](src/assets/logo.png)

[地址](http://www.baidu.com)

> 引用如果  
>> 引用加*斜体* **粗体** _斜体加**粗体**_
>>> 三级引用


一行代码`console.log(hellow world)`

```html
<div>这是一大块代码</div>
```

| 活动 | 支出 |
| ---- | ---- |
| 吃饭 | 1000 |
| 唱歌 | 2000 |

文本引用

    这段是引用文本
        
        


#标签的用法
<center>样式居中</center>

[锚点(每个title都可以当锚点)](#一级title)

**复选框↓** 插件markdown All in One 提供快捷键`ALT+c`能够快速切换
* [x] 需求分析
* [x] 系统设计
* [x] 详细设计
* [ ] 编码
* [ ] 测试
* [ ] 交付
高级用法
==========================
---
###表情
![Emoji](src/assets/markdown/Pasted%20Graphic.png)
![emoji map](https://upload-images.jianshu.io/upload_images/1414656-b1f92b959dfa863e.png?imageMogr2/auto-orient/strip|imageView2/2/w/301/format/webp)

[更多的emoji](https://www.webfx.com/tools/emoji-cheat-sheet/)
[github支持表情](http://www.emoji-cheat-sheet.com)


- 上标：30^th^
- 下标：H~2~O
- 脚注：Content [^1]
[^1]:Hi 这里是一个注脚，会自动拉到最后面排版

*[HTML]: 超文本标记语言  
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.
---

### 比较好的插件介绍：
* Markdown Preview Enhanced //以上语法都需要使用插件
* markdown+Math //用于写latex公式

==标记== 

```
新增删除只有github支持
+ 新增
- 删除
```


##测试码部分

```

基础用法
===
# 一级title
## 二级title
### 三级title
#### 四级title
##### 五级title

一级title 
===
二级title
---

*斜体*

**加粗**

*斜体 **与加粗~~并删除~~** 的例子*

~~删除线~~



***

* 一级
  * 二级
    * 三级
      * 四级

1. 一级
   1. 二级
      1. 三级
         1. 四级

![图片名称](src/assets/logo.png)

[地址](http://www.baidu.com)

> 引用如果  
>> 引用加*斜体* **粗体** _斜体加**粗体**_
>>> 三级引用


一行代码`console.log(hellow world)`

\```html
<div>这是一大块代码</div>
/```

| 活动 | 支出 |
| ---- | ---- |
| 吃饭 | 1000 |
| 唱歌 | 2000 |

文本引用

    这段是引用文本
        
        


#标签的用法
<center>样式居中</center>

[锚点(每个title都可以当锚点)](#一级title)

**复选框↓** 插件markdown All in One 提供快捷键`ALT+c`能够快速切换
* [x] 需求分析
* [x] 系统设计
* [x] 详细设计
* [ ] 编码
* [ ] 测试
* [ ] 交付
高级用法
==========================
---
表情
---
![Emoji](src/assets/markdown/Pasted%20Graphic.png)
![emoji map](https://upload-images.jianshu.io/upload_images/1414656-b1f92b959dfa863e.png?imageMogr2/auto-orient/strip|imageView2/2/w/301/format/webp)

[更多的emoji](https://www.webfx.com/tools/emoji-cheat-sheet/)
[github支持表情](http://www.emoji-cheat-sheet.com)


- 上标：30^th^
- 下标：H~2~O
- 脚注：Content [^1]
[^1]:Hi 这里是一个注脚，会自动拉到最后面排版

*[HTML]: 超文本标记语言  
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.
---

### 比较好的插件介绍：
* Markdown Preview Enhanced //以上语法都需要使用插件
* markdown+Math //用于写latex公式

==标记== 

\```
新增删除只有github支持
+ 新增
- 删除
/```
```