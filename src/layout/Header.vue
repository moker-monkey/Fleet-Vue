<template>
  <div class="header">
    <div class="collspan-btn" @click="collapase">
      <api-icon
        class="icon-size-large"
        type="font"
        name="icon-men"
        v-if="isCollapase"
      ></api-icon>
      <api-icon
        class="icon-size-large"
        type="font"
        name="icon-hart"
        v-else
      ></api-icon>
    </div>
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
import { LayoutModule } from '../store/modules/layout';

@Component
export default class Header extends Vue {
  get isCollapase() {
    return LayoutModule.isCollapase;
  }
  public collapase() {
    LayoutModule.setCollapase(!LayoutModule.isCollapase);
  }
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
}
</style>