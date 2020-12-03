// 用于整合charts-card卡片与插槽，使其更灵活的产生多种功能
// card-1表示第一种card的整合样式
<template>
  <base-card
    :data="data"
    :options="options"
    :class="{ 'big-card': options.size === 'big' }"
  >
    <template v-slot:subCount="scope">
      <span class="monthOnMonth">
        <span> 环比 </span>
        <span class="row up"></span>
        <span>
          <count-to
            :startVal="0"
            :endVal="scope.data.mtm"
            suffix="%"
          ></count-to>
        </span>
      </span>
      <span class="yearOnYear">
        <span> 同比 </span>
        <span class="row down"></span>
        <span>
          <count-to
            :startVal="0"
            :endVal="scope.data.yty"
            suffix="%"
          ></count-to>
        </span>
      </span>
      <div class="bottom" v-if="options.size === 'big'">
        <div>
          <span>合计</span> <span class="count">{{ 2000 }}</span
          ><span> 人</span>
        </div>
        <div>
          <span>新增</span> <span class="count">{{ 800 }}</span
          ><span> 人</span>
        </div>
      </div>
    </template>
      <slot name="content"></slot>
    <template v-slot:dialog>
      <slot name="dialog"></slot>
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
      return {
        tool: false,
      };
    },
  })
  public options: any;
}
</script>
<style lang="scss" scoped>
.big-card {
  .bottom {
    max-width: 170px;
    padding-top: 20px;
    margin-top: 20px;
    border-top: 1px solid #000;
    .count {
      font-size: 20px;
      margin: 0 30px;
    }
  }
}
.row {
  position: relative;
  display: inline-block;
  width: 0px;
  height: 0px;
  border: 8px solid transparent;
}
.up {
  border-bottom-color: red;
}
.down {
  border-top-color: green;
  top: 6px;
}
</style>