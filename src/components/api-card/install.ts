import apiCard from './gridCard/card.vue'
import apiContainer from './gridCard/container.vue'

const Plugin = {
    install(vue: any): unknown {
        vue.component('apiCard', apiCard)
        vue.component('apiContainer', apiContainer)
        return vue
    }
}

export default Plugin
