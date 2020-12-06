import api from './index'

const Plugin = {
    install(vue: any): unknown {
        vue.prototype.$api = api
        return vue
    }
}

export default Plugin
