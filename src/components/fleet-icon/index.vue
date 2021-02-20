<template>
  <div class="icon-wrap">
    <template v-if="type === 'font'">
      <i :class="`${name}`"></i>
    </template>
    <template v-if="type === 'svg'">
      <svg class="iconsvg" aria-hidden="true">
        <use :xlink:href="`#${name}`" />
      </svg>
    </template>
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
export default class extends Vue {
  @Prop()
  public name!: string;
  @Prop({ default: 'svg' })
  public type?: string;
}
</script>
<style lang="scss" scoped>
.icon-wrap {
  display: inline-block;
  vertical-align: middle;
}
</style>