import fleetIcon from '@/components/fleet-icon/install'
import apiCard from '@/components/api-card/install'
import fleetForm from '@/api/components/install'
import Vue from 'vue'

// 在项目刚开始的时候icon总是在新增，建议先使用阿里的iconfont进行icon管理，本地的svgicon也上传到iconfont方便管理；上线之后请下载到本地引入，保证连接稳定；
// url为指定阿里iconfont项目的url
fleetIcon.createSymbolIconUrl('//at.alicdn.com/t/font_298464_i7d9bqstv3.js')
fleetIcon.createFontIconUrl('//at.alicdn.com/t/font_298464_i7d9bqstv3.css')

Vue.use(fleetIcon)
Vue.use(apiCard)
Vue.use(fleetForm)
