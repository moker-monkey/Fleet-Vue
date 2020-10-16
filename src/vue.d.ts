declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module '*/modules/*' {
    import store from '@/store/index'
    export default store
}

declare module 'element-ui/lib/locale/lang/*' {
    export const elementLocale: any
}