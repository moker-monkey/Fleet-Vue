<template>
  <vue-fragment>
      
  </vue-fragment>
</template>
<script lang="ts">
/**
 * 用法，
 * 1. state 去控制动画的开启，true为开启动画，flase为不再启动
 * 2. num 去控制执行次数
 * 3. name 去给子元素添加动画控制类
 */
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
export default class extends Vue {}
</script>
<style lang="scss" scoped>
</style>