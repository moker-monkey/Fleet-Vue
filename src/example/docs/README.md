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

<script>
export default{
    data(){
        return {
            value: '测试'
        }
    }
}
</script>

<!-- ::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
::: -->



<!-- 
<ClientOnly>
  <my-demo></my-demo>
</ClientOnly> -->

::: demo 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**
```html
<template>
  <el-col class="red-center-text">
      <p>{{ message }}</p>
      <input v-model="message" placeholder="Input something..."/>
  </el-col>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}
</script>
<style>
.red-center-text { 
  color: #ff7875;
  text-align: center;
}
</style>
```
:::