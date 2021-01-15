# 使用说明
## 运行文档
使用`npm run doc`命令即可运行文档

## 侧边栏路由配置
在example中的`.vuepress`文件夹下的`config.js`中配置路由
路由和文件夹对应，例如：`docs`文件夹下的`README.md`对应的是`/docs/`的地址，当访问`/docs/`时`vuepress`会自动查找到对应目录下的README.md文件
* 配置项看[vuepress配置项](https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE)

## 新增文档说明
在example的文件夹下创建一个新的`README.md`即可

## 静态资源引入
### 方式一
静态资源可放置于`.vuepress`的`public`文件夹下,此时线上的资源路径为`/`,
因此只需要写`![Image](/img/logo.png)`;
### 方式二
用过模块请求来引用静态资源,例如:`![Image](~/../../assets/logo.png)`引用的是`src/assets/`文件夹下的图片

## 引入组件

### 引入js组件

::: tip 详情可查看markdown文件
该种引用方法需要使用[vuepress-plugin-demo-container](https://docs.chenjianhui.site/vuepress-plugin-demo-container/zh/started.html#%E5%AE%89%E8%A3%85)组件
:::

```
: : : demo 使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。 <= 删除左侧空格
` ` ` html <= 删除左侧空格
<template>
  <color-picker size="mini" v-model="color"></color-picker>
</template>

<script>
  export default {
    data() {
      return {
        color: '#409EFF'
      }
    }
  };
</script>
` ` ` <= 删除左侧空格
: : : <= 删除左侧空格
```

### 引入ts组件
::: tip 需要安装[vuepress-plugin-typescript](https://zhuanlan.zhihu.com/p/222031275)组件
但是并不能直接引用，需要先将ts组件封装到components中，或者去enhanceApp.js注册为组件再进行引用

:::

::: demo 'nothing'
``` html
<template>
<test-1></test-1>
</template>
<script>
export default {
  
}
</script>
```
:::
