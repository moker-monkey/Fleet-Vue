# 指引

## 项目目录及说明
```
| doc
| src
|- api  (用于存放api的配置)
|- assets  (用于存放各类资源，包括图片，样式，字体，JSON数据，markdown)
|- components  （用于存放各种公共组件文件）
|- directives （用于存放vue指令）
|- example （ 用于存放使用指引的位置，vuePress文档位置所在）
|- lang (语言映射)
|- layout (只与框架有关的文件都放此处)
|- mixin （用于混淆的文件）
|- plugins (放需要引入到框架全局的文件)
|- router （只有路由）
|- store （存储全局数据）
|- styles  （全局的scss变量，样式等需要被引用的文件）
|- template （不会被任何页面引用的文件，仅仅当做模板，粘贴复制用）
|- utils (一些工具)
|- views (业务文件都写在里面，包括业务相关度高的组件)
```

## 目前已有功能
1. api-manager（通过封装axios,实现统一的restfromwork风格，方便的api注释，apiMock数据，api下载功能，api拦截功能，并提供api文档页面（未完善）
2. api-icon 便捷的svg-icon&&font-icon的引入方式

## 未来需要完善的功能清单
### 基础架构
1. 骨架屏自动生成
2. 前端监听接口
3. 前端自动化测试（录制事件运动轨迹，然后使用nightWatch进行回放测试）
4. SSR流程
5. api缓存模块
6. 图片离线缓存
7. 侧边栏自适应
8. 页面停留时间监控


### 组件及相关部分
1. doc文档组件 （使用vuePress完成，已完成）
2. api-select（核心功能是只有传入的参数变化时才会再次去获取数据）
3. apiMixins(用于混淆组件，使组件具备获取api管理的属性和功能（包括api）)

## 命令

### 启动文档
```
npm run docs
```

### 安装
```
npm install
```

### 启动开发环境
```
npm run serve
```

### 打包
```
npm run build
```

### 测试
```
npm run test
```

### 校验格式和修复格式
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

[svg]
svg iconfont的核心条件就是让svg标签脱离文档流后，symbol就能够在任意位置引用
为了不需要修改多余的iconfont样式，iconfont建议统一使用[fontAwesome](https://fontawesome.dashgame.com/)