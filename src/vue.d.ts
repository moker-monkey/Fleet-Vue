declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module '*/modules/*' {
    import store from '@/store/index'
    export default store
}

declare module '@/api' {
    import api from '@/api'
    import _api from '@/api/Model'
    export { _api };
    export default api
}

declare module 'element-ui/lib/locale/lang/*' {
    export const elementLocale: any
}

declare module 'is-json' {
    import isJSON from 'is-json'
    export default isJSON
}

declare module '@/store/*' {
    import store from '@/store'
    export default store
}

declare module '@/store/modules/*' {
    import store from '@/store'
    export { PermissionModule, UserModule, TagsViewModule, ITagView }
}

declare module '@/mixins/*' {
    export * as resize from '@/mixins/resize'
    export * as charts from '@/mixins/charts'

}

declare module '@/setting' {
    import setting from '@/setting'
    export default setting
}

declare module '@/router/*' {
    import router from '@/router'
    export default router
}