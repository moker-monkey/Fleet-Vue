// 卡片中的基础部分,卡片中必然有该类卡片
<template>
  <api-card class="base-card">
    <el-row class="wrap">
      <el-col class="header" :span="options.size === 'big' ? 4 : 24">
        <div class="subCountent">
          <div class="count">
            <slot name="count" :data="data"></slot>
          </div>
          <div :class="{ inline: options.size === 'middle' }">
            <slot name="subCount" :data="data"> </slot>
          </div>
        </div>
      </el-col>
      <el-col class="content" :span="options.size === 'big' ? 20 : 24">
        <slot name="content" :data="data"></slot>
      </el-col>
    </el-row>
    <el-dialog :visible.sync="showDialog">
      <slot name="dialog" :data="data"></slot>
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
} from "vue-property-decorator";
import countTo from "vue-count-to";

interface data {
  title: "";
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
  .wrap {
    // white-space: nowrap;
  }
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
// 有多套css，以方便在最小的逻辑代码中有最大的样式变化
// 并且各层有各层的样式体系，但是可以用同一classname
.big-card {
  .header {
    max-width: 200px;
  }
  .content .number {
    margin-left: 20px;
  }
}
.mid-card {
  .subCountent {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    .count {
      width: 100%;
    }
  }
  .inline {
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
    width: 100%;
    padding-bottom: 10px;
  }
}
</style>