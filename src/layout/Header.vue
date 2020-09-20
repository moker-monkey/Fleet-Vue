<template>
  <div class="header">
    <api-icon class="icon-size-large" type="font" name="icon-men"></api-icon>
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

@Component
export default class Header extends Vue {}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
}
</style>