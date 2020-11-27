<template>
  <el-col
    :class="{
      card: true,
    }"
    :style="`flex-grow:${$attrs.grow || 1};flex-shrink:${$attrs.strink || 1};`"
  >
    <slot class="content"></slot>
  </el-col>
</template>
<script lang="ts">
/**
 * card主要是用于container中内层控制，有五种size,mini/small/normal/middle/large
 * mini通常一行能占5个，small能占4个，normal能占3个，middle能占2个，large最大
 * card只能够控制宽高
 * 基本替代div,内部的元素基本都可以使用百分比布局去适应大小
 *  */

import {
  Vue,
  Prop,
  Emit,
  Inject,
  Model,
  Watch,
  Component,
} from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop({ default: 1 })
  public size!: number;
  get G_size() {
    return 24 / this.size;
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/common/card";
.card {
  box-shadow: 0 2px 11px 0 rgba(190, 202, 218, 0.17);
  border: 2px #fff solid;
  border-radius: 10px;
  padding: 14px 20px;
  font-size: 13px;
}
</style>