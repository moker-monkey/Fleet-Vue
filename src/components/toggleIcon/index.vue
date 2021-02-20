<template>
  <div class="collspan-btn" @click="toggle_handle">
    <fleet-icon
      :class="`icon-size-${icon_size}`"
      :type="icon_type"
      :name="name.on"
      v-if="state"
    ></fleet-icon>
    <fleet-icon
      :class="`icon-size-${icon_size}`"
      :type="icon_type"
      :name="name.off"
      v-else
    ></fleet-icon>
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

interface name {
  on: string;
  off: string;
}

enum icon_type {
  'font',
  'svg',
}

@Component
export default class extends Vue {
  @Model('change', { type: Boolean })
  public state!: boolean;
  @Prop()
  public name!: name;
  @Prop({ default: icon_type.font })
  public icon_type?: string;
  @Prop({
    default: 'small',
  })
  public icon_size?: string;
  public value: boolean = true;
  @Emit('change')
  public toggle_handle() {
    this.value = !this.value;
    return this.value;
  }
}
</script>
<style lang="scss" scoped>
.collspan-btn {
  display: inline-block;
  vertical-align: baseline;
  color: #000;
}
</style>