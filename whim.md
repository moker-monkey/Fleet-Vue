# 一些关于新功能的构想

### API-Manager

* TODO:数据上传前校验中心（考虑实现的可用性）

>使用场景： 每个form表单都需要验证,可以替代原来散落的form表单验证123、

* TODO:添加一个用于发起request请求时触发异步埋点的方法（优先级低）

* TODO: 将mock和adapter改造成装饰器（优先级低）

* tslint:disable-next-line: max-line-length
* TODO: 是否可以做一个vuex的插件，管理切换的状态，例如：当我们切换页面后再切回，如果是使用vue-router缓存，只会缓存dom元素，而vuex中的状态可能已经被改变，对于那些同步了全局的页面或组件就会出现问题，所以可以将vuex的值按照标签页的顺序列表存储起来，然后在点击对应的标签时，将对应的的vuex进行赋值（待验证）

* TODO: 发起一个页面，可以写文档去直接生成api.ts，api-doc.ts,mock.ts 也可以通过读取api.ts的文件，在页面上编辑文档，并生成api-doc.ts，mock.ts

* TODO: 能不能启用一个实时聊天的工具，该聊天工具可以将聊天内容可以快速整理成为工作流文档，能够融合进项目周期管理？（idea)

* TODO: 能不能在api的页面管理api的前端与后端的开发进度？（idea)

* TODO: 实现一个api组件，该组件能够管理api的调用，使用场景，在需要复杂api调用的时候，只需要给组件外嵌套一层api组件，传入api，params，refresh，rid,内部嵌套的api组件只需要考虑获取数据和使用数据，不需要操心数据的操作，api组件不产生任何的样式
