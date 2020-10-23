# perfect-vue

iconfont的核心条件就是让svg标签脱离文档流后，symbol就能够在任意为只引用了

## 项目目录及说明
| src
|- api  (用于存放api的配置)
|- assets  (用于存放各类资源，包括图片，样式，字体，JSON数据，markdown)
|- components  （用于存放各种组件文件）
|- directives （用于存放vue指令）
|- example （ 用于存放所有应该在router中注册的例子）
|- lang (语言映射)
|- layout (只与框架有关的文件都放此处)
|- mixin （用于混淆的文件）
|- plugins (放需要引入到框架全局的文件)
|- router （只有路由）
|- store （存储全局数据）
|- styles  （全局的scss变量，样式等需要被引用的文件）
|- template （不会被任何页面引用的文件，仅仅当做模板，粘贴复制用）
|- utils (一些工具)
|- views (业务文件都写在里面)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
