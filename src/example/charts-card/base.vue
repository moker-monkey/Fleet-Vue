<template>
  <api-card class="base-card">
    <div class="header">
      <div class="title">
        <span class="title">{{ data.title }}</span>
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
          >{{ data.unit }}
        </slot>
      </div>
      <div :class="{ compare: true, inline: true }">
        <slot name="subCount" :data="data"> </slot>
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
} from 'vue-property-decorator';


interface data {
  title: '';
}
interface options {
  tool: boolean;
}
@Component
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