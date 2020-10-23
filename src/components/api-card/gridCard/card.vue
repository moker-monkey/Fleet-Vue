<template>
  <div
    :class="{
      card: true,
      'card-mini': size === 'mini',
      'card-small': size === 'small',
      'card-normal': size === 'normal',
      'card-middle': size === 'middle',
      'card-large': size === 'large',
    }"
    :style="`flex-grow:${$attrs.grow || 1};flex-shrink:${
      $attrs.strink || 1
    };height:${$attrs.height};width:${$attrs.width}`"
  >
    <slot class="content"></slot>
  </div>
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
  @Prop({ default: "normal" })
  public size: string;
}
</script>
<style lang="scss" scoped>
@import "@/assets/common/card";
.card {
  display: inline-block;
  background: red;
  box-shadow: 0 2px 11px 0 rgba(190, 202, 218, 0.17);
  border: 2px #fff solid;
  border-radius: 10px;
  padding: 14px 20px;
  font-size: 13px;
}

.row {
  & > .content > .card-mini {
    width: 19.5%;
  }

  & > .content > .card-small {
    width: 24.5%;
  }

  & > .content > .card-normal {
    width: 33%;
  }

  & > .content > .card-middle {
    width: 49.5%;
  }

  & > .content > .card-large {
    width: 99.5%;
  }
}

.col {
  & > .content > .card-mini {
    height: 19.5%;
  }

  & > .content > .card-small {
    height: 24.5%;
  }

  & > .content > .card-normal {
    height: 33%;
  }

  & > .content > .card-middle {
    height: 49.5%;
  }

  & > .content > .card-large {
    height: 99.5%;
  }
}
</style>