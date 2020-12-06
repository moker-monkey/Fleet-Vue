<template>
  <fragment>
    <el-row type="flex" :gutter="30" class="content-item">
      <el-col :span="6">
        <card1 :data="card_data.newUser"></card1>
      </el-col>
      <el-col :span="6">
        <card1 :data="card_data.oldUser"></card1>
      </el-col>
      <el-col :span="6">
        <card1 :data="card_data.dayActiveUser"></card1>
      </el-col>
      <el-col :span="6">
        <card1 :data="card_data.visitCount"></card1>
      </el-col>
    </el-row>
    <el-row type="flex" :gutter="30" class="content-item">
      <el-col :span="6">
        <card1 :data="card_data.recharge"></card1>
      </el-col>
      <el-col :span="6">
        <card1 :data="card_data.extract"></card1>
      </el-col>
      <el-col :span="6">
        <card1 :data="card_data.draw"></card1>
      </el-col>
      <el-col :span="6">
        <card1 :data="card_data.discount">
          <el-table
            :data="[
              { name: 123, hello: 321 },
              { name: 123, hello: 321 },
            ]"
          >
            <el-table-column prop="name" label="name"></el-table-column>
            <el-table-column prop="hello" label="hello"></el-table-column>
          </el-table>
        </card1>
      </el-col>
    </el-row>
  </fragment>
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
import card1 from "../components/chartsCard/card-1.vue";
import lineCharts from "@/example/charts/lineCharts.vue";

@Component({
  components: {
    card1,
    lineCharts,
  },
})
export default class extends Vue {
  public card_data = {
    newuser: {
      title: "实时 | 累计新增用户",
      date: new Date().Format("yyyy-MM-dd hh:mm:ss"),
      subTime: "今日",
      subTitle: "今日",
      count: 656,
      unit: "人",
      mtm: 30,
      yty: 40,
    },
  };
  
  public mounted() {
    this.$api.registrationAnalysisCard.GET().then((res:any)=>{
      this.card_data = res.data.results
    });
  }
}
</script>
<style lang="scss" scoped>
.wrap {
  .content-item ~ .content-item {
    margin-top: 20px;
  }
}
</style>