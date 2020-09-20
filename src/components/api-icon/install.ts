import apiIcon from './index.vue'
import Vue from 'vue'

const Plugin = {
    install(vue: any, Options: any): unknown {
        vue.component('apiIcon', apiIcon)
        return vue
    }
}

export default Plugin
