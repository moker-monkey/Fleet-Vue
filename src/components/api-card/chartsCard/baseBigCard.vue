// 卡片中的基础部分,卡片中必然有该类卡片
<template>
  <api-card class="base-card">
    <el-row>
      <el-col class="header" :span="4">
        <div class="title">
          <span class="title">{{ data.title }}</span>
          <span>
            <slot name="tool" v-if="options.tool">
              <el-button type="text" size="mini" @click="showDialog = true"
                >趋势</el-button
              >
            </slot>
          </span>
        </div>
        <div class="time">
          {{ data.date }} <span class="subTime">| {{ data.subTime }}</span>
        </div>
        <div class="subtitle">{{ data.subTitle }}</div>
        <div class="content">
          <slot name="count">
            <count-to
              class="number"
              :startVal="0"
              :endVal="data.count"
            ></count-to
            >{{ data.unit }}
          </slot>
        </div>
        <div :class="{ compare: true, inline: true }">
          <slot name="subCount" :data="data"> </slot>
        </div>
      </el-col>
      <el-col :span="20">
        <slot name="content"></slot>
      </el-col>
    </el-row>

    <el-dialog :visible.sync="showDialog">
      <slot name="dialog"></slot>
    </el-dialog>
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
import countTo from 'vue-count-to';

interface data {
  title: '';
}
interface options {
  tool: boolean;
  contentSpan: number;
  headerSpan: number;
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
  public showDialog = false;
  @Prop({
    default: () => {
      return {
        tool: true,
        contentSpan: 16,
        headerSpan: 6,
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