// 用于整合charts-card卡片与插槽，使其更灵活的产生多种功能
// card-1表示第一种card的整合样式
<template>
  <base-card :data="data" :options="options">
    <template v-slot:subCount="scope">
      <span class="monthOnMonth">
        <span> 环比 </span>
        <span class=""></span>
        <span class="down-arrow">
          <count-to
            class="number"
            :startVal="0"
            :endVal="scope.data.mtm"
            suffix="%"
          ></count-to>
        </span>
      </span>
      <span class="yearOnYear">
        <span> 同比 </span>
        <span class="up-row">
          <count-to
            class="number"
            :startVal="0"
            :endVal="scope.data.yty"
            suffix="%"
          ></count-to>
        </span>
      </span>
      <div class="left"></div>
    </template>
    <template v-slot:content>
      <slot></slot>
    </template>
  </base-card>
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
import base from '@/components/api-card/chartsCard/base.vue';
import countTo from 'vue-count-to';

@Component({
  components: {
    baseCard: base,
    countTo,
  },
})
export default class extends Vue {
  @Prop({
    default: () => {
      return {};
    },
  })
  public data!: any;
  @Prop({
    default: () => {
      return {};
    },
  })
  public options: any;
}
</script>
<style lang="scss" scoped>
</style>