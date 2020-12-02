<template>
  <el-row class="wrap">
    <el-row class="header">
      <search-bar @search="handler_search" :showList="['channel']"></search-bar>
    </el-row>
    <el-row type="flex" :gutter="30" class="content-item">
      <el-col :span="6">
        <card1 :data="card_data.newuser">
          <!-- <div></div> -->
        </card1>
      </el-col>
      <!-- <el-col :span="6">
        <card1 :data="card_data.newuser"></card1>
      </el-col>
      <el-col :span="6">
        <card1 :data="card_data.newuser"></card1>
      </el-col>
      <el-col :span="6">
        <card1 :data="card_data.newuser"></card1>
      </el-col> -->
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
import card1 from '../components/chartsCard/card-1.vue';
import searchBar from '../components/searchBar/searchBar.vue';

@Component({
  components: {
    card1,
    searchBar,
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
  };
  public handler_search(value: any) {
    console.log(value);
  }
}
</script>
<style lang="scss" scoped>
.header {
  margin: 10px 0;
}
// .content-item:not(:first-child) {
//   margin-top: 40px;
// }
.wrap {
  .content-item ~ .content-item {
    margin-top: 20px;
  }
}
</style>