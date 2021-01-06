import { Vue, Prop, Watch } from "vue-property-decorator"
import Component, { mixins } from 'vue-class-component'
import api from "@/api/index.ts"
import echarts from 'echarts'
import Resize from "../resize"
import { Loading } from 'element-ui';
import Api from '@/api/Model'

@Component
export default class EchartsMixin extends mixins(Vue, Resize) {
    @Prop()
    public title?: string;
    @Prop({ default:()=> api.empty })
    public api?: Api
    @Prop({
        default: false
    })
    public refresh?: boolean;
    @Prop({
        default() {
            return {}
        }
    })
    public params?: any
    public fakeOption: any = {}
    public option: any = {}
    public loading: any = null;
    @Watch("refresh")
    public watchRefresh(this: any, value: any) {
        this.getOption(this.params)
    }
    // @Watch("params", { deep: true })
    // public watchParams(this: any, value: any) {
    //     this.getOption(this.params)
    // }
    public getOption(this: any, param: any = {}) {
        const params = Object.assign(param, this.params);
        if (this.api) {
            // this.loading = Loading.service({ target: this.$refs.charts });
            this.api.GET(params).then((res: any) => {
                // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                //     this.loading.close();
                // });
                this.setCharts(this.resetOption(res.data));

            }).catch((err: any) => {
                console.log(err)
                if (this.fakeOption) {
                    this.setCharts(this.fakeOption)
                    // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                    //     this.loading.close();
                    // });
                }
            })
        } else {
            this.setCharts(this.options)
        }
    }
    public initChart(this: any) {
        this.chart = echarts.init(this.$refs.charts)
    }
    public resetOption(this: any, data: any) {
        // 在获取数据后更新Option,默认返回直接的请求
        // 继承该模块只需要重写setOption即可完成更新
        return data
    }
    public setCharts(this: any, option: any = {}) {
        let options = Object.assign(this.option, option)
        if (this.title) {
            options["title"] = {}
            options.title["text"] = this.title
        }
        this.chart.setOption(options)

    }
    public mounted(this: any) {

        this.initChart();
        this.getOption();
    }
}