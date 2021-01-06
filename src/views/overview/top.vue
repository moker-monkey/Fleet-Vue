<template>
  <el-row class="wrap" :gutter="10">
    <el-row class="item header">
      <search-bar @search="handler_search" :showList="['channel']"></search-bar>
    </el-row>
    <card-group></card-group>
    <!-- ---------------------- -->
    <el-col :span="12" class="item">
      <card1
        :data="card_data.bigBonus"
        :options="{ tool: false, size: 'middle' }"
      >
        <template v-slot:content="scope">
          <el-table size="small" :data="scope.data.data.table">
            <el-table-column prop="ord" width="80px" label="序号"></el-table-column>
            <el-table-column prop="name" label="账号"></el-table-column>
            <el-table-column prop="time" label="时间"></el-table-column>
            <el-table-column prop="money" label="中奖金额"></el-table-column>
          </el-table>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <el-col :span="12" class="item">
      <card1
        :data="card_data.freezeMoney"
        :options="{ tool: false, size: 'middle' }"
      >
        <template v-slot:content="scope">
          <el-table size="small" :data="scope.data.data.table">
            <el-table-column prop="ord" width="80px" label="序号"></el-table-column>
            <el-table-column prop="name" label="账号"></el-table-column>
            <el-table-column prop="time" label="时间"></el-table-column>
            <el-table-column prop="money" label="冻结金额"></el-table-column>
          </el-table>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <!-- -------------------------------- -->
    <!-- ---------------------- -->
    <el-col :span="12" class="item">
      <card1
        :data="card_data.rechargeUser"
        :options="{ tool: false, size: 'middle' }"
      >
        <template v-slot:content="scope">
          <el-table size="small" :data="scope.data.data.table">
            <el-table-column prop="ord" width="80px" label="序号"></el-table-column>
            <el-table-column prop="name" label="账号"></el-table-column>
            <el-table-column prop="time" label="时间"></el-table-column>
            <el-table-column prop="money" label="充值金额"></el-table-column>
          </el-table>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <el-col :span="12" class="item">
      <card1
        :data="card_data.extractUser"
        :options="{ tool: false, size: 'middle' }"
      >
        <template v-slot:content="scope">
          <el-table size="small" :data="scope.data.data.table">
            <el-table-column prop="ord" width="80px" label="序号"></el-table-column>
            <el-table-column prop="name" label="账号"></el-table-column>
            <el-table-column prop="time" label="时间"></el-table-column>
            <el-table-column prop="money" label="提现金额"></el-table-column>
          </el-table>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <!-- -------------------------------- -->
    <!-- ---------------------- -->
    <el-col :span="12" class="item">
      <card1
        :data="card_data.antiWaterUser"
        :options="{ tool: false, size: 'middle' }"
      >
        <template v-slot:content="scope">
          <el-table size="small" :data="scope.data.data.table">
            <el-table-column prop="ord" width="80px" label="序号"></el-table-column>
            <el-table-column prop="name" label="账号"></el-table-column>
            <el-table-column prop="time" label="时间"></el-table-column>
            <el-table-column prop="money" label="反水金额"></el-table-column>
          </el-table>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <el-col :span="12" class="item">
      <card1
        :data="card_data.preferentialUser"
        :options="{ tool: false, size: 'middle' }"
      >
        <template v-slot:content="scope">
          <el-table size="small" :data="scope.data.data.table">
            <el-table-column prop="ord" width="80px" label="序号"></el-table-column>
            <el-table-column prop="name" label="账号"></el-table-column>
            <el-table-column prop="time" label="时间"></el-table-column>
            <el-table-column prop="money" label="优惠金额"></el-table-column>
          </el-table>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <!-- -------------------------------- -->
    <!-- ---------------------- -->
    <el-col :span="12" class="item">
      <card1
        :data="card_data.rechargeAgency"
        :options="{ tool: false, size: 'middle' }"
      >
        <template v-slot:content="scope">
          <el-table size="small" :data="scope.data.data.table">
            <el-table-column prop="ord" width="80px" label="序号"></el-table-column>
            <el-table-column prop="name" label="账号"></el-table-column>
            <el-table-column prop="time" label="时间"></el-table-column>
            <el-table-column prop="money" label="充值金额"></el-table-column>
          </el-table>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <el-col :span="12" class="item">
      <card1
        :data="card_data.humanNumAgency"
        :options="{ tool: false, size: 'middle' }"
      >
        <template v-slot:content="scope">
          <el-table size="small" :data="scope.data.data.table">
            <el-table-column prop="ord" width="80px" label="序号"></el-table-column>
            <el-table-column prop="name" label="账号"></el-table-column>
            <el-table-column prop="time" label="时间"></el-table-column>
            <el-table-column prop="money" label="人数"></el-table-column>
          </el-table>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <!-- -------------------------------- -->
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
import cardGroup from "./topCard.vue";
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
  public card_data = {};
  public mounted() {
    this.$api.top.GET().then((res: any) => {
      this.card_data = res.data.results;
    });
  }
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