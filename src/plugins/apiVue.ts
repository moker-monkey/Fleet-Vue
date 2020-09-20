import Plugin from '@/components/api-icon/install'
import Vue from 'vue'

// 在项目刚开始的时候icon总是在新增，建议先使用阿里的iconfont进行icon管理，本地的svgicon也上传到iconfont方便管理
Plugin.createSymbolIcon('//at.alicdn.com/t/font_298464_i7d9bqstv3.js')
Plugin.createFontIcon('//at.alicdn.com/t/font_298464_i7d9bqstv3.css')

Vue.use(Plugin)
