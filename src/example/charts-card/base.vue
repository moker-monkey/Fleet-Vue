<template>
  <api-card class="base-card">
    <div class="header">
      <div class="title">
        <span class="title">实时|累计新增用户</span>
        <span>
          <slot name="tool" v-if="options.tool">
            <el-button type="text" size="mini">趋势</el-button>
          </slot>
        </span>
      </div>
      <div class="time">
        {{ data.date }} <span class="subTime">| {{ data.subTime }}</span>
      </div>
      <div class="subtitle">{{ data.subTitle }}</div>
      <div class="content">
        <slot name="count">
          <count-to class="number" :startVal="0" :endVal="data.count"></count-to
          >人
        </slot>
      </div>
      <div :class="{compare:true, inline:true }">
        <slot name="subCount">
          <span class="monthOnMonth">
            <span> 环比 </span>
            <span class="down-arrow">
              <count-to
                class="number"
                :startVal="0"
                :endVal="30"
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
                :endVal="40"
                suffix="%"
              ></count-to>
            </span>
          </span>
        </slot>
      </div>
    </div>
    <div class="content"></div>
  </api-card>
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
} from "vue-property-decorator";
import countTo from "vue-count-to";

interface data {
  title: "";
}
interface options {
  tool: boolean;
  
}
@Component({
  components: {
    countTo,
  },
})
export default class extends Vue {
  @Prop({
    default: () => {
      return {};
    },
  })
  public data!: data;
  @Prop({
    default: () => {
      return {
        tool: true,
      };
    },
  })
  public options?: options;
}
</script>
<style lang="scss" scoped>
.base-card {
  background: #fff;
  .title {
    display: flex;
    justify-content: space-between;
    span {
      vertical-align: middle;
      line-height: 26px;
    }
  }
  .subtitle {
  }
  .content {
    .number {
      font-size: 30px;
    }
  }
  .compare {
  }
}
</style>