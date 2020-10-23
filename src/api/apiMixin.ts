import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import { api } from './Model'
import { AxiosResponse } from 'axios';

// 用于为component提供api支持，让组件专注于对数据的渲染，剥离复杂的数据处理过程，也可以在api/adapter中进行预处理
// 不适用于view中

@Component({
    name: 'ApiMixin'
})
export default class extends Vue {
    @Prop()
    public api!: api;
    @Prop({ default: () => { } })
    public params: any;
    public inner_params: any = {};  // 内部参数使用inner_params
    @Prop({ default: null })
    public _id?: number;
    @Prop({ default: 'data' })
    public data_key?: string;
    @Prop({ default: false }) // 是否初始化去读取数据
    public init?: boolean;
    @Prop({ default: true }) // 是否监听params
    public watch_params?: boolean;
    @Prop({ default: true }) // 是否缓存？
    public keepLive?: boolean;
    public data: any;
    @Prop({ default: false })
    public refresh?: boolean;
    @Watch('refresh')
    public W_refresh(this: any, value: any) {
        this.getData()
    }
    @Watch('params')
    public W_params(this: any, value: any) {
        if (this.watch_params) {
            this.getData()
        }
    }
    public created() {
        if (this.init) {
            this.getData()
        }
    }
    public getData() {
        const params = this.setParams(this.params, this.inner_params)
        this.api.GET(params, this._id).then((res: AxiosResponse) => {
            this.data = res.data;
            this.$emit('getData', this.data)
        })
    }
    public setParams(source: any, target: any) {
        // 可以重写此方法去给组件添加params
        // 不过通常只要给inner_params赋值即可
        return Object.assign(source, target)
    }
}
