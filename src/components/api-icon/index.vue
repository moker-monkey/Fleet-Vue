<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#${name}`" />
  </svg>
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
}
</script>
<style lang="scss" scoped>
</style>