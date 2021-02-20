import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import fleetForm from '../../../src/api/components/install'
import fleetIcon from '../../../src/components/fleet-icon/install'
import { api } from '../../../src/api/Model'

export default ({
  Vue,
  options,
  router
}) => {
  Vue.use(Element)
  Vue.component(fleetForm)
  Vue.use(fleetIcon)
  fleetIcon.createSymbolIconUrl('http://at.alicdn.com/t/font_298464_i7d9bqstv3.js')
  fleetIcon.createFontIconUrl('http://at.alicdn.com/t/font_298464_i7d9bqstv3.css')
}