<template>
  <div class="header">
    <svgIcon></svgIcon>
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
import svgIcon from '@/components/api-svg/api-icon.vue';

@Component({
  components: {
    svgIcon,
  },
})
export default class Header extends Vue {}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
}
</style>