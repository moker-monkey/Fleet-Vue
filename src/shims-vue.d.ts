

import Vue from 'vue'; import VueRouter, { Route } from 'vue-router'; import { Store } from 'vuex'

declare module 'element-ui/lib/locale/lang/*' {
  export const elementLocale: any
}

declare module '*.gif' {
  export const gif: any
}

declare module '*.png' {
  export const png: any
}