// 用于整合charts-card卡片与插槽，使其更灵活的产生多种功能
// card-1表示第一种card的整合样式
<template>
  <base-card
    :data="data"
    :options="options"
    :class="{
      'base-card': true,
      'big-card': options.size === 'big',
      'mid-card': options.size === 'middle',
    }"
  >
    <template v-slot:count="scope">
      <div class="title">
        <span class="title">{{ scope.data.title }}</span>
        <span>
          <slot name="tool" v-if="options.tool">
            <el-button type="text" size="mini" @click="showDialog = true"
              >趋势</el-button
            >
          </slot>
        </span>
      </div>
      <div class="time">
        {{ scope.data.date }}
        <span class="subTime">| {{ scope.data.subTime }}</span>
      </div>
      <div class="subtitle">{{ scope.data.subTitle }}</div>
      <div class="content">
        <slot name="count">
          <count-to
            class="number"
            :startVal="0"
            :endVal="scope.data.count"
          ></count-to
          >{{ scope.data.unit }}
        </slot>
      </div>
    </template>
    <template v-slot:subCount="scope">
      <div>
        <div class="compare monthOnMonth">
          <span> 环比 </span>
          <span class="row up"></span>
          <span>
            <count-to
              :startVal="0"
              :endVal="scope.data.mtm"
              suffix="%"
            ></count-to>
          </span>
        </div>
        <div class="compare yearOnYear">
          <span> 同比 </span>
          <span class="row down"></span>
          <span>
            <count-to
              :startVal="0"
              :endVal="scope.data.yty"
              suffix="%"
            ></count-to>
          </span>
        </div>
      </div>
      <div
        class="bottom"
        v-if="options.size === 'big' || options.size === 'middle'"
      >
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
    <template #content>
      <slot name="content"></slot>
    </template>

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
} from "vue-property-decorator";
import base from "@/components/api-card/chartsCard/base.vue";
import countTo from "vue-count-to";

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
@import "@/assets/common/placeVariable.scss";
.base-card {
  .compare {
    display: inline;
  }
  .content {
    .number {
      font-size: 30px;
    }
  }
}
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
  .header {
    max-width: 200px;
  }
  .content .number {
    margin-left: 20px;
  }
}
.mid-card {
  .compare {
    display: block;
  }
  .bottom {
    float: right;
    margin-right: 42px;
    font-size: 20px;
    border-left: 1px solid #000;
    padding-left: 40px;
    top: 0;
    @include clearfix;
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