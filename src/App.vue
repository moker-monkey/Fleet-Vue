<template>
  <div id="app">
    <Global></Global>
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
import '@/styles/index.scss';

@Component({
  name: 'app',
  components: {
    Global,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import "@/assets/common/reset.scss";
@import "@/assets/common/settings.scss";

</style>