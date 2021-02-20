import fleetForm from './fleet-form.vue'
const Plugin = {
    install(vue: any): unknown {
        vue.component('fleet-form', fleetForm)
        return vue
    },
}

export default Plugin
