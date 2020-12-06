<template>
  <el-row class="wrap">
    <el-row class="item header">
      <search-bar @search="handler_search" :showList="['channel']"></search-bar>
    </el-row>
    <card-group></card-group>
    <el-col :span="24" class="item">
      <card1 :data="card_data.newUser" :options="{ tool: false, size: 'big' }">
        <template #content>
          <lineCharts style="width: 100%; height: 200px"></lineCharts>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <el-col :span="12" class="item">
      <card1 :data="card_data.sharingUser" :options="{ tool: false, size: 'middle' }">
        <template #content>
          <lineCharts style="width: 100%; height: 200px"></lineCharts>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
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
} from "vue-property-decorator";

import searchBar from "../components/searchBar/searchBar.vue";
import cardGroup from "./cardGroup.vue";
import lineCharts from "@/example/charts/lineCharts.vue";
import card1 from "../components/chartsCard/card-1.vue";

@Component({
  components: {
    searchBar,
    cardGroup,
    lineCharts,
    card1,
  },
})
export default class extends Vue {
  public card_data = {
    newUser: {
      title: "实时 | 累计新增用户",
      date: new Date().Format("yyyy-MM-dd hh:mm:ss"),
      subTime: "今日",
      subTitle: "过去24小时",
      count: 411,
      unit: "人",
      mtm: 58,
      yty: 74,
      mtm_unit: "up",
      yty_unit: "up",
      allCount: 84492,
      avgCount: 2702,
    },
    sharingUser: {
      title: "实时 | 分时新增用户",
      date: new Date().Format("yyyy-MM-dd hh:mm:ss"),
      subTime: "今日",
      subTitle: "过去24小时",
      count: 344,
      unit: "人",
      mtm: 72,
      yty: 16,
      mtm_unit: "up",
      yty_unit: "up",
      allCount: 11,
      avgCount: 6,
    },
  };
  public handler_search(value: any) {
    console.log(value);
  }
}
</script>
<style lang="scss" scoped>
.item {
  margin: 10px 0 0;
}
// .content-item:not(:first-child) {
//   margin-top: 40px;
// }
</style>