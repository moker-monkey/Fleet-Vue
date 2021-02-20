# Fleet-Icon

## 简介

>结合阿里的[iconfont](https://www.iconfont.cn/plus)可以便捷的引用svg-icon、font-icon等资源
>
> 阿里的iconfont引入**操作步骤**以及svg的原理可以看作者写的[《svg-symbol引用方法》](https://www.jianshu.com/p/2dae6248315f)

## 使用范例

### 注册Fleet-Icon组件

>如果已经引入了本地资源font或者svg则用下面方式直接注册组件即可

```javascript
// plugin.ts
import fleetIcon from '@/components/fleet-icon/install'
import Vue from 'vue'

Vue.use(fleetIcon)
```

### 引入阿里svg-symbol的CDN资源



cdn引入svg-symbol资源

假设我们阿里symbol的地址是//at.alicdn.com/t/font_298464_i7d9bqstv3.js

```javascript
// plugin.ts
import fleetIcon from '@/components/fleet-icon/install'
import Vue from 'vue'
Vue.use(fleetIcon)
fleetIcon.createSymbolIconUrl('http://at.alicdn.com/t/font_298464_i7d9bqstv3.js')
```

### 引入阿里fontIcon的CDN资源

假设我们阿里Font class的地址是//at.alicdn.com/t/font_298464_i7d9bqstv3.css

```javascript
// plugin.ts
import fleetIcon from '@/components/fleet-icon/install'
import Vue from 'vue'
Vue.use(fleetIcon)
fleetIcon.createFontIconUrl('http://at.alicdn.com/t/font_298464_i7d9bqstv3.css')
```

### 代码内引用

#### 默认使用svg

:::demo fleetIcon的type默认是svg,当type为svg时的name就是symbol的id

```html
<template>
<fleet-icon name="icon-men"></fleet-icon>
</template>

<script>
</script>

<style lang="scss">
</style>

```

:::

#### 使用iconfont

:::demo 当type设置为font时，name就是class名

```html
<template>
<fleet-icon type="font" name="iconfont icon-men"></fleet-icon>
</template>

<script>
</script>

<style lang="scss">
</style>
```

:::

#### fontIcon样式控制

:::demo 如果是直接加class只能直接加到最外层,而当type=font时，name就是最里层i标签的class名

```html
<template>
<fleet-icon type="font" class="small" name="iconfont icon-men"></fleet-icon>
</template>

<script>
</script>

<style>
.small .iconfont{
    color:#66c1ff;
    font-size:50px;
}
</style>
```

:::

#### svg样式控制

:::demo 默认会给所有通过fleet-icon引入的svg都加上iconsvg的默认类名，可以通过该类名直接控制全局的样式,要单独控制也可以单独添加class来

```html
<template>

<fleet-icon class="small" name="icon-men"></fleet-icon>
</template>

<script>
</script>

<style>

.iconsvg {
       width: 30px; height: 30px;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
.small .iconsvg {
    width: 20px; height: 20px;
}
</style>
```

:::

## 属性

| 参数 | 说明                                                   | 类型   | 可选值   | 默认值 |
| ---- | ------------------------------------------------------ | ------ | -------- | ------ |
| type | icon类型                                               | string | svg/font | svg    |
| name | 当type为svg时name为symbol的id，否则为iconfont的class名 | string | -        | -      |
