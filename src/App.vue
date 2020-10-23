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
import 'font-awesome/css/font-awesome.css';
import router from "@/router/index";

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
@import "@/assets/common/_transition.scss";
</style>