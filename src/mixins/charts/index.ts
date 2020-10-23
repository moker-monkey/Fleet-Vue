import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import Resize from '../resize/index'
import echarts, { EChartOption } from 'echarts'
import { mixins } from 'vue-class-component';
const WIDTH = 992 // refer to Bootstrap's responsive design

// 该mixins主要作用是让Charts只需要配置options就可以了
@Component({
    name: 'ChartsMixin'
})
export default class extends mixins(Vue, Resize) {
    @Prop({ default: 'chart' }) public className!: string
    @Prop({ default: 'chart' }) public id!: string
    @Prop({ default: '200px' }) public width!: string
    @Prop({ default: '200px' }) public height!: string
    @Prop({ default: {} }) public data!: any
    @Prop({ default: false }) public loading?: boolean;
    @Prop({ default: '' }) public title?: string;

    public chart: any = null;
    public options!: any;
    public in_loading!: any;

    public setOptions(this: any, data: any, title: any) { }
    public mounted() {
        // this.in_loading = this.$loading({ target: this.$el.$parent.$el })
        this.$nextTick(() => {
            this.setOptions(this.data, this.title)
            this.initChart(this.options)
        })
    }
    public beforeDestroy() {
        if (!this.chart) {
            return
        }
        this.chart.dispose()
        this.chart = null
    }
    @Watch('data', { deep: true })
    private changeData(this: any, value: any) {
        this.$nextTick(() => {
            this.options = this.setOptions(value, this.title)
            this.initChart(this.options)
        })
    }
    @Watch('loading')
    private changeLoading(this: any, value: boolean) {
        if (value) { this.in_loading = this.$loading({ target: this.$parent.$el, customClass: 'charts-loading' }) } else { this.in_loading.close() }
    }
    private initChart(options: EChartOption<EChartOption.SeriesLine>) {
        this.chart = echarts.init(document.getElementById(this.id) as HTMLDivElement)
        this.chart.setOption(options)
    }
}
