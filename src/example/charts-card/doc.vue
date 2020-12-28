<template>
  <fragment>
    <el-row type="flex" :gutter="30" class="content-item">
      <el-col :span="24">
        <card1
          :data="card_data.newuser"
          :options="{ tool: false, size: 'big' }"
        >
          <template #content>
            <lineCharts style="width: 100%; height: 200px"></lineCharts>
          </template>
          <template #dialog> </template>
        </card1>
      </el-col>
    </el-row>
    <el-row type="flex" :gutter="30" class="content-item">
      <el-col :span="12">
        <card1
          :data="card_data.newuser"
          :options="{ tool: false, size: 'middle', compare_inline: true }"
        >
          <template #content>
            <lineCharts style="width: 100%; height: 200px"></lineCharts>
          </template>
          <template #dialog> </template>
        </card1>
      </el-col>
    </el-row>
    <el-row type="flex" :gutter="30" class="content-item">
      <el-col :span="6">
        <card1 :data="card_data.newuser"></card1>
      </el-col>
      <el-col :span="6">
        <card1 :data="card_data.newuser"></card1>
      </el-col>
      <el-col :span="6">
        <card1 :data="card_data.newuser"></card1>
      </el-col>
      <el-col :span="6">
        <card1 :data="card_data.newuser">
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
    <el-row>
      <el-col :span="12">
        <card1 :data="card_data.newuser">
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
} from 'vue-property-decorator';
import card1 from '@/views/components/chartsCard/card-1.vue';
import lineCharts from '@/example/charts/lineCharts.vue';

@Component({
  components: {
    card1,
    lineCharts,
  },
})
export default class extends Vue {
  public card_data = {
    newuser: {
      title: '实时 | 累计新增用户',
      date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
      subTime: '今日',
      subTitle: '今日',
      count: 2020,
      unit: '人',
      mtm: 30,
      yty: 40,
    },
    styleThree: {
      title: '实时 | 累计新增用户',
      date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
      subTime: '今日',
      subTitle: '今日',
      count: 2020,
      unit: '人',
      mtm: 30,
      yty: 40,
    },
  };
}
</script>
<style lang="scss" scoped>
.content-item {
  margin-top: 20px;
}
</style>