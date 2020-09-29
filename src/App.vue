<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import {
  Vue,
  Prop,
  Emit,
  Inject,
  Model,
  Watch,
  Component,
} from 'vue-property-decorator';
import Global from './layout/Global.vue';
import AppMain from './layout/AppMain.vue';
import '@/styles/index.scss';

@Component({
  name: 'app',
  components: {
    AppMain,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import "@/assets/common/reset.scss";
@import "@/assets/common/settings.scss";
@import "@/assets/common/layout.scss";
</style>