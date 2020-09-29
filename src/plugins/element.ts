import Vue from 'vue';
import elementui from 'element-ui';
import Fragment from 'vue-fragment';
import i18n from './i18n'
import setting from '@/setting'

Vue.use(Fragment.Plugin)
Vue.use(elementui, {
    size: setting.elSize,
    i18n: (key: string, value: string) => i18n.t(key, value)
})
