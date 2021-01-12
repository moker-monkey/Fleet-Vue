<template>
  <el-row class="table-flex">
    <el-row class="table-header">
      <table>
        <thead>
          <tr>
            <!-- TODO: th添加类名，用于降序 升序样式应用 -->
            <th v-for="(i, k) in headers" :key="k">
              <el-popover
                v-if="i.filterable"
                popper-class="filter-popper"
                placement="bottom"
                trigger="click"
                minWidth="200"
              >
                <div class="card-grid-filter">
                  <div class="filter-top">
                    <b class="pull-left">筛选</b>
                    <span class="pull-right">清除</span>
                  </div>
                  <ul
                    v-if="
                      i.hasOwnProperty('filterType') &&
                      i.filterType === 'checkbox'
                    "
                  >
                    <li
                      v-for="(i, k) in checkboxList"
                      :key="k"
                      class="el-dropdown-menu__item"
                    >
                      <el-checkbox
                        v-model="i.id"
                        v-text="`${i.cn_name}(${i.en_name})`"
                      ></el-checkbox>
                    </li>
                  </ul>
                  <ul
                    v-if="
                      i.hasOwnProperty('filterType') && i.filterType === 'input'
                    "
                  >
                    <div class="search-box">
                      <el-input
                        size="small"
                        placeholder="请输入关键字"
                      ></el-input>
                    </div>
                    <li
                      v-for="(i, k) in searchboxList"
                      :key="k"
                      class="el-dropdown-menu__item"
                    >
                      <el-checkbox
                        v-model="i.id"
                        v-text="`${i.cn_name}(${i.en_name})`"
                      ></el-checkbox>
                    </li>
                  </ul>
                  <div
                    v-if="
                      i.hasOwnProperty('filterType') &&
                      i.filterType === 'dateRangePicker'
                    "
                  >
                    <el-row>
                      <el-date-picker
                        v-model="startDate"
                        type="date"
                        placeholder="开始日期"
                      ></el-date-picker>
                    </el-row>
                    <el-row>至</el-row>
                    <el-row>
                      <el-date-picker
                        v-model="endDate"
                        type="date"
                        placeholder="结束日期"
                      ></el-date-picker>
                    </el-row>
                  </div>
                </div>
                <span slot="reference">
                  <span class="cell" v-text="i.label"></span>
                  <i v-if="i.sortable" class="fa fa-caret-up"></i>
                  <i v-if="i.sortable" class="fa fa-caret-down"></i>
                </span>
              </el-popover>
              <span v-else>
                <span class="cell" v-text="i.label"></span>
                <i v-if="i.sortable" class="fa fa-caret-up"></i>
                <i v-if="i.sortable" class="fa fa-caret-down"></i>
              </span>
            </th>
          </tr>
        </thead>
      </table>
    </el-row>
    <el-row class="table-body">
      <div v-for="(i, k) in datas" :key="k">
        <table>
          <tr>
            <td v-for="(g, h) in headers" :key="h">
              <div v-if="g.prop === 'index'" v-text="k + 1"></div>
              <div v-else class="cell" v-text="i[g.prop]"></div>
            </td>
          </tr>
        </table>
      </div>
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

@Component
export default class extends Vue {
  public headers: any = [
    {
      label: '序号',
      prop: 'index',
      sortable: false,
      filterable: true,
      filterType: 'checkbox',
    },
    {
      label: '队列名',
      prop: 'name',
      sortable: true,
      filterable: true,
      filterType: 'input',
    },
    {
      label: 'CPU配额',
      prop: 'max_cpu',
      sortable: true,
      filterable: false,
    },
    {
      label: '当前CPU',
      prop: 'current_cpu',
      sortable: true,
      filterable: false,
    },
    {
      label: '子系统',
      prop: 'subsystem',
      sortable: false,
      filterable: true,
      filterType: 'input',
    },
    {
      label: '开发部门',
      prop: 'dev_dept',
      sortable: false,
      filterable: true,
      filterType: 'input',
    },
    {
      label: '开发分组',
      prop: 'dev_group',
      sortable: false,
      filterable: true,
      filterType: 'input',
    },
    {
      label: '创建时间',
      prop: 'create_time',
      sortable: true,
      filterable: true,
      filterType: 'dateRangePicker',
    },
    {
      label: '修改时间',
      prop: 'modify_time',
      sortable: false,
      filterable: false,
    },
  ];
  public datas: any = [
    {
      name: 'root',
      max_cpu: 1000,
      current_cpu: 1000,
      subsystem: 'DB管家(LOPS-DBMS)',
      dev_dept: '寿险总部大数据平台团队',
      dev_group: '寿险总部大数据平台团队开发组',
      create_time: '2021-01-05 12:10:19',
      modify_time: '2021-01-05 12:10:19',
    },
    {
      name: 'root_queue_sx04.1545_01',
      max_cpu: 2000,
      current_cpu: 2000,
      subsystem: 'DB管家(LOPS-DBMS)',
      dev_dept: '寿险总部大数据平台团队',
      dev_group: '寿险总部大数据平台团队开发组',
      create_time: '2021-01-05 12:10:19',
      modify_time: '2021-01-05 12:10:19',
    },
  ];
  public checkboxList: any = [
    {
      id: 1,
      en_name: 'LOPS_DBMS',
      cn_name: 'DB管家',
    },
    {
      id: 2,
      en_name: 'LBDP-OCP',
      cn_name: '寿险大数据对外公共数据平台',
    },
    {
      id: 3,
      en_name: 'LBDP-DM-ADSA',
      cn_name: '代理人数据增强分析系统',
    },
    {
      id: 4,
      en_name: 'LBDP-MINING',
      cn_name: '寿险模型核心系统',
    },
  ];
  public searchboxList: any = [];
  public startDate: any = '';
  public endDate: any = '';
}
</script>
<style lang="scss" scoped>
.table-flex {
  table {
    text-align: center;
    table-layout: fixed;
    width: 100%;
    font-size: 14px;
    max-width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    border-bottom: 1px solid #c0c0c0;
    border-collapse: collapse;
    color: #606266;
    tr {
      min-height: 36px;
      line-height: 36px;
      td {
        padding-left: 16px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .table-header {
    thead {
      color: #909399;
      font-weight: 500;
      th {
        
        padding-left: 16px;
        text-align: left;
        cursor: pointer;
      }
      .cell {
        display: inline-block;
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
</style>