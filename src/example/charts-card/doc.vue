<template>
  <el-row type="flex" :gutter="30" class="doc">
    <el-col :span="6">
      <Base :data="firstData">
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
        </template>
      </Base>
    </el-col>
    <!-- <el-col :span="6"><Base /></el-col>
    <el-col :span="6"><Base /></el-col>
    <el-col :span="6"><Base /></el-col> -->
  </el-row>
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
import Base from './base.vue';
import countTo from 'vue-count-to';

@Component({
  components: {
    Base,
    countTo
  },
})
export default class extends Vue {
  public firstData = {
    title: '实时 | 累计新增用户',
    date: new Date(),
    subTime: '今日',
    subTitle: 'xxxx',
    count: 2020,
    unit: '人',
    mtm: '30',
    yty: '40',
  };
}
</script>
<style lang="scss" scoped>
.doc {
  width: 100%;
}
</style>