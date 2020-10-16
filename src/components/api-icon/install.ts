import apiIcon from './index.vue'

const Plugin = {
    install(vue: any): unknown {
        vue.component('apiIcon', apiIcon)
        return vue
    },
    createSymbolIconUrl(scriptUrl: string) {
        const body = document.getElementsByTagName('body')[0];
        const script = document.createElement('script')
        script.setAttribute('src', scriptUrl)
        body.appendChild(script)
    },
    createFontIconUrl(sourceUrl: string) {
        const head = document.getElementsByTagName('head')[0];
        const link = document.createElement('link')
        link.setAttribute('href', sourceUrl)
        link.setAttribute('rel', 'stylesheet')
        link.setAttribute('type', 'text/css')
        head.appendChild(link)
    }
}

export default Plugin
