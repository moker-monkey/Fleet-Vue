// import api from './index'
import fleetForm from './components/fleet-form.vue'
import api from './index'

const Plugin = {
    install(vue: any): unknown {
        vue.prototype.$api = api
        vue.component('fleet-form', fleetForm)
        return vue
    }
}

export default Plugin
