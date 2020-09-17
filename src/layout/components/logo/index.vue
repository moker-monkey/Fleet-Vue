<template>
  <div class="logo-wrap">
    <div class="logo">
      <slot>
        <img :src="logo" />
      </slot>
    </div>
    <div class="title">{{title}}</div>
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

import logo from '@/assets/logo.png';

@Component
export default class SliderFace extends Vue {}
</script>
<style lang="sass" scoped>
</style>